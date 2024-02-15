"use client"
import { TrashSimple } from "@phosphor-icons/react"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Dropzone from "./Dropzone"
import Image from "next/image"

const UpdateFurnitureButton = ({ detailData }) => {
    const [nama_furniture, setNama_furniture] = useState(detailData.nama_furniture)
    const [deskripsi, setDeskripsi] = useState(detailData.deskripsi)
    const [harga, setHarga] = useState(parseInt(detailData.harga))
    const [categories, setCategories] = useState(detailData.categories)
    const [urlGambar, setUrlGambar] = useState('')
    const [image, setImage] = useState(detailData.image)
    const router = useRouter()
    const deleteFurnitureButton = (slug, e) => {
        e.preventDefault()
        // const res = await fetch(`/api/furnitures/${id}`, {method: "DELETE"})
        // const data = await res.json()
        axios.delete(`/api/v1/furnitures/${slug}`).then(router.push('/furnitures'))
    }

    const handleUpdateFurniture = async (slug) => {
        const dataFurniture = { nama_furniture, deskripsi, harga, categories, image }
        const updateCategory = await axios.put(`/api/v1/furnitures/${slug}`, dataFurniture)
        if (updateCategory.data.status === 200) router.push('/furnitures')
    }

    return ( 
        <div>
            <div className="flex gap-10 items-center mb-5">
                <h5 className=" text-color-grey text-2xl font-bold">Update furniture</h5>
                <button onClick={(e) => deleteFurnitureButton(detailData.slug, e)} className="p-2 text-sm bg-color-accent text-color-primary rounded-xl">
                    <TrashSimple size={24} />
                </button>
            </div>

            <div className="flex flex-col">
                <label htmlFor="">Nama kategori</label>
                <input onChange={(e) => setNama_furniture(e.target.value)} value={nama_furniture} type="text" className="placeholder:text-color-secondary py-3 px-5 my-5 rounded-lg bg-color-thin focus:outline-color-accent w-[50%]" />

                <label htmlFor="">Deskripsi furniture</label>
                <input onChange={(e) => setDeskripsi(e.target.value)} value={deskripsi} type="text" className="placeholder:text-color-secondary py-3 px-5 my-5 rounded-lg bg-color-thin focus:outline-color-accent w-[50%]" />

                <label htmlFor="">Harga furniture</label>
                <input onChange={(e) => setHarga(e.target.value)} value={harga} type="number" className="placeholder:text-color-secondary py-3 px-5 my-5 rounded-lg bg-color-thin focus:outline-color-accent w-[50%]" />

                <div className="flex flex-col mb-7">
                    <label className="px-2 font-medium text-color-secondary text-sm">Pilih kategori</label>
                    <select onChange={(e) => setCategories(e.target.value)} value={categories} name="categories" className="rounded-full shadow-lg p-3 md:w-[50%] lg:w-[50%] w-full">
                        <option className="" value="">Pilih kategori</option>
                        <option className="" value="Kitchen Set">Kitchen Set</option>
                        <option className="" value="Living Room">Living Room</option>
                        <option className="" value="Kamar tidur">Kamar tidur</option>
                        <option className="" value="Ruang kerja">Ruang kerja</option>
                        <option className="" value="Kamar mandi">Kamar mandi</option>
                    </select>
                </div>
                <input type="hidden" value={image} />
                <Dropzone urlGambar={image} setUrlGambar={setImage}/>
                <button onClick={() => handleUpdateFurniture(detailData.slug)} className="bg-color-accent text-color-primary font-bold text-sm p-3 rounded-full w-[50%]">Edit Category</button>
            </div>
        </div>
    );
}
 
export default UpdateFurnitureButton;