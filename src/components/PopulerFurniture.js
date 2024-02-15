import HeaderSection from "./HeaderSection";
import FurnituresCard from "./FurnituresCard";
import prisma from "../libs/prisma";

const PopulerFurniture = async () => {
    const furnitures = await prisma?.furnitures.findMany()
    return ( 
        <div className="mt-48">
            <HeaderSection titleHeader="Populer Furniture" descHeader="Explore all interior furniture we offer from" 
                linkContent="Shop the furniture" 
                linkHeader="/furnitures"
            />
            <FurnituresCard furnitures={furnitures}/>
        </div>
    );
}
 
export default PopulerFurniture;