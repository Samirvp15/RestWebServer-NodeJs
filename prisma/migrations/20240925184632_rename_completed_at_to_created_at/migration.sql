/*
  Warnings:

  - You are about to drop the column `createdAt` on the `todo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "todo" DROP COLUMN "createdAt",
ADD COLUMN     "completedAt" TIMESTAMP;
