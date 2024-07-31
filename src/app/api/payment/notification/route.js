export async function POST(request) {
    let body;
    try {
        body = await request.json();
    } catch (error) {
        console.error('Error parsing JSON:', error);
        return new Response(JSON.stringify({ status: 400, message: "Bad Request: Unable to parse JSON" }), { status: 400 });
    }

    // Destructure the necessary properties
    const { orderId, transaction_status } = body;

    // Handle missing properties
    if (!orderId || !transaction_status) {
        return new Response(JSON.stringify({ status: 400, message: "Bad Request: Missing required fields" }), { status: 400 });
    }

    // Proceed with Midtrans verification and order status update
    let snap = new Midtrans.Snap({
        isProduction: false,
        serverKey: process.env.MIDTRANS_SECRET,
    });

    try {
        const statusResponse = await snap.transaction.status(orderId);

        // Perbarui status pesanan berdasarkan status transaksi dari Midtrans
        if (statusResponse.transaction_status === "settlement") {
            await prisma.Orders.update({
                where: { id: orderId },
                data: { status: "SETTLEMENT" },
            });
        } else if (statusResponse.transaction_status === "cancel" || statusResponse.transaction_status === "expire") {
            await prisma.Orders.update({
                where: { id: orderId },
                data: { status: "CANCELED" },
            });
        } else if (statusResponse.transaction_status === "deny") {
            await prisma.Orders.update({
                where: { id: orderId },
                data: { status: "DENIED" },
            });
        }

        return new Response(JSON.stringify({ status: 200, message: "Success" }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ status: 500, message: "Internal Server Error" }), { status: 500 });
    }
}
