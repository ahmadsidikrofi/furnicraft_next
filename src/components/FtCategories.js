import CategoriesCard from "./CategoriesCard"
import HeaderSection from "./HeaderSection"
import prisma from "@/libs/prisma"
import HomeTour from "./drivers/HomeTour"


const FtCategories = async() => {
    const categories = await prisma?.furnitures.groupBy({
        select: {
            categories: true,
        },
        by: ["categories"],
        _count: {
            _all: true
        }
    })
    return (
        <div className="ftCategories">
            <HomeTour />
            <HeaderSection 
                titleHeader="Featured Categories" 
                descHeader="Find the best Interiors gears from stores in" 
                linkContent="Explore the categories" 
                linkHeader="/categories"
            />
            <CategoriesCard categories={categories}/>            
        </div>
    )
}
export default FtCategories