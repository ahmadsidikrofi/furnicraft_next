import FurnituresCard from "@/components/FurnituresCard"
import { authUserGithub } from "@/libs/auth"
import prisma from "@/libs/prisma"
import Link from "next/link"

const Furnitures = async () => {
    const furnitures = await prisma?.furnitures.findMany()
    const countFurniture = await prisma?.furnitures.count()
    const authUser = await authUserGithub()
    const email = authUser?.email
    return (
        <main className="pt-16 xl:px-16 sm:px-4 max-sm:px-4">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="font-bold text-4xl text-color-accent2">Furnitures ({countFurniture})</h3>
                    <p className="text-sm font-normal text-color-grey py-2">Get to know to our interior future furniture we offer</p>
                </div>
            </div>
            <FurnituresCard furnitures={furnitures} email={email}/>
        </main>
    )
}
export default Furnitures