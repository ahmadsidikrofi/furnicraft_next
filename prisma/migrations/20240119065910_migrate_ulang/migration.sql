-- CreateTable
CREATE TABLE `furnitures` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_furniture` VARCHAR(255) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `deskripsi` LONGTEXT NOT NULL,
    `harga` DOUBLE NOT NULL,
    `categories` VARCHAR(155) NOT NULL,

    UNIQUE INDEX `furnitures_slug_key`(`slug`),
    UNIQUE INDEX `furnitures_id_slug_key`(`id`, `slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
