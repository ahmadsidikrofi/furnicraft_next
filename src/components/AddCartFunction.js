'use client'

import { ShoppingCart } from "@phosphor-icons/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

const AddCartFunction = ( {nama_furniture, harga, categories, image, id_furniture, slug, email} ) => {
    const router = useRouter()
    const [cartItem, setCartItem] = useState([])
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cartItems")) || []
        setCartItem(storedCart)
    }, [])

    const handleAddCart = async () => {
        const isItemExist = cartItem.some((item) => item.slug === slug)
        if (isItemExist) {
            toast.success("Furniture sudah berada dalam keranjang")
        } else {
            const data = { nama_furniture, harga, categories, image, id_furniture, slug, user_email:email }
            const isCartItemStored = [...cartItem, data ]
            setCartItem(isCartItemStored)
            localStorage.setItem("cartItems", JSON.stringify(isCartItemStored))

            const pushItemToCart = await axios.post("/api/v1/cart", data)
            .then(() => {
                toast.loading("Tunggu...", { duration: 1000 })
                setTimeout(() => {
                    toast.success("Furniture berhasil masuk keranjang")
                    router.refresh()
                }, 1000)
            }).catch(() => {
                toast.error("Sepertinya jangan beli barang ini dulu ya🙏")
            })
        }
    }

    return (
        <main className="mt-5">
            <Toaster />
            <button onClick={handleAddCart} className="flex bg-color-accent2 rounded-full shadow py-1 px-2 items-center  hover:scale-[1.08] transition-all ease-linear hover:shadow-lg">
                <p className="font-medium text-color-primary text-md px-1">Add to Cart</p>
                <ShoppingCart size={36} className="text-color-primary px-1" />
            </button>
        </main>
    )
}
export default AddCartFunction