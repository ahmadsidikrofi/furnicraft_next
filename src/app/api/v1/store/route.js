import prisma from "@/libs/prisma"

export async function POST (request) {
    const { nama_toko, deskripsi, slug, telp, user_email } = await request.json()
    const data = { nama_toko, deskripsi, telp, slug, user_email }
    const createStore = await prisma.Store.create({ data })
    if (!createStore) return Response.json({ status: 500, isCreated: false, message: "Toko gagal dibuat" })
    else return Response.json({ status: 201, isCreated: true, message: "Toko berhasil dibuat", createStore })
}