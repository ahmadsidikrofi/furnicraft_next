import { authUserGithub } from "@/libs/auth";
import prisma from "@/libs/prisma";

export async function PUT (request, { params }) {
    const authUser = await authUserGithub()
    const { orderId } = params
    const order = await prisma.Orders.findUnique({
        where: { id: orderId }
    })
    if (!order) return Response.json({ status: 404, message: "Pesanan tidak ditemukan" })
    if (order.user_email !== authUser.email) return Response.json({ status: 403, message: "Kamu bukan pelanggan asli" })

    await prisma.Orders.update({
        where: { id: order.id },
        data: { status: 'CANCELED' }
    }) 

    const url = `https://api.sandbox.midtrans.com/v2/${orderId}/cancel`;
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            authorization: 'Basic U0ItTWlkLXNlcnZlci00SGxiRjZ3TjFtcXFwS3I1UjgzNFB3VXE6'
        }
    };
    fetch(url, options)
    return Response.json({ status: 200, isCanceled: true, message: "Pesananmu berhasil dibatalkan" })
}