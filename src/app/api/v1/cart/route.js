import { authUserGithub } from "@/libs/auth"
import prisma from "@/libs/prisma"
import slugify from "slugify"

export async function POST( request ) {
    const { id_furniture, nama_furniture, user_email, harga, categories, image } = await request.json()
    const data = {
        nama_furniture, categories, id_furniture, image, user_email,
        harga: parseFloat(harga),
        slug: slugify(nama_furniture, { lower: true, strict: true, replacement: "-" })
    }
    console.log("Data yang dikirim ke Prisma:", data)
    const addItem = await prisma.cart.create({data})
    if (!addItem) return Response.json({ status: 500, isCreated: false })
    else return Response.json({ status: 200, isCreated: true })
}

export async function GET() {
    const userAuth = await authUserGithub()
    const countCart = await prisma.cart.count({
        where: { user_email: userAuth?.email }
    })
    if (!countCart) return Response.json({ status: 401 })
    else return Response.json({ status: 200, countCart })
}