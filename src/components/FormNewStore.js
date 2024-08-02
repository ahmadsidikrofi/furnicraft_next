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
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import toast, { Toaster } from 'react-hot-toast';
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios"
import slugify from "slugify"
import { useState } from "react"
import { ReloadIcon } from "@radix-ui/react-icons"

const FormNewStore = ({ email }) => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState()
    const schema = yup.object().shape({
        nama_toko: yup.string().required("Nama toko wajib diisi."),
        telp: yup
        .string()
        .matches(/^[1-9][0-9]*$/, "Nomor telepon tidak boleh diawali dengan 0.")
        .required("Nomor telepon wajib diisi."),
    })
    const form = useForm({
        resolver: yupResolver(schema),
    })
    const addNewStore = async (data) => {
        const slug = slugify(data.nama_toko, { lower: true, replacement: '-', strict: true })
        await axios.post('/api/v1/store', { ...data, slug, user_email: email })
        .then(() => {
            setIsLoading(true)
            toast.success("Tokomu berhasil masuk dibuat", { duration: 2000 })
            router.refresh()
            setTimeout(() => {
                router.push('/dashboard/stores')
            }, 3000)
        }).catch (() => {
            toast.error("Nama toko sudah pernah dibuat 😅")
            // console.error("Tokomu gagal dibuatkan", error);
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
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Store name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Input your store name here" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="telp"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Phone number</FormLabel>
                                    <div className="relative">
                                        <p className='absolute text-sm w-8 inset-y-0 grid place-items-center border-r'>
                                            +62
                                        </p>
                                        <FormControl>
                                            <Input placeholder="Input your number phone here" {...field} type='number' className='pl-10' />
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
                        render={({ field }) => (
                            <FormItem className="my-5">
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Describe your good Store" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button onClick={form.handleSubmit(addNewStore)} type="submit" disabled={isLoading ? true : false} className="rounded-full w-full p-3 text-color-primary bg-color-accent2">
                        {isLoading ? <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> : null} Add Store 
                    </Button>
                </Form>
            </div>
        </>
    )
}
export default FormNewStore