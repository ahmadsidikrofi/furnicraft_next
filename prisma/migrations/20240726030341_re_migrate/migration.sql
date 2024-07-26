-- CreateTable
CREATE TABLE `furnitures` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_furniture` VARCHAR(255) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `deskripsi` LONGTEXT NOT NULL,
    `harga` DOUBLE NOT NULL,
    `categories` VARCHAR(155) NOT NULL,
    `image` LONGTEXT NULL,
    `store_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `furnitures_slug_key`(`slug`),
    INDEX `furnitures_store_id_nama_furniture_slug_idx`(`store_id`, `nama_furniture`, `slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cart` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_furniture` BIGINT NOT NULL,
    `user_email` VARCHAR(255) NULL,
    `nama_furniture` VARCHAR(255) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `harga` DOUBLE NOT NULL,
    `categories` VARCHAR(155) NOT NULL,
    `image` LONGTEXT NULL,

    UNIQUE INDEX `cart_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Store` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_toko` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NULL,
    `deskripsi` LONGTEXT NULL,
    `user_email` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Store_slug_key`(`slug`),
    INDEX `Store_user_email_slug_idx`(`user_email`, `slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `furnitures` ADD CONSTRAINT `furnitures_store_id_fkey` FOREIGN KEY (`store_id`) REFERENCES `Store`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
