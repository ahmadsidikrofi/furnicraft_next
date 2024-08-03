'use client'
import Link from "next/link";
// import CategoriesIcon from "./CategoriesIcon";
import { useEffect, useState } from "react";
import LoadingSkeleton from "./skeleton/CategorySkeleton";
import { Armchair } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import HomeTour from "./drivers/HomeTour";

const CategoriesCard = ({ categories, authUser }) => {
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()
    const handleKeywordCategories = (key) => {
        router.push(`/categories/${key}`)
    }
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }, [isLoading])
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 w-full my-12 product-categories">
            {/* {authUser === false && <HomeTour />} */}
            {categories?.map((category, index) => (
                <div  key={index}>
                    {isLoading ? <LoadingSkeleton/> :     
                        <div onClick={() => handleKeywordCategories(category.categories)} className="cursor-pointer">
                            <div className="p-6 border-[1px] border-opacity-25 border-color-grey shadow-lg text-color-accent2 rounded-lg hover:bg-color-accent2 hover:text-color-primary transition-all ease-linear">
                                <div className="mb-5">
                                    <Armchair size={34} />
                                </div>
                                <h5 className="font-semibold">{category.categories}</h5>
                                <p className="font-normal text-sm">{category._count._all} produk</p>
                            </div>
                        </div>
                    }
                </div>
            ))}
        </div>
    );
}
export default CategoriesCard;