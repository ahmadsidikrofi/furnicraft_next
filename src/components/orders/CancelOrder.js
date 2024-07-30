'use client'
import { Invoice, TeaBag, Wallet, XCircle } from "@phosphor-icons/react"
import { Separator } from "../ui/separator"
import { Button } from "../ui/button"
import { DotsVerticalIcon } from "@radix-ui/react-icons"
import { Badge } from "../ui/badge"
import toast, { Toaster } from 'react-hot-toast'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"

const CancelOrder = ({ canceledOrders }) => {
    const groupedOrders = canceledOrders.reduce((groups, order) => {
        const date = new Date(order.created_at).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
        if (!groups[date]) {
            groups[date] = []
        }
        groups[date].push(order)
        return groups
    }, {});
    return (
        <>
            <Toaster />
            <div>
                {canceledOrders.length < 1 ? <p className="text-xl font-semibold text-color-secondary text-center mt-10">No orders yet!</p> : null}
                {Object.keys(groupedOrders).map((date) => (
                    <div key={date} className="mb-6">
                        {groupedOrders[date].map((canceledOrder) => {
                            const totalHarga = canceledOrder.OrderFurniture.reduce((total, orderFurniture) => total + orderFurniture.furnitures.harga, 0)
                            return (
                                <div key={canceledOrder.id} className="border p-4 rounded-xl my-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 ">
                                            <TeaBag className="h-6 w-6 text-color-accent2" />
                                            <h2 className="text-color-accent2 text-lg">Your Orders</h2>
                                        </div>
                                        <div className="flex items-center justify-end gap-2">
                                            <Badge className="rounded-full text-rose-600 bg-rose-200">Canceled</Badge>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" className="h-8 w-8 p-0 font-bold">
                                                        <DotsVerticalIcon className="h-5 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent>
                                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem className="flex gap-3 cursor-pointer">
                                                        <Invoice className="h-5 w-5" />
                                                        <p>Detail</p>
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>
                                    </div>
                                    <h3 className="text-sm font-medium mt-1">{date}</h3>
                                    <Separator className="mt-6" />

                                    {canceledOrder.OrderFurniture.map((orderFurniture, i) => (
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
                            )
                        })}
                    </div>
                ))}
            </div>
        </>
    )
}
export default CancelOrder