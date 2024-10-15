/*
  Warnings:

  - You are about to drop the column `authorid` on the `Post` table. All the data in the column will be lost.
  - Added the required column `authorId` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "authorid",
ADD COLUMN     "autherName" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "authorId" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "imagelink" TEXT NOT NULL DEFAULT '';
