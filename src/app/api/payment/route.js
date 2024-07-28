import { authUserGithub } from "@/libs/auth"
import Midtrans from "midtrans-client"

let snap = new Midtrans.Snap({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SECRET,
    clientKey: process.env.MIDTRANS_PUBLIC_CLIENT
})

export async function POST (request) {
    const authUser = await authUserGithub()
    const { id, harga, quantity } = await request.json()
    const furnitureItem = await prisma.furnitures.findMany({
        where: {
            id: id
        }
    })
    let parameterMidtrans = {
        item_details: furnitureItem.map((furniture) => ({
            id: furniture.id,
            name: furniture.nama_furniture,
            quantity: quantity,
            price: parseInt(furniture.harga),
        })),
        customer_details: {
            first_name: authUser?.name,
            email: authUser?.email,
        },
        transaction_details: {
            order_id: id,
            gross_amount: harga
        }
    }
    const createToken = await snap.createTransactionToken(parameterMidtrans)
    console.log(createToken, parameterMidtrans)
    if ( !createToken ) return Response.json({ status: 500, isCreated: false })
    else return Response.json({ createToken, status: 200, isCreated: true })
}