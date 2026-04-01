// app/api/food-resources/route.ts
// GET  /api/food-resources         — list all active resources (with optional filters)
// GET  /api/food-resources?type=PANTRY&zip=28216  — filtered results

import { NextRequest, NextResponse } from "next/server";
import { foodResources } from "@/lib/food-resources-data";

// ─────────────────────────────────────────────────────────────
// GET /api/food-resources
// Query params:
//   type  — resourceType value (FOOD_BANK, PANTRY, MEAL_PROGRAM)
//   zip   — filter by zip code
//   kids  — "true" to show only resources that serve children
//   q     — free-text search on name, description
// ─────────────────────────────────────────────────────────────
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const type = searchParams.get("type");
    const zip = searchParams.get("zip");
    const kids = searchParams.get("kids");
    const q = searchParams.get("q")?.toLowerCase();

    let results = foodResources.filter((r) => r.isActive);

    if (type) {
      results = results.filter((r) => r.resourceType === type);
    }

    if (zip) {
      results = results.filter((r) => r.zip === zip);
    }

    if (kids === "true") {
      results = results.filter((r) => r.servesChildren);
    }

    if (q) {
      results = results.filter(
        (r) =>
          r.name.toLowerCase().includes(q) ||
          r.description?.toLowerCase().includes(q) ||
          r.address.toLowerCase().includes(q) ||
          r.city.toLowerCase().includes(q)
      );
    }

    // Sort alphabetically by name
    results.sort((a, b) => a.name.localeCompare(b.name));

    return NextResponse.json(
      {
        success: true,
        count: results.length,
        data: results,
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
