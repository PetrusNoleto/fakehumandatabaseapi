/*
  Warnings:

  - The primary key for the `Human` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `age` on the `Human` table. All the data in the column will be lost.
  - You are about to drop the column `cratedAt` on the `Human` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Human` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `Human` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Human` table. All the data in the column will be lost.
  - You are about to drop the column `indentificationCardNumber` on the `Human` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `Human` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Human` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Human` table. All the data in the column will be lost.
  - You are about to drop the column `postalcode` on the `Human` table. All the data in the column will be lost.
  - Added the required column `humanAge` to the `Human` table without a default value. This is not possible if the table is not empty.
  - The required column `humanApiId` was added to the `Human` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `humanEmail` to the `Human` table without a default value. This is not possible if the table is not empty.
  - Added the required column `humanGender` to the `Human` table without a default value. This is not possible if the table is not empty.
  - Added the required column `humanIndentification` to the `Human` table without a default value. This is not possible if the table is not empty.
  - Added the required column `humanLocation` to the `Human` table without a default value. This is not possible if the table is not empty.
  - Added the required column `humanName` to the `Human` table without a default value. This is not possible if the table is not empty.
  - Added the required column `humanPhone` to the `Human` table without a default value. This is not possible if the table is not empty.
  - Added the required column `humanPostalCode` to the `Human` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "HumanLogin" (
    "humanUserName" TEXT NOT NULL,
    "humanPassword" TEXT NOT NULL,
    "humanApiId" TEXT NOT NULL,
    CONSTRAINT "HumanLogin_humanApiId_fkey" FOREIGN KEY ("humanApiId") REFERENCES "Human" ("humanApiId") ON DELETE RESTRICT ON UPDATE CASCADE
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
    "humanLocation" TEXT NOT NULL,
    "humanPostalCode" INTEGER NOT NULL,
    "humanCreatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
DROP TABLE "Human";
ALTER TABLE "new_Human" RENAME TO "Human";
CREATE UNIQUE INDEX "Human_humanApiId_key" ON "Human"("humanApiId");
CREATE UNIQUE INDEX "Human_humanIndentification_key" ON "Human"("humanIndentification");
CREATE UNIQUE INDEX "Human_humanEmail_key" ON "Human"("humanEmail");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "HumanLogin_humanUserName_key" ON "HumanLogin"("humanUserName");
