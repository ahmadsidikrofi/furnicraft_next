import { authUserGithub } from "@/libs/auth"
import Midtrans from "midtrans-client"
import { nanoid } from "nanoid"

let snap = new Midtrans.Snap({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SECRET,
    clientKey: process.env.MIDTRANS_PUBLIC_CLIENT
})

export async function POST (request) {
    const authUser = await authUserGithub()
    const { ids, harga, quantity, nama_furniture } = await request.json()
    const furnitureItem = await prisma.furnitures.findMany({
        where: {
            id: {
                in: ids.map(id => parseInt(id))
            }
        }
    })
    const itemDetails = furnitureItem.map((furniture) => ({
        id: furniture.id.toString(),
        name: furniture.nama_furniture,
        quantity: quantity,
        price: parseInt(furniture.harga),
    }))
    let grossAmount = itemDetails.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    let parameterMidtrans = {
        item_details: itemDetails,
        customer_details: {
            first_name: authUser?.name,
            email: authUser?.email,
        },
        transaction_details: {
            order_id: `TRX-${nanoid(4)}-${nanoid(8)}`,
            gross_amount: harga
        },
        credit_card: {
            secure: true,
        },
    }
    const createToken = await snap.createTransactionToken(parameterMidtrans)
    console.log(createToken, parameterMidtrans)
    if ( !createToken ) return Response.json({ status: 500, isCreated: false })
    else return Response.json({ createToken, status: 200, isCreated: true })
}