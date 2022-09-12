/*
  Warnings:

  - The `typeCard` column on the `Cards` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Cards" DROP COLUMN "typeCard",
ADD COLUMN     "typeCard" TEXT NOT NULL DEFAULT 'Debito';

-- DropEnum
DROP TYPE "Role";
