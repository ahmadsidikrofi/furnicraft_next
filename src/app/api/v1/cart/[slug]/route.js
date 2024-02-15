import prisma from "../../../../../libs/prisma"

export async function DELETE (request, {params}) {
    const slug = params.slug
    const deleteCart = await prisma.cart.delete({ where: { slug:slug } })
    if (!deleteCart) return Response.json({ status: 500, isDelete: false })
    else return Response.json({ status: 200, isDelete: true })
}

export async function GET ({ params }) {
    const slug = params.slug;
    try {
        const cartItem = await prisma.cart.findUnique({
            where: { slug: slug }
        });

        if (cartItem) {
            return Response.json({ status: 200, cartItem });
        } else {
            return Response.json({ status: 404 });
        }
    } catch (error) {
        console.error("Error checking cart item:", error);
        return Response.json({ status: 500, error: "Internal Server Error" });
    }
}