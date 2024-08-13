'use client'

import { useEffect, useState } from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/Card"
import { AspectRatio } from "./ui/aspect-ratio"
import Link from "next/link"
import StoreSkeleton from "./skeleton/StoreSkeleton"
import { getRandomPatternStyle } from "@/libs/generate-pattern"
import { Button } from "./ui/Button"

const StoreCard = ({ userStores }) => {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000)
        return () => clearTimeout(timer)
    }, [])
    return (
        <>
            {isLoading ? (
                userStores.map((userStore, i) => (
                    <StoreSkeleton key={i} />
                ))
            ) : (
                userStores.map((userStore, i) => (
                    <div key={i}>
                        <Card className="my-3 h-[90%]">
                            <Link href={`/dashboard/stores/${userStore.slug}`}>
                                <AspectRatio ratio={21 / 9} className="rounded-lg">
                                    <div className='absolute rounded-md inset-0 bg-gradient-to-t from-transparent to-zinc-950/50' />
                                    <div
                                        className='h-full rounded-md border-b'
                                        style={getRandomPatternStyle(String(userStore.id))}
                                    />
                                </AspectRatio>
                                <CardHeader>
                                    <CardTitle>{userStore.nama_toko}</CardTitle>
                                    <CardDescription>
                                        {userStore.deskripsi.length > 60 ? 
                                        userStore.deskripsi.substring(0, 67) + '...' : userStore.deskripsi}
                                    </CardDescription>
                                </CardHeader>
                                <CardFooter>
                                    <Button className='w-full bg-color-accent2 rounded-2xl p-3'>Add Product</Button>
                                </CardFooter>
                            </Link>
                        </Card>
                    </div>
                ))
            )}
        </>
    )
}
export default StoreCard