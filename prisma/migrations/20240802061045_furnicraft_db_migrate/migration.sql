-- CreateTable
CREATE TABLE "furnitures" (
    "id" SERIAL NOT NULL,
    "nama_furniture" VARCHAR(255) NOT NULL,
    "slug" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "harga" DOUBLE PRECISION NOT NULL,
    "categories" VARCHAR(155) NOT NULL,
    "image" TEXT,
    "store_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "furnitures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cart" (
    "id" SERIAL NOT NULL,
    "id_furniture" INTEGER NOT NULL,
    "user_email" VARCHAR(255),
    "nama_furniture" VARCHAR(255) NOT NULL,
    "slug" TEXT NOT NULL,
    "harga" DOUBLE PRECISION NOT NULL,
    "categories" VARCHAR(155) NOT NULL,
    "image" TEXT,

    CONSTRAINT "cart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Store" (
    "id" SERIAL NOT NULL,
    "nama_toko" TEXT NOT NULL,
    "slug" TEXT,
    "deskripsi" TEXT,
    "telp" TEXT,
    "user_email" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Store_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Orders" (
    "id" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "total_harga" DOUBLE PRECISION NOT NULL,
    "token" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderFurniture" (
    "id" SERIAL NOT NULL,
    "orderId" TEXT NOT NULL,
    "furnitureId" INTEGER NOT NULL,
    "storeId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OrderFurniture_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "furnitures_slug_key" ON "furnitures"("slug");

-- CreateIndex
CREATE INDEX "furnitures_store_id_nama_furniture_slug_idx" ON "furnitures"("store_id", "nama_furniture", "slug");

-- CreateIndex
CREATE UNIQUE INDEX "cart_slug_key" ON "cart"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Store_slug_key" ON "Store"("slug");

-- CreateIndex
CREATE INDEX "Store_user_email_slug_idx" ON "Store"("user_email", "slug");

-- CreateIndex
CREATE INDEX "Orders_user_email_idx" ON "Orders"("user_email");

-- CreateIndex
CREATE INDEX "OrderFurniture_orderId_furnitureId_storeId_idx" ON "OrderFurniture"("orderId", "furnitureId", "storeId");

-- AddForeignKey
ALTER TABLE "furnitures" ADD CONSTRAINT "furnitures_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "Store"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderFurniture" ADD CONSTRAINT "OrderFurniture_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderFurniture" ADD CONSTRAINT "OrderFurniture_furnitureId_fkey" FOREIGN KEY ("furnitureId") REFERENCES "furnitures"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderFurniture" ADD CONSTRAINT "OrderFurniture_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
