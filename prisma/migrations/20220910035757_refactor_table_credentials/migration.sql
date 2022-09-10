/*
  Warnings:

  - Added the required column `userId` to the `Credentials` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Credentials_credentialName_key";

-- DropIndex
DROP INDEX "Credentials_label_key";

-- DropIndex
DROP INDEX "Credentials_title_key";

-- AlterTable
ALTER TABLE "Credentials" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Credentials" ADD CONSTRAINT "Credentials_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
