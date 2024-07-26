import FormNewFurniture from "@/components/FormNewFurniture";
import { Separator } from "@/components/ui/separator"

const storeId = async (slug) => {
    const dataStore = await prisma.Store.findUnique({
        where: { slug: slug }
    })
    return dataStore
}
const NewFurniture = async ({ params }) => {
    const { slug } = params
    const detailData = await storeId(slug)
    return ( 
        <main>
            <div className="space-y-0.5 lg:px-6 w-[73vw]">
                <h2 className="text-3xl font-bold tracking-tight text-color-accent2">Store Dashboard</h2>
                <p className="text-muted-foreground">
                    Manage your store here.
                </p>
            </div>
            <div className=""> 
                <Separator className="my-3 w-[90vw] lg:w-[73vw] max-sm:w-[80vw] md:none" />
                <div className="border border-opacity-30 border-color-accent2 rounded-lg p-5 lg:mx-8">
                    <h2 className="text-color-accent2 font-bold text-2xl">Add Furniture</h2>
                    <p className="text-muted-foreground text-sm">
                        Add a your furniture to your store
                    </p>
                    <div className="mt-5">
                        <FormNewFurniture storeId={detailData.id} slugStore={detailData.slug}/>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default NewFurniture