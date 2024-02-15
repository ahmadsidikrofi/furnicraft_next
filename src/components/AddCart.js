'use client'
import { ShoppingCart } from "@phosphor-icons/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AddCart = ({ nama_furniture, harga, image, categories, id_furniture, slug }) => {
    const router = useRouter()
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cartItems')) || []
        setCartItems(storedCart)
    }, [])
    const handleAddCart = async (e) => {
        e.preventDefault()
        const isItemExists = cartItems.some((item) => item.slug === slug);
            
        if (isItemExists) {
            alert("Item sudah ada di keranjang!");
        } else {
            const data = { nama_furniture, harga, image, categories, id_furniture, slug }
            const isCartItemStored = [...cartItems, data]
            setCartItems(isCartItemStored)
            localStorage.setItem('cartItems', JSON.stringify(isCartItemStored))

            const addToCart = await axios.post("/api/v1/cart", data);
            if (addToCart.data.status === 200) {
                alert("Furniture berhasil masuk keranjang")
                router.refresh();
            } 
        }
    }
    return (
        <div className="mt-5"> 
            <button onClick={handleAddCart} className="flex bg-color-accent2 rounded-full shadow py-1 px-2 items-center  hover:scale-[1.08] transition-all ease-linear hover:shadow-lg">
                <p className="font-medium text-color-primary text-md px-1">Add to Cart</p>
                <ShoppingCart size={36} className="text-color-primary px-1" />
            </button>
        </div>
    );
}

export default AddCart;