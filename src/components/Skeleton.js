'use client'
import { useEffect, useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"

const LoadingSkeleton = ({setIsLoading}) => {
    useEffect(() => {
        setIsLoading(false)
    }, [setIsLoading])
    return ( 
        <div>
            <Skeleton className="h-72 rounded-1/2" />
        </div>
    );
}
 
export default LoadingSkeleton;