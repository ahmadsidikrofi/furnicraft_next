import prisma from "@/libs/prisma"

export async function GET(request) {
    const url = new URL(request.url);
    const query = url.searchParams.get('query')
    const resultData = await prisma.furnitures.findMany({
        where: {
            nama_furniture: {
                contains: query,
                mode: 'insensitive'
            }
        }
    })
    if (!resultData) return Response.json({ status: 404, message: "Furniture tidak ditemukan" })
    else return Response.json({ status: 200, resultData }) 
}