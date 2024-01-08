-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_HumanLogin" (
    "humanUserName" TEXT NOT NULL,
    "humanPassword" TEXT NOT NULL,
    "humanApiId" TEXT NOT NULL,
    CONSTRAINT "HumanLogin_humanApiId_fkey" FOREIGN KEY ("humanApiId") REFERENCES "Human" ("humanApiId") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_HumanLogin" ("humanApiId", "humanPassword", "humanUserName") SELECT "humanApiId", "humanPassword", "humanUserName" FROM "HumanLogin";
DROP TABLE "HumanLogin";
ALTER TABLE "new_HumanLogin" RENAME TO "HumanLogin";
CREATE UNIQUE INDEX "HumanLogin_humanUserName_key" ON "HumanLogin"("humanUserName");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
