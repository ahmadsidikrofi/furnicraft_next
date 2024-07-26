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
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios"
import slugify from "slugify"
import { useState } from "react"
import { ReloadIcon } from "@radix-ui/react-icons"

const FormNewStore = ({ email }) => {
    const form = useForm()
    const router = useRouter()
    const [isLoading, setIsLoading] = useState()

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
                    <FormField
                        control={form.control}
                        name="nama_toko"
                        render={({ field }) => (
                            <FormItem>
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