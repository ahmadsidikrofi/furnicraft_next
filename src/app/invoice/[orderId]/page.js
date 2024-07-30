import { Button } from "@/components/ui/button";
import prisma from "@/libs/prisma";
import { DownloadIcon } from "@radix-ui/react-icons";

const Invoice = async ({ params }) => {
    const { orderId } = params
    const invoiceData = await prisma.Orders.findUnique({
        where: { id: orderId }
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
                <h3 className="font-medium mt-4">Purchased Furniture</h3>
            </div>
        </main>
    );
}
 
export default Invoice;