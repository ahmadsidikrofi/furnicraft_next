'use client'
import { MagnifyingGlass, XCircle } from "@phosphor-icons/react"
import { useState } from "react"

const SearchFurnitems = ({ setIsSearchOpen }) => {
    const [closeSearchbar, setCloseSearchbar] = useState(false)
    const handleCloseSearchbar = () => {
        setCloseSearchbar(true)
        setIsSearchOpen(false)
        document.body.classList.remove('overflow-hidden')
    }
    return (
        <>
        <div className="fixed inset-0 bg-color-primary bg-opacity-50 backdrop-blur-sm"></div>
        <div className="sticky z-20">
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="p-3 w-[80vh] shadow-lg flex justify-between items-center bg-color-accent2 rounded-lg text-color-primary">
                    <div className="flex items-center gap-2">
                        <MagnifyingGlass size={23}  className="font-medium"/>
                        <input className="bg-color-accent2 placeholder-color-primary outline-none" type="text" placeholder="Cari / Search Furnitems..." />
                    </div>
                    <button onClick={handleCloseSearchbar}><XCircle size={28} /></button>
                </div>
            </div>
        </div>
        </>
    )
}
export default SearchFurnitems