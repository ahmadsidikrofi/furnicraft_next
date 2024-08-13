import prisma from "@/libs/prisma";
import Midtrans from "midtrans-client";

export async function POST(request) {
    const body = await request.json()
    let orderId = body.order_id
    let transaction_status = body.transaction_status
    console.log('Midtrans Notification Received:', { orderId, transaction_status })
    if (!body.order_id || !body.transaction_status) {
        return new Response(JSON.stringify({ status: 400, message: "Bad Request: Missing required fields" }), { status: 400 });
    }

    if (transaction_status === 'settlement') {
        await prisma.orders.update({
            where: {
                id: body.order_id
            },
            data: {
                status: 'SETTLEMENT'
            }
        })
        return new Response(JSON.stringify({ message: 'Order status updated to SETTLEMENT' }), { status: 200 })
    }
    return new Response(JSON.stringify({ message: 'Transaction status not handled' }), { status: 200 });
}
