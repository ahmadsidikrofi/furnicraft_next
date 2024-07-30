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
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const SettlementOrder = () => {
    return (
        <>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 ">
                    <TeaBag className="h-6 w-6 text-color-accent2" />
                    <h2 className="text-color-accent2 text-lg">Your Orders</h2>
                </div>
                <div className="flex items-center justify-end gap-2">
                    <p>All <Badge className="rounded-full text-emerald-600 bg-emerald-200">Settlement</Badge> Order</p>
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
                                <Wallet className="h-5 w-5" />
                                <p>Pay</p>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex gap-3 cursor-pointer">
                                <Invoice className="h-5 w-5" />
                                <p>Detail</p>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleCancelOrder(pendingOrder.id)} className="flex gap-3 cursor-pointer">
                                <XCircle className="h-5 w-5" />
                                <p>Cancel</p>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
            <Separator className="mt-6" />
        </>
    )
}

export default SettlementOrder;