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

export async function DELETE () {
    const authUser = await authUserGithub()
    const deleteAllCart = await prisma?.cart.deleteMany({
        where: { user_email: authUser?.email }
    })
    if (!deleteAllCart) return Response.json({ status: 500, isDelete: false })
    else return Response.json({ status: 200, isDelete: true })
}

export async function GET (request) {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug')
    const user_email = searchParams.get('user_email')
    const isFurnitureExists = await prisma.cart.findUnique({
        where: { slug: slug, user_email: user_email }
    })
    if (isFurnitureExists) return Response.json({ status: 200, exists: true })
    else return Response.json({ status: 200, exists: false })
}