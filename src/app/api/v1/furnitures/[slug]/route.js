import prisma from "@/libs/prisma"
import slugify from "slugify"

export async function PUT (request, { params }) {
    const slug = params.slug
    const { nama_furniture, deskripsi, harga, image, categories, store_id } = await request.json()
    const updateFurniture = await prisma.furnitures.update({
        where: { slug: slug },
        data: { nama_furniture, deskripsi, image, categories, store_id,
            harga: parseFloat(harga),
            slug: slugify(nama_furniture, { strict: true, replacement: '-', lower: true })
        }
    })
    if (!updateFurniture) return Response.json({ status: 500, isUpdate: false, message: "Furniture gagal di ubah" })
    else return Response.json({ status: 200, isUpdate: true, message: "Furniture berhasil diubah", updateFurniture })
}

export async function DELETE (request, {params}) {
    const slug = params.slug
    const deleteFurniture = await prisma.furnitures.delete({
        where: { slug: slug }
    })
    if (!deleteFurniture) return Response.json({ status: 500, isDeleted: false })
    else return Response.json({ status: 200, isDeleted: true, message: "Furnitur berhasil dihapuskan" })
}