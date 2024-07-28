/*
  Warnings:

  - You are about to drop the `orderfurniture` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `orders` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `orderfurniture` DROP FOREIGN KEY `OrderFurniture_furnitureId_fkey`;

-- DropForeignKey
ALTER TABLE `orderfurniture` DROP FOREIGN KEY `OrderFurniture_orderId_fkey`;

-- DropForeignKey
ALTER TABLE `orderfurniture` DROP FOREIGN KEY `OrderFurniture_storeId_fkey`;

-- DropTable
DROP TABLE `orderfurniture`;

-- DropTable
DROP TABLE `orders`;
