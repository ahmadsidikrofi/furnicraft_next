-- AlterTable
ALTER TABLE `cart` MODIFY `image` TEXT NULL;

-- AlterTable
ALTER TABLE `furnitures` MODIFY `deskripsi` TEXT NOT NULL,
    MODIFY `image` TEXT NULL;

-- AlterTable
ALTER TABLE `store` ADD COLUMN `telp` VARCHAR(191) NULL,
    MODIFY `deskripsi` TEXT NULL;
