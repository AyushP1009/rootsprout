-- CreateTable
CREATE TABLE "FoodResource" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "resourceType" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL DEFAULT 'Charlotte',
    "state" TEXT NOT NULL DEFAULT 'NC',
    "zip" TEXT NOT NULL,
    "latitude" REAL,
    "longitude" REAL,
    "phone" TEXT,
    "email" TEXT,
    "website" TEXT,
    "description" TEXT,
    "eligibilityNotes" TEXT,
    "idRequired" BOOLEAN NOT NULL DEFAULT false,
    "servesChildren" BOOLEAN NOT NULL DEFAULT true,
    "servesNeighborhoods" TEXT,
    "acceptsDonations" BOOLEAN NOT NULL DEFAULT false,
    "donationTypes" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "lastVerified" DATETIME,
    "imageUrl" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "OperatingHours" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "foodResourceId" INTEGER NOT NULL,
    "dayOfWeek" TEXT NOT NULL,
    "openTime" TEXT NOT NULL,
    "closeTime" TEXT NOT NULL,
    "notes" TEXT,
    CONSTRAINT "OperatingHours_foodResourceId_fkey" FOREIGN KEY ("foodResourceId") REFERENCES "FoodResource" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "GrowModule" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "cropName" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "daysToHarvest" INTEGER,
    "sunNeeds" TEXT,
    "waterNeeds" TEXT,
    "containerOk" BOOLEAN NOT NULL DEFAULT false,
    "description" TEXT,
    "coverImage" TEXT,
    "isKidsCorner" BOOLEAN NOT NULL DEFAULT false,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "GrowStep" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "growModuleId" INTEGER NOT NULL,
    "stepNumber" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "iconEmoji" TEXT,
    "imageUrl" TEXT,
    "tipForKids" TEXT,
    CONSTRAINT "GrowStep_growModuleId_fkey" FOREIGN KEY ("growModuleId") REFERENCES "GrowModule" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "FoodResource_slug_key" ON "FoodResource"("slug");

-- CreateIndex
CREATE INDEX "FoodResource_zip_idx" ON "FoodResource"("zip");

-- CreateIndex
CREATE INDEX "FoodResource_resourceType_idx" ON "FoodResource"("resourceType");

-- CreateIndex
CREATE INDEX "FoodResource_servesChildren_idx" ON "FoodResource"("servesChildren");

-- CreateIndex
CREATE INDEX "OperatingHours_foodResourceId_idx" ON "OperatingHours"("foodResourceId");

-- CreateIndex
CREATE UNIQUE INDEX "GrowModule_slug_key" ON "GrowModule"("slug");

-- CreateIndex
CREATE INDEX "GrowStep_growModuleId_idx" ON "GrowStep"("growModuleId");
