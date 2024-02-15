'use client'
import HeaderSection from "../../../components/HeaderSection";
import Dropzone from "../../../components/Dropzone"
import { useState } from "react";
import slugify from "slugify";
import { useRouter } from "next/navigation";
import axios from "axios";
    const NewCategory = () => {
        const [nama_furniture, setNamaFurniture] = useState('')
        const slug = slugify(nama_furniture, { lower: true, strict: true, replacement: '-' })
        const [deskripsi, setDeskripsi] = useState('')
        const [harga, setHarga] = useState(0)
        const [categories, setCategories] = useState(null)
        const [isLoading, setIsLoading]  = useState(false)
        const [urlGambar, setUrlGambar] = useState('')
        const [alertWajib, setAlertWajib] = useState('')
        const router = useRouter()

        const handleInputNama = (e) => {
            setNamaFurniture(e.target.value)
        }
        const handleInputDesc = (e) => {
            setDeskripsi(e.target.value)
        }
        const handleInputHarga = (e) => {
            setHarga(e.target.value)
        }
        const handleSelectCategories = (e) => {
            setCategories(e.target.value)
        }

        const handleNewFurniture = async (e) => {
            if (urlGambar !== '') {
                e.preventDefault()
                const dataFurniture = { nama_furniture, deskripsi, harga, slug, categories, image: urlGambar }
                await axios.post('/api/v1/furnitures', dataFurniture, {
                    headers: { "Content-Type" : "application/json" }
                })
                .then(() => {
                    router.refresh()
                    router.push('/furnitures')
                }) 
            } else {
                setAlertWajib("Harus diberi gambar/foto")
            }
        }

        return ( 
            <div className="p-16">
                <HeaderSection titleHeader="Furniture Baru" descHeader="Buat furniture baru" />
                <hr className="pt-16 opacity-10"/>
                <div className="border-[1px] border-opacity-30 border-color-accent rounded-lg text-color-secondary">
                    <div className="p-5">
                        <h5 className="mb-10 text-color-grey text-2xl font-bold">Tambah furniture</h5>
                            <div className="flex flex-col">
                                <div className="flex flex-col mb-4">
                                    <label className="px-2 font-medium text-color-secondary text-sm">Nama furniture</label>
                                    <input onChange={handleInputNama} type="text" className="placeholder:text-color-secondary py-3 px-5 my-3 rounded-lg border-color-secondary border-opacity-10 border-[1px] bg-color-primary focus:outline-color-accent md:w-[50%] lg:w-[50%] w-full " placeholder="Tulis nama furniture..."/>
                                </div>
                                <div className="flex flex-col mb-4">
                                    <label className="px-2 font-medium text-color-secondary text-sm">Deskripsi furniture</label>
                                    <input onChange={handleInputDesc} type="text" className="placeholder:text-color-secondary py-3 px-5 my-3 rounded-lg border-color-secondary border-opacity-10 border-[1px] bg-color-primary focus:outline-color-accent md:w-[50%] lg:w-[50%] w-full " placeholder="Tulis deskripsi furniture..."/>
                                </div>
                                <div className="flex flex-col mb-4">
                                    <label className="px-2 font-medium text-color-secondary text-sm">Harga furniture</label>
                                    <input onChange={handleInputHarga} type="number" className="placeholder:text-color-secondary py-3 px-5 my-3 rounded-lg border-color-secondary border-opacity-10 border-[1px] bg-color-primary focus:outline-color-accent md:w-[50%] lg:w-[50%] w-full " placeholder="berapa harga furniture..."/>
                                </div>
                                <div className="flex flex-col mb-7">
                                    <label className="px-2 font-medium text-color-secondary text-sm">Pilih kategori</label>
                                    <select onChange={handleSelectCategories} name="categories" className="rounded-full shadow-lg p-3 md:w-[50%] lg:w-[50%] w-full">
                                        <option className="" value="">Pilih kategori</option>
                                        <option className="" value="Kitchen Set">Kitchen Set</option>
                                        <option className="" value="Living Room">Living Room</option>
                                        <option className="" value="Kamar tidur">Kamar tidur</option>
                                        <option className="" value="Kamar mandi">Kamar mandi</option>
                                    </select>
                                </div>
                                <input type="hidden" value={urlGambar} />
                                {urlGambar === "" ? <p className="text-color-accent2 font-bold text-lg py-2 px-1">{alertWajib}</p> : null}
                                <Dropzone urlGambar={urlGambar} setUrlGambar={setUrlGambar}/>
                                {isLoading ? 
                                    <button disabled className="bg-color-accent2 text-color-primary font-bold text-sm p-3 rounded-full w-[50%]">Loading...</button>
                                    :
                                    <button onClick={(e) => handleNewFurniture(e)} className="bg-color-accent2 text-color-primary font-bold text-sm p-3 rounded-full w-[50%]">Add Furniture</button>
                                }
                            </div>
                    </div>
                </div>
            </div>
        );
    }
    
    export default NewCategory;