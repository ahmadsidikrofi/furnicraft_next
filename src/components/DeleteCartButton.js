'use client'
import { X, XCircle, XLogo } from "@phosphor-icons/react"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const DeleteCartButton = ({ detailSlug, toast, detailLocalSlug, updateLocalCart }) => {
    const [authUser, setAuthUser] = useState(null)
    const router = useRouter()
    useEffect(() => {
        const fetchUser = async () => {
            const { data } = await axios.get('/api/v1/cart/check');
            setAuthUser(data.user)
        }
        fetchUser()
    }, [])
    const handleDeleteCart = async () => {
        if (!authUser) {
            const getCartItem = JSON.parse(localStorage.getItem("local-cart")) || []
            const deleteCartItem = getCartItem.filter((item) => item.slug !== detailLocalSlug)
            localStorage.setItem('local-cart', JSON.stringify(deleteCartItem))
            toast.loading("Tunggu...", { duration: 1000 })
            setTimeout(() => {
                toast.success("Furniture terhapus dari keranjang", { icon: '🗑️' })
                updateLocalCart(deleteCartItem)
                window.dispatchEvent(new Event('local-cart-updated'))
            }, 1000)
        } else {
            const deleteCart = await axios.delete(`/api/v1/cart/${detailSlug}`)
            if (deleteCart.data.status === 200) {
                toast.loading("Tunggu...", { duration: 1000 })
                setTimeout(() => {
                    toast.success("Furniture terhapus dari keranjang", { icon: '🗑️' })
                    router.refresh()
                }, 1000)
                const getCartItem = JSON.parse(localStorage.getItem("local-cart")) || []
                const deleteCartItem = getCartItem.filter((item) => item.slug !== detailSlug)
                localStorage.setItem('local-cart', JSON.stringify(deleteCartItem))
            }
        }
    }
    return (
        <div>
            <button onClick={handleDeleteCart} className="shadow-lg py-1 w-8 rounded-full border-[1px] border-opacity-20 border-color-grey flex justify-center lg:ml-20 md:ml-48 sm:ml-auto max-sm:ml-32">
                <XLogo  className="w-5 h-5"/>
            </button>
        </div>
    )
}
export default DeleteCartButton