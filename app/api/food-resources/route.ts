// app/api/food-resources/route.ts
// Next.js 14 App Router API route
// GET  /api/food-resources         — list all active resources (with optional filters)
// GET  /api/food-resources?type=PANTRY&zip=28216  — filtered results

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
// ─────────────────────────────────────────────────────────────
// GET /api/food-resources
// Query params:
//   type     — ResourceType enum value (e.g. FOOD_BANK, PANTRY)
//   zip      — filter by zip code
//   kids     — "true" to show only resources that serve children
//   q        — free-text search on name, description, neighborhoods
// ─────────────────────────────────────────────────────────────
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const type = searchParams.get("type") as string | null;
    const zip = searchParams.get("zip");
    const kids = searchParams.get("kids");
    const q = searchParams.get("q");

    // Build a dynamic Prisma WHERE clause
    const where: any = {
      isActive: true, // only surface verified, active locations
      ...(type && { resourceType: type }),
      ...(zip && { zip }),
      ...(kids === "true" && { servesChildren: true }),
      // Free-text search across name, description, and neighborhoods
      ...(q && {
        OR: [
          { name: { contains: q, mode: "insensitive" } },
          { description: { contains: q, mode: "insensitive" } },
          { servesNeighborhoods: { contains: q, mode: "insensitive" } },
          { address: { contains: q, mode: "insensitive" } },
        ],
      }),
    };

    const resources = await prisma.foodResource.findMany({
      where,
      orderBy: [
        { name: "asc" }, // alphabetical by default
      ],
      include: {
        operatingHours: {
          orderBy: { dayOfWeek: "asc" },
        },
      },
    });

    // Return a clean JSON response with metadata
    return NextResponse.json(
      {
        success: true,
        count: resources.length,
        data: resources,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[API /food-resources] Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}

// ─────────────────────────────────────────────────────────────
// POST /api/food-resources  (Admin only — add a new resource)
// In production, protect this with an auth middleware.
// ─────────────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Basic required-field validation
    const required = ["name", "slug", "resourceType", "address", "zip"];
    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json(
          { success: false, message: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    const resource = await prisma.foodResource.create({
      data: {
        ...body,
        operatingHours: body.operatingHours
          ? { create: body.operatingHours }
          : undefined,
      },
      include: { operatingHours: true },
    });

    return NextResponse.json({ success: true, data: resource }, { status: 201 });
  } catch (error: any) {
    // Handle unique constraint violation on slug
    if (error.code === "P2002") {
      return NextResponse.json(
        { success: false, message: "A resource with this slug already exists." },
        { status: 409 }
      );
    }
    console.error("[API /food-resources POST] Error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong." },
      { status: 500 }
    );
  }
}
