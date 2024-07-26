import CategoriesCard from "@/components/CategoriesCard"
import prisma from "@/libs/prisma"

const Categories = async () => {
    const categories = await prisma?.furnitures.groupBy({
        select: {
            categories: true
        },
        by: ["categories"],
        _count: {
            _all: true
        }
    })
    const countCategory = await prisma?.furnitures.count()
    return (
        <main className="px-16 pt-16">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="font-bold text-4xl text-color-accent2">Categories ({countCategory})</h3>
                    <p className="text-sm font-normal text-color-grey py-2">Explore all categories from our furniture</p>
                </div>
            </div>
            <CategoriesCard categories={categories} />
        </main>
    )
}
export default Categories