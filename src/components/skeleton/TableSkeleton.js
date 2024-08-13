'use client'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Skeleton } from "../ui/skeleton"

const TableSkeleton = () => {
    return (
        <Table>
            <TableHeader>
                <TableRow className="max-sm:text-[12px]">
                    <TableHead className="p-4 w-72 max-sm:text-nowrap">
                        <Skeleton className="h-4 w-1/2" />
                    </TableHead>
                    <TableHead>
                        <Skeleton className="h-4 w-1/2" />
                    </TableHead>
                    <TableHead>
                        <Skeleton className="h-4 w-1/2" />
                    </TableHead>
                    <TableHead>
                        <Skeleton className="h-4 w-1/2" />
                    </TableHead>
                    <TableHead>
                        <Skeleton className="h-4 w-1/2" />
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow className="text-left max-sm:text-[12px]">
                    <TableCell className="p-5 w-64">
                        <Skeleton className="h-4 w-3/4" />
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-4 w-1/2" />
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-4 w-1/2" />
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-4 w-1/2" />
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-4 w-1/2" />
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}
export default TableSkeleton