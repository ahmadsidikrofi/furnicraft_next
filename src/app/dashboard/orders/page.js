import { Separator } from "@/components/ui/separator"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PendingOrder from "@/components/orders/PendingOrder"
import { authUserGithub } from "@/libs/auth"
import prisma from "@/libs/prisma"
import SettlementOrder from "@/components/orders/SettlementOrder"
import CancelOrder from "@/components/orders/CancelOrder"

const OrdersPage = async () => {
    const authUser = await authUserGithub()
    const pendingOrders = await prisma.Orders.findMany({
        where: { status: "PENDING", user_email: authUser?.email },
        include: { 
            OrderFurniture: {
                include: {
                    furnitures: true,
                    store: true
                }
            }
        },
        orderBy: {
            created_at: 'desc'
        }
    })
    const canceledOrders = await prisma.Orders.findMany({
        where: { status: "CANCELED", user_email: authUser?.email },
        include: {
            OrderFurniture: {
                include: {
                    furnitures: true,
                    store: true
                }
            }
        },
        orderBy: {
            created_at: 'desc'
        }
    })
    return (
        <main>
            <div className="space-y-0.5 px-6 flex justify-between items-center lg:w-[73vw]">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-color-accent2">Orders</h2>
                    <p className="text-muted-foreground">
                        Any Transaction Of Yours
                    </p>
                </div>
            </div>
            <Separator className="w-[90vw] lg:w-[73vw] max-sm:w-[80vw] md:none my-3" />
            <div className="lg:mx-6 mt-5 lg:w-[70vw]">
                <Tabs defaultValue="all">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="pending">Pending</TabsTrigger>
                        <TabsTrigger value="settlement">Settlement</TabsTrigger>
                        <TabsTrigger value="canceled">Canceled</TabsTrigger>
                    </TabsList>
                    <TabsContent value="all">
                        <div className="p-5 border rounded-xl">
                            <div className="flex items-center justify-between">
                                <h2 className="text-color-accent2 text-xl mb-3">Your Orders</h2>
                                <p>All your orders</p>
                            </div>
                            <Separator className="mt-6"/>
                        </div>
                    </TabsContent>
                    <TabsContent value="pending">
                        <PendingOrder pendingOrders={pendingOrders}/>
                    </TabsContent>
                    <TabsContent value="settlement">
                        <SettlementOrder />
                    </TabsContent>
                    <TabsContent value="canceled">
                        <CancelOrder canceledOrders={canceledOrders}/>
                    </TabsContent>
                </Tabs>
            </div>
        </main>
    )
}
export default OrdersPage