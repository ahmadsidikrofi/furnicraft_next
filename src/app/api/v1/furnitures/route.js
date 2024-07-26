import prisma from "@/libs/prisma";

export async function POST (request) {
    const { nama_furniture, categories, deskripsi, harga, image, slug, store_id } = await request.json()
    const data = { nama_furniture, categories, deskripsi, harga: parseFloat(harga), image, slug, store_id }
    console.log("Data to be inserted:", data);
    const createFurniture = await prisma.furnitures.create({ data })
    if (!createFurniture) return Response.json({ status: 500, isCreated: false, error: error.message })
    else return Response.json({ status: 201, isCreated: true, createFurniture })
}