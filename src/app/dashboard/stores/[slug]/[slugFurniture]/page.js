import FormUpdateFurniture from "@/components/FormUpdateFurniture"
import { Separator } from "@/components/ui/separator"
import prisma from "@/libs/prisma"

const storeId = async (slug) => {
    const dataStore = await prisma.Store.findUnique({
        where: { slug: slug }
    })
    return dataStore
}
const furnitureId = async (slugFurniture) => {
    const dataFurniture = await prisma.furnitures.findUnique({
        where: { slug: slugFurniture }
    })
    return dataFurniture
}
const UpdateFurniture = async ({ params }) => {
    const { slug } = params
    const { slugFurniture } = params
    const dataStore = await storeId(slug)
    const dataFurniture = await furnitureId(slugFurniture)
    return (
        <main>
            <div className="space-y-0.5 lg:px-6 w-[73vw]">
                <h2 className="text-3xl font-bold tracking-tight text-color-accent2">Store Dashboard</h2>
                <p className="text-muted-foreground">
                    Manage your store here.
                </p>
            </div>
            <Separator className="my-6 w-[90vw] lg:w-[73vw] max-sm:w-[80vw] md:none" />
            <div className="border border-opacity-30 border-color-accent2 rounded-lg p-5 lg:mx-8">
                <h2 className="text-color-accent2 font-bold text-2xl">Edit Furniture</h2>
                <p className="text-muted-foreground text-sm">
                    Edit your furniture from your store
                </p>
                <div className="mt-5">
                    <FormUpdateFurniture storeId={dataStore.id} slugStore={dataStore.slug} dataFurniture={dataFurniture}/>
                </div>
            </div>
        </main>
    )
}
export default UpdateFurniture