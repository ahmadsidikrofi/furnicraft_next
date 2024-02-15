import FurnituresCard from "../../components/FurnituresCard"
import Link from "next/link"
import prisma from "../../libs/prisma"

const Furnitures = async () => {
    const furnitures = await prisma?.furnitures.findMany()
    const countFurniture = await prisma?.furnitures.count()
    return (
        <div className="pt-16 xl:px-16 sm:px-4 max-sm:px-4">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="font-bold text-4xl text-color-accent2">Furnitures ({countFurniture})</h3>
                    <p className="text-sm font-normal text-color-grey py-2">Get to know to our interior future furniture we offer</p>
                </div>
                <Link href="/furnitures/new" className="p-3 bg-color-accent2 hover:shadow-lg rounded-full font-medium text-color-primary text-sm hidden">Furniture baru</Link>
            </div>
            <FurnituresCard furnitures={furnitures}/>
        </div>
    )
}
export default Furnitures