import slugify from "slugify"

export async function PUT (request, { params }) {
    const slug = params.slug
    const { nama_furniture, deskripsi, harga, image, categories, store_id } = await request.json()
    console.log('Slug received:', slug);
    console.log('Data received:', { nama_furniture, deskripsi, harga, image, categories, store_id });
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