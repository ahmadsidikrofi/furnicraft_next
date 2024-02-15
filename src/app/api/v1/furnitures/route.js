import prisma from "../../../../libs/prisma"

export async function POST (request) {
    const { nama_furniture, slug, deskripsi, harga, categories, image } = await request.json()
    const data =  { nama_furniture, slug, deskripsi, harga: parseFloat(harga), categories, image }
    const createFurniture = await prisma.furnitures.create({ data })
    if (!createFurniture) return Response.json({ status: 500, isCreated: false })
    else return Response.json({ status:200, isCreated: true })
}