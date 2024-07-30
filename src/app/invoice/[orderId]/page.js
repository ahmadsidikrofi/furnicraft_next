import prisma from "@/libs/prisma"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import DownloadInvoice from "@/components/DownloadInvoice"

const Invoice = async ({ params }) => {
    const { orderId } = params
    const invoiceData = await prisma.Orders.findUnique({
        where: { id: orderId },
        include: {
            OrderFurniture: {
                include: {
                    furnitures: true,
                    store: true
                }
            }
        }
    })

    const invoiceDate = new Date(invoiceData.created_at).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
    return ( 
        <main className=" p-5">
            <div className="border rounded-2xl py-5 px-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-color-accent2 font-bold text-2xl mb-4">FurniCraft</h1>
                    <DownloadInvoice invoiceData={invoiceData}/>
                </div>
                <h3 className="text-color-secondary font-semibold text-lg">Detail Payment</h3>
                <p className="font-medium">Order ID: <span className="font-normal">{invoiceData.id}</span></p>
                <p className="font-medium">Order Date: <span className="font-normal">{invoiceDate}</span></p>
                <h3 className="font-medium my-7">Purchased Furniture</h3>
                <Table className="p-3">
                    <TableHeader>
                        <TableRow className="font-medium">
                            <TableHead className="w-[250px] font-medium">Product name</TableHead>
                            <TableHead className="font-medium">Store name</TableHead>
                            <TableHead className="font-medium">Quantity</TableHead>
                            <TableHead className="text-right font-medium">Price</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoiceData.OrderFurniture.map((item, i) => {
                            return (
                                <TableRow key={i}>
                                    <TableCell className="font-medium">{item.furnitures.nama_furniture}</TableCell>
                                    <TableCell>{item.store.nama_toko}</TableCell>
                                    <TableCell>1</TableCell>
                                    <TableCell className="text-right">Rp {item.furnitures.harga.toLocaleString('id-ID', {minimumFractionDigits: 2})}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
                <div className="border-t-2 mt-8 p-2 flex justify-between items-center font-semibold text-color-accent2">
                    <p className="text-xl">Total</p>
                    <p className="text-xl">Rp {invoiceData.total_harga.toLocaleString('id-ID', {minimumFractionDigits: 2})}</p>
                </div>
                <p className="text-center text-color-grey">A list of your recent invoices.</p>
            </div>
        </main>
    );
}
 
export default Invoice;