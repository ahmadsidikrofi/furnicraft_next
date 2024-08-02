'use client'
import { ShoppingCart } from "@phosphor-icons/react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"
import toast, { Toaster } from 'react-hot-toast';
import FurnitureSkeleton from "./skeleton/FurnitureSkeleton"
const FurnituresCard = ({ furnitures, authUser, cartData }) => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(true)
    const [cartItems, setCartItems] = useState([])
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
        const storedCart = JSON.parse(localStorage.getItem('cartItems')) || []
        setCartItems(storedCart)
    }, [])

    const addToCart = async (furniture, e) => {
        e.preventDefault()
        const isFurnitureExists = cartItems.some((item) => item.slug === furniture.slug)
        if (isFurnitureExists) {
            toast.success("Furniture sudah tersedia dalam keranjang")
            return
        }
        const data = {
            furniture_id: furniture.id,
            nama_furniture: furniture.nama_furniture,
            harga: furniture.harga,
            categories: furniture.categories,
            image: furniture.image,
            id_furniture: furniture.id,
            slug: furniture.slug,
            user_email: authUser?.email,
        }
        const updatedCartItems = [...cartItems, data]
        setCartItems(updatedCartItems)
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
        
        if (authUser) {
            try {
                // Jika user login, tambahkan ke database
                const res = await axios.post('/api/v1/cart', data)
                if (res.data.status === 200) {
                    toast.loading("Tunggu...", { duration: 1000 })
                    setTimeout(() => {
                        toast.success("Furniture berhasil masuk keranjang")
                        router.refresh()
                    }, 1000)
                } else {
                    toast.error("Gagal masuk ke keranjang 😅")
                    console.error("Gagal menambahkan furniture ke keranjang");
                }
            } catch (error) {
                console.error("Gagal menambahkan furnitur ke keranjang", error);
                toast.success("Furniture sudah tersedia dalam keranjang");
            }
        } else {
            // Jika user tidak login, hanya tampilkan pesan sukses
            toast.success("Furniture berhasil masuk keranjang")
        }
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 my-12">
            <Toaster />
            {furnitures?.map((furniture) => (
                <div key={furniture.id}>
                {isLoading ? <FurnitureSkeleton setIsLoading={setIsLoading}/> :
                    // /furnitures/edit/${furniture.slug}
                    <div>
                        <Link href={`/furnitures/${furniture.slug}`}>
                            <div className="p-2 border-color-accent border-[1px] text-color-secondary rounded-[23px] shadow-xl hover:shadow-2xl transition-all ease-linear">
                                <Image src={furniture.image || ''} width={700} height={700} alt="..." className="w-full object-cover xl:h-64 lg:h-64 h-96 rounded-[20px] hover:transition-all hover:scale-[1.08]" />
                                <div className="p-2">
                                    <p className="font-normal text-sm py-2">{furniture.categories}</p>
                                    <p className="font-semibold text-xl mb-5">
                                        {furniture.nama_furniture.length > 19 ? 
                                            furniture.nama_furniture.substring(0, 19) + "..." 
                                            : furniture.nama_furniture
                                        }
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <p className="font-semibold text-lg text-color-accent2">Rp {furniture.harga.toLocaleString("id-ID", {minimumFractionDigits: 2})}</p>
                                        <button onClick={(e) => addToCart(furniture, e)} >
                                            <ShoppingCart size={36} className="p-2 border-[1px] bg-color-thin border-color-accent text-color-accent2 rounded-full hover:scale-[1.15] transition-all ease-linear hover:shadow-lg hover:bg-color-accent2 hover:text-color-primary" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                }
                </div>
            ))}
        </div>
    )
}
export default FurnituresCard