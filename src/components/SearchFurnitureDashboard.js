'use client';
import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
import { Button } from "./ui/button";
import { DotsHorizontalIcon, EyeOpenIcon, Pencil1Icon, PlusCircledIcon, TrashIcon } from "@radix-ui/react-icons"

const SearchFurnitureDashboard = ({ initialFurnitures, detailData }) => {
    const [fetchFurnitures, setFetchFurnitures] = useState(initialFurnitures);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        if (searchTerm.trim() === "") {
            setFetchFurnitures(initialFurnitures);
        } else {
            const filteredFurnitures = initialFurnitures.filter(furniture =>
                furniture.nama_furniture.toLowerCase().includes(searchTerm.toLowerCase()) ||
                furniture.categories.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFetchFurnitures(filteredFurnitures);
        }
    }, [searchTerm, initialFurnitures]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <>
            <div className="flex flex-row items-center justify-between">
                <Input
                    placeholder="Search your craft"
                    className="w-[40%] max-sm:w-[60%] md:w-[60%]"
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <Link href={`/dashboard/stores/${detailData.slug}/new-furniture`}>
                    <Button className="flex items-center gap-2 bg-color-accent2 rounded-full p-2 text-sm text-white cursor-pointer">
                        <PlusCircledIcon className="h-4 w-4" />
                        <p>New furniture</p>
                    </Button>
                </Link>
            </div>
            <div className="border my-6 rounded-lg">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="p-4 w-64">Nama furnitur</TableHead>
                            <TableHead>Kategori</TableHead>
                            <TableHead>Harga</TableHead>
                            <TableHead>Ditambahkan pada</TableHead>
                            <TableHead></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {fetchFurnitures.length < 1 ?     
                            <TableRow>
                                <TableCell colSpan={5} className="text-center p-10 font-medium">Tidak ada data</TableCell>
                            </TableRow>
                            :
                            fetchFurnitures.map((furniture, i) => (
                                <TableRow key={i} className="text-left">
                                    <TableCell className="p-5 w-64">{furniture.nama_furniture}</TableCell>
                                    <TableCell>{furniture.categories}</TableCell>
                                    <TableCell>Rp {furniture.harga.toLocaleString("id-ID", { minimumFractionDigits: 2 })}</TableCell>
                                    <TableCell>
                                        {new Date(furniture.created_at).toLocaleDateString("id-ID", {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric'
                                        })}
                                    </TableCell>
                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" className="h-8 w-8 p-0">
                                                    <DotsHorizontalIcon className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent className="mx-6 mt-1">
                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                <DropdownMenuSeparator />
                                                <Link href={`/furnitures/${furniture.slug}`}>
                                                    <DropdownMenuItem className="flex gap-3">
                                                        <EyeOpenIcon className="h-4 w-4" />
                                                        <p>View</p>
                                                    </DropdownMenuItem>
                                                </Link>
                                                <Link href={`/dashboard/stores/${detailData.slug}/${furniture.slug}`}>
                                                    <DropdownMenuItem className="flex gap-3">
                                                        <Pencil1Icon className="h-4 w-4" />
                                                        <p>Update</p>
                                                    </DropdownMenuItem>
                                                </Link>
                                                <Link href="/dashboard/stores">
                                                    <DropdownMenuItem className="flex gap-3">
                                                        <TrashIcon className="h-4 w-4" />
                                                        <p>Delete</p>
                                                    </DropdownMenuItem>
                                                </Link>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </div>
        </>
    );
};

export default SearchFurnitureDashboard;
