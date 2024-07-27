import Midtrans from "midtrans-client"

let snap = new Midtrans.Snap({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SECRET,
    clientKey: process.env.MIDTRANS_PUBLIC_CLIENT
})

export async function POST (request) {
    const { id, harga, quantity } = await request.json()
    let parameterMidtrans = {
        item_details: {
            name: "Keranjang Furniture",
            price: parseInt(harga),
            quantity: quantity
        },
        transaction_details: {
            order_id: id,
            gross_amount: harga
        }
    }
    const createToken = await snap.createTransactionToken(parameterMidtrans)
    console.log(createToken)
    if ( !createToken ) return Response.json({ status: 500, isCreated: false })
    else return Response.json({ createToken, status: 200, isCreated: true })
}