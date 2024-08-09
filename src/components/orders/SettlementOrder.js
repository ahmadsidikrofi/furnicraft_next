'use client'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "../ui/separator";
import { Invoice, TeaBag, Wallet, XCircle } from "@phosphor-icons/react";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import Image from "next/image";
import Link from "next/link";

const SettlementOrder = ({ settleOrder }) => {
    const groupedOrders = settleOrder.reduce((groups, order) => {
        const date = new Date(order.created_at).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
        if (!groups[date]) {
            groups[date] = []
        }
        groups[date].push(order)
        return groups
    }, {})
    return (
        <>
            {settleOrder.length < 1 ? <p className="text-xl font-semibold text-color-secondary text-center mt-10">No orders yet!</p> : null}
            {Object.keys(groupedOrders).map((date) => (
                <div key={date} className="mb-6">
                    {groupedOrders[date].map((settleOrder, i) => {
                        const totalHarga = settleOrder.OrderFurniture.reduce((total, orderFurniture) => total + orderFurniture.furnitures.harga, 0)
                        return (
                            <div className="border p-4 rounded-xl my-6" key={settleOrder.id}>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 ">
                                        <TeaBag className="h-6 w-6 text-color-accent2" />
                                        <h2 className="text-color-accent2 text-lg">Your Orders</h2>
                                    </div>
                                    <div className="flex items-center justify-end gap-2">
                                        <p><Badge className="rounded-full text-emerald-600 bg-emerald-200">Settlement</Badge></p>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" className="h-8 w-8 p-0 font-bold">
                                                    <DotsVerticalIcon className="h-5 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                <DropdownMenuSeparator />
                                                <Link target="_blank" href={`/invoice/${settleOrder.id}`}>
                                                    <DropdownMenuItem className="flex gap-3 cursor-pointer">
                                                        <Invoice className="h-5 w-5" />
                                                        <p>Invoice</p>
                                                    </DropdownMenuItem>
                                                </Link>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </div>
                                <h3 className="text-sm font-medium mt-1">{date}</h3>
                                <Separator className="mt-6" />

                                {settleOrder.OrderFurniture.map((orderFurniture, i) => (
                                    <div key={i}>
                                        <div className="flex items-start gap-3 my-4">
                                            <Image
                                                width={768}
                                                height={768}
                                                src={orderFurniture.furnitures.image}
                                                className="rounded-[15px] object-cover w-60 h-60 max-sm:w-36 max-sm:h-36"
                                                alt={orderFurniture.furnitures.nama_furniture}
                                            />
                                            <div className="flex gap-2 mt-1 text-lg">
                                                <div className="flex flex-col">
                                                    <p className="text-color-secondary font-bold">{orderFurniture.furnitures.nama_furniture}</p>
                                                    <p className="text-color-grey font-light max-sm:text-sm">{orderFurniture.store.nama_toko}</p>
                                                    <p className="text-sky-500 text-sm font-medium md:hidden">Rp {orderFurniture.furnitures.harga.toLocaleString("id-ID", { minimumFractionDigits: 2 })}</p>
                                                </div>
                                            </div>
                                            <div className="ml-auto mt-2 max-sm:hidden sm:hidden md:block">
                                                <p className="text-sky-500 font-medium">Rp {orderFurniture.furnitures.harga.toLocaleString("id-ID", { minimumFractionDigits: 2 })}</p>
                                            </div>
                                        </div>
                                        <Separator />
                                    </div>
                                ))}
                                <Separator className="h-[2px]" />
                                <div className="flex items-center justify-between font-bold text-lg mt-3 p-2">
                                    <p className="text-color-secondary">Total harga</p>
                                    <p className="text-color-secondary">Rp {totalHarga.toLocaleString("id-ID", { minimumFractionDigits: 2 })}</p>
                                </div>
                            </div>
                        ) 
                    })}
                </div>
            ))}
        </>
    )
}

export default SettlementOrder;