import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FormSettingStore from "@/components/FormSettingStore"
import prisma from "@/libs/prisma"
import { authUserGithub } from "@/libs/auth"
import SearchFurnitureDashboard from "@/components/SearchFurnitureDashboard"

const detailStore = async (slug) => {
    const dataStore = await prisma.Store.findUnique({
        where: { slug: slug }
    })
    return dataStore
}
const StoreDashboardPage = async ({ params }) => {
    const { slug } = params
    const detailData = await detailStore(slug)
    const authUser = authUserGithub()
    const email = authUser?.email
    const initialFurnitures = await prisma?.furnitures?.findMany({
        where: { store_id: detailData.id },
        orderBy: { id: 'desc' }
    })
    return (
        <main>
            <div className="space-y-0.5 lg:px-6 flex justify-between w-[73vw]">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-color-accent2">Store Dashboard</h2>
                    <p className="text-muted-foreground">
                        Manage your store here.
                    </p>
                </div>
            </div>
            <div className="lg:mx-6 mt-10">
                <Tabs defaultValue="products" className="w-[320px]">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="products">Products</TabsTrigger>
                        <TabsTrigger value="settings">Settings</TabsTrigger>
                    </TabsList>
                    <Separator className="my-3 w-[80vw] lg:w-[73vw] max-sm:w-[80vw] md:none" />
                    <TabsContent value="products" className="lg:w-[70vw] md:w-[90vw] sm:w-[90vw] max-sm:w-[85vw]">
                        <div className="">
                            <SearchFurnitureDashboard initialFurnitures={initialFurnitures} detailData={detailData}/>
                        </div>
                    </TabsContent>

                    <TabsContent value="settings" className="lg:w-[70vw] md:w-[90vw] sm:w-[90vw] max-sm:w-[85vw] border rounded-xl p-5">
                        <h2 className="text-color-accent2 font-bold text-xl my-3">Set up your Store</h2>
                        <p className="text-muted-foreground">
                            Edit or set your store as you want
                        </p>
                        <div className="mt-5">
                            <FormSettingStore detailData={detailData} email={email}/>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </main>
    )
}
export default StoreDashboardPage