import prisma from "@/libs/prisma"

export async function POST(request) {
    const { nama_kategori, slug } = await request.json()
    const data = { nama_kategori, slug }
    const createCategory = await prisma.categories.create({ data })
    if (!createCategory) return Response.json({ status: 500, isCreated: false })
    else return Response.json({ status: 200, isCreated: true })
}

export async function GET() {
    return Response.json({message: "tes"})
}