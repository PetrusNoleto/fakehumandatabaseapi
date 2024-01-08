/*
  Warnings:

  - You are about to drop the `humanLocation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "humanLocation";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "HumanLocation" (
    "humanStreetName" TEXT NOT NULL,
    "humanStreetNumber" INTEGER NOT NULL,
    "humanCountry" TEXT NOT NULL,
    "humanState" TEXT NOT NULL,
    "humanPostalCode" INTEGER NOT NULL,
    "humanApiId" TEXT NOT NULL,
    CONSTRAINT "HumanLocation_humanApiId_fkey" FOREIGN KEY ("humanApiId") REFERENCES "Human" ("humanApiId") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "HumanLocation_humanApiId_key" ON "HumanLocation"("humanApiId");
