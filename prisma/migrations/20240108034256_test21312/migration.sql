-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_HumanLocation" (
    "humanStreetName" TEXT NOT NULL,
    "humanStreetNumber" INTEGER NOT NULL,
    "humanCountry" TEXT NOT NULL,
    "humanState" TEXT NOT NULL,
    "humanPostalCode" TEXT NOT NULL,
    "humanApiId" TEXT NOT NULL,
    CONSTRAINT "HumanLocation_humanApiId_fkey" FOREIGN KEY ("humanApiId") REFERENCES "Human" ("humanApiId") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_HumanLocation" ("humanApiId", "humanCountry", "humanPostalCode", "humanState", "humanStreetName", "humanStreetNumber") SELECT "humanApiId", "humanCountry", "humanPostalCode", "humanState", "humanStreetName", "humanStreetNumber" FROM "HumanLocation";
DROP TABLE "HumanLocation";
ALTER TABLE "new_HumanLocation" RENAME TO "HumanLocation";
CREATE UNIQUE INDEX "HumanLocation_humanApiId_key" ON "HumanLocation"("humanApiId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
