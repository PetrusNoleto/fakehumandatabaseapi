/*
  Warnings:

  - You are about to drop the column `humanLocation` on the `Human` table. All the data in the column will be lost.
  - You are about to drop the column `humanPostalCode` on the `Human` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[humanApiId]` on the table `HumanLogin` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "HumanLogin_humanUserName_key";

-- CreateTable
CREATE TABLE "humanLocation" (
    "humanStreetName" TEXT NOT NULL,
    "humanStreetNumber" INTEGER NOT NULL,
    "humanCountry" TEXT NOT NULL,
    "humanState" TEXT NOT NULL,
    "humanPostalCode" INTEGER NOT NULL,
    "humanApiId" TEXT NOT NULL,
    CONSTRAINT "humanLocation_humanApiId_fkey" FOREIGN KEY ("humanApiId") REFERENCES "Human" ("humanApiId") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Human" (
    "humanApiId" TEXT NOT NULL PRIMARY KEY,
    "humanIndentification" TEXT NOT NULL,
    "humanName" TEXT NOT NULL,
    "humanAge" INTEGER NOT NULL,
    "humanGender" TEXT NOT NULL,
    "humanEmail" TEXT NOT NULL,
    "humanPhone" TEXT NOT NULL,
    "humanCreatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Human" ("humanAge", "humanApiId", "humanCreatedAt", "humanEmail", "humanGender", "humanIndentification", "humanName", "humanPhone") SELECT "humanAge", "humanApiId", "humanCreatedAt", "humanEmail", "humanGender", "humanIndentification", "humanName", "humanPhone" FROM "Human";
DROP TABLE "Human";
ALTER TABLE "new_Human" RENAME TO "Human";
CREATE UNIQUE INDEX "Human_humanApiId_key" ON "Human"("humanApiId");
CREATE UNIQUE INDEX "Human_humanIndentification_key" ON "Human"("humanIndentification");
CREATE UNIQUE INDEX "Human_humanEmail_key" ON "Human"("humanEmail");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "humanLocation_humanApiId_key" ON "humanLocation"("humanApiId");

-- CreateIndex
CREATE UNIQUE INDEX "HumanLogin_humanApiId_key" ON "HumanLogin"("humanApiId");
