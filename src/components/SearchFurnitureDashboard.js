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

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import Link from "next/link";
import { Button } from "./ui/button";
import { DotsHorizontalIcon, EyeOpenIcon, PlusCircledIcon, ReloadIcon } from "@radix-ui/react-icons"
import {  PencilCircle, Trash } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import axios from "axios";

const SearchFurnitureDashboard = ({ initialFurnitures, detailData }) => {
    const [fetchFurnitures, setFetchFurnitures] = useState(initialFurnitures)
    const [searchTerm, setSearchTerm] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

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
    const handleDeleteFurniture = async (slug) => {
        setIsLoading(true)
        await axios.delete(`/api/v1/furnitures/${slug}`)
        .then(router.refresh())
        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }
 
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
                                                    <DropdownMenuItem className="flex gap-3 cursor-pointer">
                                                        <EyeOpenIcon className="h-5 w-5" />
                                                        <p>View</p>
                                                    </DropdownMenuItem>
                                                </Link>
                                                <Link href={`/dashboard/stores/${detailData.slug}/${furniture.slug}`}>
                                                    <DropdownMenuItem className="flex gap-3 cursor-pointer">
                                                        <PencilCircle className="h-5 w-5" />
                                                        <p>Update</p>
                                                    </DropdownMenuItem>
                                                </Link>
                                                <DropdownMenuItem className="cursor-pointer" asChild>
                                                    <AlertDialog>
                                                        <AlertDialogTrigger asChild>
                                                            <Button variant="none" className="p-2 flex gap-3 h-9">
                                                                {isLoading ? <ReloadIcon className="h-5 w-5 animate-spin" /> : <Trash className="h-5 w-5" />}
                                                                <p>Delete</p>
                                                            </Button>
                                                        </AlertDialogTrigger>
                                                        <AlertDialogContent>
                                                            <AlertDialogHeader>
                                                                <AlertDialogTitle>Yakin ingin dihapus?</AlertDialogTitle>
                                                                <AlertDialogDescription>Dengan begini 1 furniturmu akan dibuang</AlertDialogDescription>
                                                            </AlertDialogHeader>
                                                            <AlertDialogFooter>
                                                                <AlertDialogCancel className="rounded-full">Batalkan</AlertDialogCancel>
                                                                <AlertDialogAction className="bg-rose-500 rounded-full" onClick={() => handleDeleteFurniture(furniture.slug)}>Sudah mantap!</AlertDialogAction>
                                                            </AlertDialogFooter>
                                                        </AlertDialogContent>
                                                    </AlertDialog>
                                                </DropdownMenuItem>
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
