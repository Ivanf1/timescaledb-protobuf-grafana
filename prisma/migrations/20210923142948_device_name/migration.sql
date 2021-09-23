/*
  Warnings:

  - Added the required column `name` to the `device` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "device" ADD COLUMN     "name" TEXT NOT NULL;
