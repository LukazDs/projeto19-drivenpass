/*
  Warnings:

  - Added the required column `isVirtual` to the `Cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `securityCode` to the `Cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `typeCard` to the `Cards` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Credito', 'Debito', 'CreditoDebito');

-- AlterTable
ALTER TABLE "Cards" ADD COLUMN     "isVirtual" BOOLEAN NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "securityCode" INTEGER NOT NULL,
ADD COLUMN     "typeCard" "Role" NOT NULL;
