import prisma from "../../../../../libs/prisma";
import slugify from "slugify";

export async function PUT (request, { params }) {
    const slug = params.slug
    const { nama_kategori } = await request.json()
    try {
        await prisma.categories.update({
            where: {slug: slug},
            data: {
                nama_kategori: nama_kategori,
                slug: slugify(nama_kategori, { lower: true, strict: true, replacement: '-' })
            }
        })
        return Response.json({ status: 200, message: "Kategori berhasil diubah" });
    } catch (err) {
        console.error("Error:", err);
        return Response.json({ status: 500, error: "Internal server error" });
    }
}
export async function DELETE (request, { params }) {
    const slug = params.slug 
    // const id = parseInt(params.id)
    try {
        await prisma.categories.delete({ where: { slug: slug } })
        return Response.json({ status: 200, message: "Kategori berhasil dihapus" });
    } catch (err) {
        console.error("Error:", err);
        return Response.json({ status: 500, error: "Internal server error" });
    }
}