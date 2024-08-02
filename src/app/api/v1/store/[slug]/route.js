import prisma from "@/libs/prisma"
import slugify from "slugify"

export async function PUT (request, { params }) {
    const slug = params.slug
    const { nama_toko, deskripsi, telp } = await request.json()
    const updateStore = await prisma.Store.update({
        where: { slug: slug },
        data: {
            nama_toko, deskripsi, telp, slug: slugify(nama_toko, { replacement: '-', lower: true, strict: true })
        }
    })
    if (!updateStore) return Response.json({ status: 500, isUpdate: false, message: "Terjadi kesalahan saat mengubah data" })
    else return Response.json({ status: 200, isUpdate: true, message: "Tokomu berhasil diupdate", updateStore })
}

export async function DELETE (request, { params }) {
    const slug = params.slug
    const delStore = await prisma.Store.delete({
        where: { slug: slug }
    })
    if (!delStore) return Response.json({ status: 500, message: "Terjadi kesalahan. Gagal menghapus toko" })
    else return Response.json({ status: 200, message: "Tokomu berhasil dihapus" })
}