'use client'
import { BagSimple, ShoppingBag } from "@phosphor-icons/react"
import { Separator } from "../ui/separator"
import { Badge } from "@/components/ui/badge"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button"
import { DotsVerticalIcon } from "@radix-ui/react-icons"
import Image from "next/image"



const PendingOrder = ({ pendingOrders }) => {
    // let sumHarga = 0
    // const mapHarga = pendingOrders.map((pendingOrder) => {
    //     pendingOrder.OrderFurniture.map((OrderFurniture) => {
    //         sumHarga += OrderFurniture.furnitures.harga 
    //     })
    // })
    // const totalHarga = parseInt(sumHarga)
    const groupedOrders = pendingOrders.reduce((groups, order) => {
        const date = new Date(order.created_at).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(order);
        return groups;
    }, {});
    return (
        <>
            <div className="p-5 border rounded-xl">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xl">
                        <ShoppingBag className="h-5 w-5 text-color-accent2"/> 
                        <h2 className="text-color-accent2">Your Orders</h2>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                        <p>All your <span><Badge variant="outline" className="rounded-full text-yellow-600 bg-yellow-200">Pending</Badge></span></p>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0 font-bold">
                                    <DotsVerticalIcon className="h-5 w-4"  />
                                </Button>
                            </DropdownMenuTrigger>
                        </DropdownMenu>
                    </div>
                </div>
                <Separator className="mt-6" />
                <div className="mt-8">
                    {Object.keys(groupedOrders).map((date) => (
                        <div key={date} className="mb-6">
                            {groupedOrders[date].map((pendingOrder) => {
                                const totalHarga = pendingOrder.OrderFurniture.reduce((total, orderFurniture) => total + orderFurniture.furnitures.harga, 0)
                                return (
                                    <div key={pendingOrder.id} className="border p-4 rounded-lg mb-4">
                                        <h3 className="text-lg font-bold mb-2">{date}</h3>
                                        {pendingOrder.OrderFurniture.map((orderFurniture, i) => (
                                            <div key={i} className="flex items-start gap-3 my-4">
                                                <Image
                                                    width={768}
                                                    height={768}
                                                    src={orderFurniture.furnitures.image}
                                                    className="rounded-[15px] object-cover w-60 h-60"
                                                    alt={orderFurniture.furnitures.nama_furniture}
                                                />
                                                <div className="flex gap-2 mt-1 text-lg">
                                                    <div className="flex flex-col">
                                                        <p className="text-color-secondary font-bold">{orderFurniture.furnitures.nama_furniture}</p>
                                                        <p className="text-color-grey font-light">{orderFurniture.store.nama_toko}</p>
                                                    </div>
                                                </div>
                                                <div className="ml-auto mt-2">
                                                    <p className="text-sky-500 font-medium">Rp {orderFurniture.furnitures.harga.toLocaleString("id-ID", { minimumFractionDigits: 2 })}</p>
                                                </div>
                                            </div>
                                        ))}
                                        <Separator />
                                        <div className="flex items-center justify-between font-bold text-lg mt-3 p-2">
                                            <p className="text-color-secondary">Total harga</p>
                                            <p className="text-color-secondary">Rp {totalHarga.toLocaleString("id-ID", { minimumFractionDigits: 2 })}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default PendingOrder