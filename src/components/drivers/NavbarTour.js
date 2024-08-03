'use client'
import { driver } from "driver.js"
import { useEffect } from "react"
import "driver.js/dist/driver.css"
const NavbarTour = () => {
    useEffect(() => {
        const driverObj = driver({
            showProgress: true,
            showButtons: ['next', 'previous'],
            steps: [
                { element: '.search-furniture', popover: { title: 'Mulai mencari', description: 'Ketik furnitur apapun yang kamu suka dan mudahnya hasil akan secara elastis memberi rekomendasi.', side: "left", align: 'start' } },
                { element: '.cart-driver', popover: { title: 'Penuhkan keranjang', description: 'Barang yang kamu pilih akan masuk ke keranjang. Jangan sungkan ya untuk cek keranjangmu dan checkout selagi bisa😂', side: "bottom", align: 'start' } },
                { element: '.signin', popover: { title: 'More Exploration', description: 'Mulai penjelajahan lebih dalam dengan satu kali ketuk.', side: "bottom", align: 'start' } },
            ]
        })
        driverObj.drive()
    }, [])
    return (
        <>
        </>
    )
}
export default NavbarTour