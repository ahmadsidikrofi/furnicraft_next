'use client'
import { X } from "@phosphor-icons/react";
import axios from "axios";
import { useRouter } from "next/navigation";

const DeleteCartButton = ({ detailSlug }) => {
    const router = useRouter()
    const handleDeleteCart = async () => {
        const deleteCart = await axios.delete(`/api/v1/cart/${detailSlug}`)
        if (deleteCart.data.status === 200) {
            router.refresh()
            const getDataCartLocal = JSON.parse(localStorage.getItem('cartItems')) || [];
            const deleteCartLocal = getDataCartLocal.filter(item => item.slug !== detailSlug);
            localStorage.setItem('cartItems', JSON.stringify(deleteCartLocal));
        }
    }
    return ( 
        <>
            <button onClick={handleDeleteCart} className="shadow-lg py-1 w-8 rounded-full border-[1px] border-opacity-20 border-color-grey flex justify-center lg:ml-20 xl:ml-20 md:ml-auto sm:ml-auto max-sm:ml-auto">
                <X size={20} />
            </button>
        </>
     );
}
 
export default DeleteCartButton;