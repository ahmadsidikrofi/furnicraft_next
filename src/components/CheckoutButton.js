'use client'

import axios from "axios"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { LoaderIcon } from "react-hot-toast"

const CheckoutButton = ({ id, harga, cartUsers }) => {
    const [quantity, setQuantity] = useState(1)
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
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
    const handleCheckout = async() => {
        const data = {
            id: id,
            harga: harga,
            quantity: quantity
        }
        await axios.post('/api/payment', data)
        .then((res) => {
            setIsLoading(true)
            setTimeout( async () => {
                setIsLoading(false)
                console.log(res.data)
                window.snap.pay(res.data.createToken)
                const resDelCart = await axios.delete('/api/v1/cart')
                if (resDelCart.data.status === 200) {
                    router.refresh()
                    localStorage.removeItem('cartItems')
                }
            }, 5000)
        })
    }
    return (
        <>
            <button disabled={cartUsers.length == 0 || isLoading ? true : false} onClick={handleCheckout}
                className={`${cartUsers.length == 0 || isLoading ? 'opacity-60' : null} w-full rounded-full bg-color-accent2 shadow-lg font-medium text-color-primary py-2 px-4 mt-4 flex gap-2 items-center justify-center`}>
                {isLoading ? <LoaderIcon className="w-4 h-4" /> : null} <p>Checkout</p>
            </button>
        </>
    )
}

export default CheckoutButton