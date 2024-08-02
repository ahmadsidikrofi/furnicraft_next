'use client'
import { MagnifyingGlass, XCircle } from "@phosphor-icons/react"
import { useState } from "react"
import { motion } from "framer-motion"

const SearchFurnitems = ({ setIsSearchOpen }) => {
    const [closeSearchbar, setCloseSearchbar] = useState(false)
    const handleCloseSearchbar = () => {
        setCloseSearchbar(true)
        setIsSearchOpen(false)
        document.body.classList.remove('overflow-hidden')
    }
    return (
        <>
        <div className="fixed inset-0 z-20 bg-color-primary bg-opacity-50 backdrop-blur-sm" onClick={handleCloseSearchbar}></div>
        <div className="sticky z-20">
            <div className="fixed top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <motion.div className="p-3  max-sm:w-[120%] md:w-[80vh] shadow-lg flex justify-between items-center bg-color-accent2 rounded-lg text-color-primary"
                    initial={{ y: -500, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: 'spring', duration: 1 }}
                >
                    <div className="flex items-center gap-2">
                        <MagnifyingGlass size={23}  className="font-medium"/>
                        <input className="bg-color-accent2 placeholder-color-primary outline-none" type="text" placeholder="Cari / Search Furnitems..." />
                    </div>
                    <button onClick={handleCloseSearchbar}><XCircle size={28} /></button>
                </motion.div>
            </div>
        </div>
        </>
    )
}
export default SearchFurnitems