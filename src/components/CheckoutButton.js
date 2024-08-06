'use client'
import axios from "axios"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import toast, { LoaderIcon } from "react-hot-toast"

const CheckoutButton = ({ ids, harga, cartUsers, nama_furniture }) => {
    const [quantity, setQuantity] = useState(1)
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [token, setToken] = useState('')
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
            ids: ids,
            name: nama_furniture,
            harga: harga,
            quantity: quantity,
        }
        await axios.post('/api/payment', data)
        .then((res) => {
            const token = res.data.createToken
            setToken(token)
            setIsLoading(true)
            setTimeout( async () => {
                setIsLoading(false)
                if (token) {
                    window.snap.pay(token, {
                        onSuccess: () => {
                            toast.success('Pembayaran berhasil!!', { duration: 1000 })
                            setTimeout(() => {
                                router.push('/dashboard/orders')
                            }, 2000)
                        },
                        onClose: () => {
                            toast.error('Kamu belum menyelesaikan pembayaran', { duration: 1000 })
                            setTimeout(() => {
                                router.push('/dashboard/orders')
                            }, 2000)
                        }
                    });
                }
                const resDelCart = await axios.delete('/api/v1/cart')
                if (resDelCart.data.status === 200) {
                    localStorage.removeItem('cartItems')
                }
            }, 5000)
        }).catch (err => {
            console.error('user not signed')
            router.push('/sign-in')
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