import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const OrdersPage = async () => {
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
                <Tabs>
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="pending">Pending</TabsTrigger>
                        <TabsTrigger value="paid">Paid</TabsTrigger>
                        <TabsTrigger value="canceled">Canceled</TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>
        </main>
    )
}
export default OrdersPage