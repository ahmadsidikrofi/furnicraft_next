'use client'

const CheckoutButton = ({ productId, harga, cartUsers }) => {
    const handleCheckout = () => {
        
    }
    return (
        <>
            <button disabled={cartUsers.length == 0 ? true : false} onClick={handleCheckout}
                className={`${cartUsers.length == 0 ? 'opacity-60' : null} w-full rounded-full bg-color-accent2 shadow-lg font-bold text-color-primary py-2 px-4 mt-4`}>Checkout
            </button>
        </>
    )
}

export default CheckoutButton