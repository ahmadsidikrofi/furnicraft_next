'use client'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/Card'
import { Skeleton } from '../ui/skeleton'
import { AspectRatio } from '../ui/aspect-ratio'

const JumbotronCategorySkeleton = () => {
    return (
        <div className="relative mt-5">
            <AspectRatio ratio={16 / 7} className='m-3'>
                <div className='absolute rounded-2xl inset-0 bg-gradient-to-t from-transparent to-zinc-950/50' />
                <Skeleton className='absolute w-full h-full rounded-2xl' />
                <div className='absolute inset-0 flex flex-col justify-center items-center'>
                    <Skeleton className='h-6 w-1/2 mb-4' />
                    <Skeleton className='h-4 w-1/4' />
                </div>
            </AspectRatio>
        </div>
    )
}
export default JumbotronCategorySkeleton