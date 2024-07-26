'use client'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import toast, { Toaster } from 'react-hot-toast'
import axios from "axios"
import { ReloadIcon } from "@radix-ui/react-icons"
import Dropzone from "./Dropzone"
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
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import slugify from "slugify"
import Image from "next/image"

const FormUpdateFurniture = ({ storeId, slugStore, dataFurniture }) => {
    const form = useForm()
    const router = useRouter()
    const [isLoading, setIsLoading] = useState()
    const [urlGambar, setUrlGambar] = useState(dataFurniture.image)

    useEffect(() => {
        form.setValue('image', urlGambar)
    },[form, urlGambar])

    const updateFurniture = async (data) => {
        const slug = slugify(data.nama_furniture, { lower: true, replacement: '-', strict: true })
        await axios.put(`/api/v1/furnitures/${dataFurniture.slug}`, { ...data, slug, store_id: storeId })
        .then(() => {
            setIsLoading(true)
            toast.success("Furniture successfully updated", { duration: 2000 })
            router.refresh()
            setTimeout(() => {
                setIsLoading(false)
                router.push(`/dashboard/stores/${slugStore}`)
            }, 3000)
        }).catch (() => {
            toast.error("Furniture fail on update 😅")
        })
    }
    
    return (
        <>
        <div>
            <Toaster />
            <Form {...form}>
                <FormField
                    control={form.control}
                    name="nama_furniture"
                    defaultValue={dataFurniture.nama_furniture}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nama furniture</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="deskripsi"
                    defaultValue={dataFurniture.deskripsi}
                    render={({ field }) => (
                        <FormItem className="my-5">
                            <FormLabel>Deskripsi</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Describe your good stuff" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex flex-col sm:flex-row items-center sm:gap-5">
                <FormField
                    control={form.control}
                    name="categories"
                    defaultValue={dataFurniture.categories}
                    render={({ field }) => (
                        <FormItem className="mb-5 w-full">
                            <FormLabel>Kategori</FormLabel>
                            <FormControl>
                                <Select onValueChange={field.onChange} value={field.value} className="w-full">
                                    <SelectTrigger className="text-left">
                                        <SelectValue placeholder="Pilih kategori" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Ruang tamu">Ruang tamu</SelectItem>
                                        <SelectItem value="Kamar tidur">Kamar tidur</SelectItem>
                                        <SelectItem value="Kamar mandi">Kamar mandi</SelectItem>
                                        <SelectItem value="Ruang dapur">Ruang dapur</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                    <FormField
                        control={form.control}
                        name="harga"
                        defaultValue={dataFurniture.harga}
                        render={({ field }) => (
                            <FormItem className="mb-5 w-full">
                                <FormLabel>Harga</FormLabel>
                                <FormControl>
                                    <div className='relative'>
                                        <p className='absolute text-sm left-0 w-8 inset-y-0 grid place-items-center'>
                                            Rp
                                        </p>
                                        <Input
                                            type='number' className='pl-8' placeholder='0' disabled={isLoading}
                                            {...field}
                                        />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div>
                    <FormField
                        control={form.control}
                        name="image"
                        defaultValue={urlGambar}
                        render={({ field }) => (
                            <FormItem className="mb-5">
                                <FormLabel>Foto furniture</FormLabel>
                                <FormControl>
                                    <>
                                        <Input type='hidden' className='pl-8' {...field} />
                                        <Dropzone urlGambar={urlGambar} setUrlGambar={setUrlGambar}/>
                                    </>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <Button onClick={form.handleSubmit(updateFurniture)} type="submit" disabled={isLoading ? true : false} className="rounded-full w-full p-3 text-color-primary bg-color-accent2">
                    {isLoading ? <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> : null} Update Furniture 
                </Button>
            </Form>
        </div>
    </>
    )
}
export default FormUpdateFurniture