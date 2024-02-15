"use client"
import { TrashSimple } from "@phosphor-icons/react"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"

const UpdateCategoryButton = ({ getDetail }) => {
    const [ nama_kategori, setNama_kategori ] = useState(getDetail.nama_kategori)
    const router = useRouter()
    const deleteCategoriesButton = async (slug) => {
        // const res = await fetch(`/api/categories/${id}`, {method: "DELETE"})
        // const data = await res.json()
        await axios.delete(`/api/v1/categories/${slug}`)
        .then(() => {
            router.push('/categories')
        })
    }

    const handleUpdateCategory = async (slug) => {
        const dataCategory = { nama_kategori }
        const createCategory = await axios.put(`/api/v1/categories/${slug}`, dataCategory)
        if (createCategory.data.status === 200) {
            router.push('/categories')
            router.refresh()
        }
    }
    return ( 
        <div>
            <div className="flex gap-10 items-center mb-5">
                <h5 className=" text-color-grey text-2xl font-bold">Update kategori</h5>
                <button onClick={() => deleteCategoriesButton(getDetail.slug)} className="p-2 text-sm bg-color-accent text-color-primary rounded-xl">
                    <TrashSimple size={24} />
                </button>
            </div>
            <div className="flex flex-col">
                <label htmlFor="">Nama kategori</label>
                <input onChange={(e) => setNama_kategori(e.target.value)} value={nama_kategori} type="text" className="placeholder:text-color-secondary py-3 px-5 my-5 rounded-lg bg-color-thin focus:outline-color-accent w-[50%]" />
                <button onClick={() => handleUpdateCategory(getDetail.slug)} className="bg-color-accent text-color-primary font-bold text-sm p-3 rounded-full w-[50%]">Edit Category</button>
            </div>
        </div>
    );
}
 
export default UpdateCategoryButton;