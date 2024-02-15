/*
  Warnings:

  - Added the required column `id_furniture` to the `cart` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cart` ADD COLUMN `id_furniture` BIGINT NOT NULL;
