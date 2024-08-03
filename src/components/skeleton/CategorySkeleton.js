'use client'
import { useEffect, useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { AspectRatio } from "../ui/aspect-ratio"

const CategorySkeleton = () => {
    return ( 
        <div>
            <AspectRatio ratio={2 / 1}>
                <div className='absolute rounded-2xl inset-0 bg-gradient-to-t from-transparent to-zinc-950/50' />
                <Skeleton className='h-36 rounded-2xl' />
            </AspectRatio>
        </div>
    );
}
 
export default CategorySkeleton;