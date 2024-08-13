import { authUserGithub } from "@/libs/auth"
import prisma from "@/libs/prisma"
import Midtrans from "midtrans-client"
import { nanoid } from "nanoid"

let snap = new Midtrans.Snap({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SECRET,
    clientKey: process.env.MIDTRANS_PUBLIC_CLIENT
})
export async function POST (request) {
    const authUser = authUserGithub()
    // console.log(authUser)
    const { orderId } = await request.json()
    const order = await prisma.orders.findUnique({
        where: { id: orderId }
    })
    const prefix = 'FURN'
    const dateOrder = new Date().toISOString().slice(0, 10).replace(/-/g, '')
    const uniqueId = nanoid(10)
    const newOrderId = `${prefix}-${dateOrder}-${nanoid(3)}-${uniqueId}`

    let midtransParams = {
        customer_details: {
            first_name: authUser?.name,
            email: authUser?.email,
        },
        transaction_details: {
            order_id: newOrderId,
            gross_amount: order.total_harga
        },
        credit_cart: { secure: true }
    }
    const createToken = await snap.createTransactionToken(midtransParams)
    const updateOrder = await prisma.orders.update({
        where: { id: orderId },
        data: {
            token: createToken,
        }
    })
    console.log(createToken, midtransParams)
    if (updateOrder) return Response.json({ token: updateOrder.token })
}