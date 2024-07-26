import prisma from "@/libs/prisma"

export async function GET({ params }) {
    const slug = params.slug
    const cartItem = prisma.cart.findUnique({
        where: { slug: slug }
    })
    if (!cartItem) return Response.json({ status: 404, message: "Cart is empty"})
    else return Response.json({ status: 200, cartItem })
}
export async function DELETE ( request, { params }) {
    const slug = params.slug
    const deleteCartItem = await prisma.cart.delete({ where: { slug: slug } })
    if (!deleteCartItem) return Response.json({ status: 500, isDelete: false, message: "Item gagal terhapus" })
    else return Response.json({ status: 200, isDelete: true, message: "Item berhasil dihapus" })
}
