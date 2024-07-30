import { Button } from "@/components/ui/button"
import prisma from "@/libs/prisma"
import { DownloadIcon } from "@radix-ui/react-icons"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Separator } from "@radix-ui/react-dropdown-menu"
  

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
            <div className="flex justify-end my-8">
                <Button className="flex gap-2 items-center cursor-pointer bg-color-accent rounded-full">
                    <DownloadIcon className="h-5 w-5 text-color-primary font-bold" />
                    <p className="text-lg">Download Invoice</p>
                </Button>
            </div>
            <div className="border rounded-2xl py-5 px-4">
                <h1 className="text-color-accent2 font-bold text-2xl mb-4">FurniCraft</h1>
                <h3 className="text-color-secondary font-medium text-lg">Detail Payment</h3>
                <p>Order ID: {invoiceData.id}</p>
                <p>Order Date: {invoiceDate}</p>
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
                    <p className="text-lg">Total harga</p>
                    <p className="text-lg">Rp {invoiceData.total_harga.toLocaleString('id-ID', {minimumFractionDigits: 2})}</p>
                </div>
                <p className="text-center text-color-grey">A list of your recent invoices.</p>
            </div>
        </main>
    );
}
 
export default Invoice;