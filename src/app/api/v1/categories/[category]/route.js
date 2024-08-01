import prisma from "@/libs/prisma"

export async function GET(request, { params }) {
    const { category } = params
    try {
        const furnitureCategory = await prisma.furnitures.findMany({
            where: { 
                categories: {
                    equals: category,
                }
            }
        })
        console.log(furnitureCategory)
        if (!furnitureCategory) return Response.json({ status: 404 })
        return Response.json({ status: 200, data: furnitureCategory })
    } catch (error) {
        console.error(error)
        return Response.json({ status: 500, message: 'Internal Server Error' })
    }
}