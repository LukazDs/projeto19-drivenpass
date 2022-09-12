/*
  Warnings:

  - You are about to drop the column `authorName` on the `Cards` table. All the data in the column will be lost.
  - You are about to drop the column `isVirtual` on the `Cards` table. All the data in the column will be lost.
  - You are about to drop the column `label` on the `Cards` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Cards` table. All the data in the column will be lost.
  - You are about to drop the column `securityCode` on the `Cards` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Cards` table. All the data in the column will be lost.
  - You are about to drop the column `typeCard` on the `Cards` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Cards" DROP COLUMN "authorName",
DROP COLUMN "isVirtual",
DROP COLUMN "label",
DROP COLUMN "password",
DROP COLUMN "securityCode",
DROP COLUMN "title",
DROP COLUMN "typeCard";
