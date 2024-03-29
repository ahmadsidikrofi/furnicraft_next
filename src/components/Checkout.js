'use client'
import axios from "axios"
import { useEffect, useState } from "react"
import prisma from "../libs/prisma"
import { useRouter } from "next/navigation"

const Checkout = ({ id, harga, cartUsers }) => {
    const [quantity, setQuantity] = useState(1)
    const router = useRouter()
    useEffect(() => {
        const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js"
        const snapClientKey = process.env.MIDTRANS_PUBLIC_CLIENT

        const scriptElement = document.createElement("script")
        scriptElement.src = snapScript
        scriptElement.setAttribute("data-client-key", snapClientKey)
        scriptElement.async = true
        document.body.appendChild(scriptElement)

        return () => {
            document.body.removeChild(scriptElement)
        }
    }, [])
    const handleCheckout = async () => {
        const data = {
            id: id,
            harga: harga,
            quantity: quantity
        }
        const res = await axios.post('/api/payment', data)
        if (res.data.status === 200) {
            console.log(res.data)
            window.snap.pay(res.data.createToken)

            const resDelCart = await axios.delete('/api/v1/cart')
            if (resDelCart.data.status === 200) {
                router.refresh()
                localStorage.removeItem('cartItems')
            }
        }

    }
    return ( 
        <>
            <button disabled={cartUsers.length == 0 ? true : false} onClick={handleCheckout} 
                className={`${cartUsers.length == 0 ? 'opacity-60' : null} w-full rounded-full bg-color-accent2 shadow-lg font-bold text-color-primary py-2 px-4 mt-4`}>Checkout
            </button>
        </>
    );
}
 
export default Checkout;