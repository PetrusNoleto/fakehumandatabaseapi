/*
  Warnings:

  - You are about to drop the column `CPF` on the `Human` table. All the data in the column will be lost.
  - Added the required column `indentificationCardNumber` to the `Human` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Human" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "indentificationCardNumber" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "postalcode" INTEGER NOT NULL,
    "cratedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Human" ("age", "cratedAt", "email", "gender", "id", "location", "name", "phone", "postalcode") SELECT "age", "cratedAt", "email", "gender", "id", "location", "name", "phone", "postalcode" FROM "Human";
DROP TABLE "Human";
ALTER TABLE "new_Human" RENAME TO "Human";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
