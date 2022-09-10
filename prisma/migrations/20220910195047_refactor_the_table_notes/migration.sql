/*
  Warnings:

  - Added the required column `annotation` to the `Notes` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Notes_title_key";

-- AlterTable
ALTER TABLE "Notes" ADD COLUMN     "annotation" TEXT NOT NULL;
