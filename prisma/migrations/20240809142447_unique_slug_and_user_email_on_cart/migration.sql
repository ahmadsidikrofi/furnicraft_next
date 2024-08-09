/*
  Warnings:

  - A unique constraint covering the columns `[slug,user_email]` on the table `cart` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "cart_slug_user_email_key" ON "cart"("slug", "user_email");
