'use client'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/Card"
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Skeleton } from "../ui/skeleton";
const StoreSkeleton = () => {
    return (
        <Card className="my-3">
            <AspectRatio ratio={21 / 9} className="rounded-lg">
                <div className='absolute rounded-md inset-0 bg-gradient-to-t from-transparent to-zinc-950/50' />
                <Skeleton className="h-full rounded-md border-b" />
            </AspectRatio>
            <CardHeader>
                <CardTitle>
                    <Skeleton className='h-4 w-1/2' />
                    <Skeleton className='h-4 w-1/2 my-5' />
                    <Skeleton className='h-8 w-full' />
                </CardTitle>
            </CardHeader>
        </Card>
    )
}

export default StoreSkeleton