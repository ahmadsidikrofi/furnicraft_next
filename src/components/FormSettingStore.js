'use client'

import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
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
  
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
import { useState } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'

const FormSettingStore = ({ email, detailData }) => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const schema = yup.object().shape({
        nama_toko: yup.string().required("Nama toko wajib diisi."),
        telp: yup
            .string()
            .matches(/^[1-9][0-9]*$/, "Nomor telepon tidak boleh diawali dengan 0.")
            .required("Nomor telepon wajib diisi."),
    })
    const form = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            nama_toko: detailData.nama_toko,
            telp: detailData.telp,
        },
    })
    const updateStore = async (data) => {
        setIsLoading(true)
        toast.success("Tokomu berhasil diedit", { duration: 1000 })
        await axios.put(`${`/api/v1/store/${detailData.slug}`}`, { ...data, user_email: email })
        .then(() => {
            setTimeout(() => {
                setIsLoading(false)
                router.push("/dashboard/stores")
            }, 3000)
        }).catch (() => {
            setIsLoading(false)
            toast.error("Yah, pengeditan gagal dilakukan 😅")
            console.error("Pengeditan gagal dilakukan", error);
        })
    }

    const deleteStore = (slug) => {
        axios.delete(`/api/v1/store/${slug}`)
        .then(() => {
            setIsLoading(true)
            toast.success("Tokomu berhasil dihapus", { duration: 2000 })
            setTimeout(() => {
                setIsLoading(false)
                router.push("/dashboard/stores")
                router.refresh()
            }, 2000)
        })
    }

    return (
        <>
            <div>
                <Toaster />
                <Form {...form}>
                    <div className="flex items-center gap-3">
                        <FormField
                            control={form.control}
                            name="nama_toko"
                            defaultValue={detailData.nama_toko}
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Store name</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="telp"
                            defaultValue={detailData.telp}
                            render={({ field }) => (
                                <FormItem className="my-5 w-full">
                                    <FormLabel>Phone number</FormLabel>
                                    <div className="relative">
                                        <p className='absolute text-sm w-8 inset-y-0 grid place-items-center border-r'>
                                            +62
                                        </p>
                                        <FormControl>
                                            <Input {...field} type='number' className='pl-10'/>
                                        </FormControl>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="deskripsi"
                        defaultValue={detailData.deskripsi}
                        render={({ field }) => (
                            <FormItem className="my-5">
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Textarea className="h-24" placeholder="Describe your good Store" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="flex items-center gap-8">
                        <Button onClick={form.handleSubmit(updateStore)} disabled={isLoading ? true : false} type="submit" className="rounded-full w-full p-3 text-color-primary bg-color-accent2"> 
                            {isLoading ? <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> : null} Update Store
                        </Button>
                        <AlertDialog>
                            <AlertDialogTrigger>
                                <Button disabled={isLoading ? true : false} className="rounded-full w-full p-3 text-color-primary bg-red-500">
                                    {isLoading ? <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> : null} Delete Store
                                </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Yakin tokomu mau ditutup?</AlertDialogTitle>
                                    <AlertDialogDescription>Seluruh barang yang ada ditokomu juga akan dihanguskan dan dibuang guna menjaga keamanan</AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Batalkan</AlertDialogCancel>
                                    <AlertDialogAction onClick={() => deleteStore(detailData.slug)} >Sudah mantap!</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                </Form>
            </div>
        </>
    )
}
export default FormSettingStore