'use client'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Skeleton from "react-loading-skeleton"

const Loading = ({setIsLoading}) => {
    useEffect(() => {
        setIsLoading(false)
    }, [])
    return ( 
        <div>
            <Skeleton className="h-72 rounded-[23px]" />
        </div>
    );
}
 
export default Loading;