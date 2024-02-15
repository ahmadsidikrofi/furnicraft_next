-- CreateTable
CREATE TABLE `cart` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_furniture` VARCHAR(255) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `harga` DOUBLE NOT NULL,
    `categories` VARCHAR(155) NOT NULL,
    `image` LONGTEXT NULL,

    UNIQUE INDEX `cart_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
