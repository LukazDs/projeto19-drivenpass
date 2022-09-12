/*
  Warnings:

  - Added the required column `authorName` to the `Cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `label` to the `Cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Cards` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cards" ADD COLUMN     "authorName" TEXT NOT NULL,
ADD COLUMN     "label" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
