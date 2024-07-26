import prisma from "@/libs/prisma";
import FurnituresCard from "./FurnituresCard";
import HeaderSection from "./HeaderSection";
import { authUserGithub } from "@/libs/auth";

const PopulerFurniture = async () => {
    const furnitures = await prisma?.furnitures.findMany()
    const authUser = await authUserGithub()
    const email = authUser?.email
    return (
        <main className="mt-48">
            <HeaderSection 
                titleHeader="Populer Furniture"
                descHeader="Explore all interior furniture we offer from"
                linkContent="Shop the furnitures"
                linkHeader="/furnitures"
            />
            <FurnituresCard furnitures={furnitures} email={email}/>
        </main> 
    );
}
 
export default PopulerFurniture;