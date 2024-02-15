import slugify from "slugify"
import prisma from "../../../../libs/prisma"

export async function POST (request) {
    const { nama_furniture, harga, categories, image, id_furniture, slug } = await request.json()
    const data = { 
        nama_furniture, 
        slug: slugify(nama_furniture, { lower: true, strict: true, replacement: "-" }), 
        harga: parseFloat(harga), categories, image, id_furniture
    }
    const tambahKeranjang = await prisma.cart.create({ data: data })
    if (!tambahKeranjang) return Response.json({ status: 500, isCreated: false })
    else return Response.json({ status: 200, isCreated: true })
}

export async function GET () {
    const countCart = await prisma.cart.count()
    if (!countCart) return Response.json({ status: 500 })
    else return Response.json({ status: 200, countCart })
}

export async function DELETE () {
    const deleteAllCart = await prisma?.cart.deleteMany()
    if (!deleteAllCart) return Response.json({ status: 500, isDelete: false })
    else return Response.json({ status: 200, isDelete: true })
}