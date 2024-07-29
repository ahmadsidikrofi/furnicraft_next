import { Separator } from "../ui/separator"
import { Badge } from "@/components/ui/badge"


const PendingOrder = ({ pendingOrders }) => {
    return (
        <>
            <div className="p-5 border rounded-xl">
                <div className="flex items-center justify-between">
                    <h2 className="text-color-accent2 text-xl mb-3">Your Orders</h2>
                    <p>All your <span><Badge variant="outline" className="rounded-full text-yellow-600 bg-yellow-200">Pending</Badge></span></p>
                </div>
                <Separator className="mt-6" />
                <div className="mt-8">
                    {pendingOrders.map((pendingOrder) => (
                        <div key={pendingOrder.id}>
                            {pendingOrder.OrderFurniture.map((OrderFurniture, i) => (
                                <div key={i}>
                                    <p>{OrderFurniture.furnitures.nama_furniture}</p>
                                    <p>{OrderFurniture.store.nama_toko}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default PendingOrder