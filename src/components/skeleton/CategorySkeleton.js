'use client'
import { useEffect, useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"

const CategorySkeleton = ({setIsLoading}) => {
    useEffect(() => {
        setIsLoading(false)
    }, [setIsLoading])
    return ( 
        <div>
            <Skeleton className="h-36 rounded-1/2" />
        </div>
    );
}
 
export default CategorySkeleton;