'use client'
import { Invoice, TeaBag, Wallet, XCircle } from "@phosphor-icons/react"
import { Separator } from "../ui/separator"
import { Badge } from "@/components/ui/Badge"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Button } from "../ui/Button"
import { DotsVerticalIcon, ReloadIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import { useEffect, useState } from "react"
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from "next/navigation"
import Link from "next/link"

const PendingOrder = ({ pendingOrders }) => {
    const router = useRouter()
    const [orders, setOrders] = useState(pendingOrders)
    const [isLoading, setIsLoading] = useState(false)
    const groupedOrders = pendingOrders.reduce((groups, order) => {
        const date = new Date(order.created_at).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(order);
        return groups;
    }, {});

    const handleCancelOrder = async (orderId) => {
        setIsLoading(true);
        toast.loading("Membatalkan pesanan", { duration: 2000 })
        try {
            const res = await axios.put(`/api/orders/${orderId}/cancel`)
            if (res.data.status === 200) {
                setTimeout(() => {
                    setOrders(orders.filter(order => order.id !== orderId))
                    toast.success("Pesananmu berhasil dibatalkan", { duration: 1000 })
                    router.refresh();
                }, 3000);
            } else {
                toast.error("Gagal membatalkan pesanan")
            }
        } catch (err) {
            toast.error("Gagal membatalkan pesanan: " + err.message)
        } finally {
            setIsLoading(false)
        }
    }

    // Pay the order
    useEffect(() => {
        const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js"
        const snapClientKey = process.env.MIDTRANS_PUBLIC_CLIENT
        const scriptElement = document.createElement("script")
        scriptElement.src = snapScript
        scriptElement.setAttribute("data-client-key", snapClientKey)
        scriptElement.async = true
        document.body.appendChild(scriptElement)
        return () => {
            document.body.removeChild(scriptElement)
        }
    })
    const handlePayOrder = async(orderId) => {
        const { data } = await axios.post('/api/payment/charge', { orderId }) 
        window.snap.pay(data.token)
    }
    
    return (
        <>
            <Toaster />
            <div>
                {pendingOrders.length < 1 ? <p className="text-xl font-semibold text-color-secondary text-center mt-10">No orders yet!</p> : null}
                {Object.keys(groupedOrders).map((date) => (
                    <div key={date} className="mb-6">
                        {groupedOrders[date].map((pendingOrder) => {
                            const totalHarga = pendingOrder.OrderFurniture.reduce((total, orderFurniture) => total + orderFurniture.furnitures.harga, 0)
                            return (
                                <div key={pendingOrder.id} className="border p-4 rounded-xl my-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 ">
                                            <TeaBag className="h-6 w-6 text-color-accent2" />
                                            <h2 className="text-color-accent2 text-lg">Your Orders</h2>
                                        </div>
                                        <div className="flex items-center justify-end gap-2">
                                            <Badge className="rounded-full text-yellow-600 bg-yellow-200">Pending</Badge>
                                            {/* <p>{pendingOrder.id}</p>
                                            <p>{pendingOrder.OrderFurniture.map((name) => (
                                                name.furnitures.nama_furniture
                                            ))}</p> */}
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" className="h-8 w-8 p-0 font-bold">
                                                        <DotsVerticalIcon className="h-5 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent>
                                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem className="flex gap-3 cursor-pointer" onClick={() => handlePayOrder(pendingOrder.id)}>
                                                        <Wallet className="h-5 w-5" />
                                                        <p>Pay</p>
                                                    </DropdownMenuItem>
                                                    <Link href={`/invoice/${pendingOrder.id}`} target="_blank">
                                                        <DropdownMenuItem className="flex gap-3 cursor-pointer">
                                                            <Invoice className="h-5 w-5" />
                                                            <p>Invoice</p>
                                                        </DropdownMenuItem>
                                                    </Link>
                                                    <DropdownMenuItem className="flex gap-3 cursor-pointer" asChild>
                                                        <AlertDialog>
                                                            <AlertDialogTrigger asChild>
                                                                <Button variant="none" className="p-2 flex gap-3 h-9">
                                                                    {isLoading ? <ReloadIcon className="h-5 w-5 animate-spin" /> : <XCircle className="h-5 w-5" />}
                                                                    <p>Cancel</p>
                                                                </Button>
                                                            </AlertDialogTrigger>
                                                            <AlertDialogContent>
                                                                <AlertDialogHeader>
                                                                    <AlertDialogTitle>Yakin ingin dibatalkan?</AlertDialogTitle>
                                                                    <AlertDialogDescription>Dengan begini akan dianggap batal dan kamu bisa cek dimenu canceled</AlertDialogDescription>
                                                                </AlertDialogHeader>
                                                                <AlertDialogFooter>
                                                                    <AlertDialogCancel className="rounded-full">Tidak jadi</AlertDialogCancel>
                                                                    <AlertDialogAction className="bg-rose-500 rounded-full flex items-center gap-2" onClick={() => handleCancelOrder(pendingOrder.id)} >
                                                                        {isLoading ? <ReloadIcon className="h-5 w-5 animate-spin"/> : null}
                                                                        <p>Sudah mantap</p>
                                                                    </AlertDialogAction>
                                                                </AlertDialogFooter>
                                                            </AlertDialogContent>
                                                        </AlertDialog>
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>
                                    </div>
                                    <h3 className="text-sm font-medium mt-1">{date}</h3>
                                    <Separator className="mt-6" />

                                    {pendingOrder.OrderFurniture.map((orderFurniture, i) => (
                                        <div key={i}>
                                            <div  className="flex items-start gap-3 my-4">
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
                            );
                        })}
                    </div>
                ))}
            </div>
        </>
    )
}
export default PendingOrder