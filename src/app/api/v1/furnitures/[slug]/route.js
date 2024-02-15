import slugify from "slugify";
import prisma from "../../../../../libs/prisma";

export async function PUT (request, { params }) {
    const slug = params.slug
    const { nama_furniture, harga, categories, image, deskripsi } = await request.json()
    const updateFurniture = await prisma.furnitures.update({ 
        where: { slug: slug },
        data: {
            nama_furniture: nama_furniture,
            slug: slugify(nama_furniture, { lower: true, strict: true, replacement: '-' }),
            harga: parseFloat(harga),
            categories: categories,
            image: image,
            deskripsi: deskripsi
        }
    })
    if (!updateFurniture) return Response.json({ status: 500, message: "Furnitur gagal diedit", isUpdated: false })
    else return Response.json({ status: 200, message: "Furnitur berhasil diedit", isUpdated: true })
}
export async function DELETE (request, { params }) {
    const slug = params.slug
    const delFurniture = await prisma.furnitures.delete({ where: { slug: slug } })
    if (!delFurniture) return Response.json({ status: 500, message: "Furnitur gagal dihapus", isDeleted: false })
    else return Response.json({ status: 200, message: "Furnitur berhasil dihapus", isDeleted: true })
}