import prisma from "@/libs/prisma";
import FurnituresCard from "./FurnituresCard";
import HeaderSection from "./HeaderSection";
import { authUserGithub } from "@/libs/auth";

const PopulerFurniture = async () => {
    const furnitures = await prisma?.furnitures.findMany()
    const authUser = await authUserGithub()
    // const email = authUser?.email
    const cartData = await prisma?.cart.findMany({
        where: { user_email: authUser?.email }
    })
    return (
        <main className="mt-24">
            <HeaderSection 
                titleHeader="Populer Furniture"
                descHeader="Explore all interior furniture we offer from"
                linkContent="Shop the furnitures"
                linkHeader="/furnitures"
            />
            <FurnituresCard furnitures={furnitures} authUser={authUser} cartData={cartData}/>
        </main> 
    );
}
 
export default PopulerFurniture;