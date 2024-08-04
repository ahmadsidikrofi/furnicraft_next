'use client'
import { MagnifyingGlass, XCircle } from "@phosphor-icons/react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import axios from "axios"

const SearchFurnitems = ({ setIsSearchOpen }) => {
    const [closeSearchbar, setCloseSearchbar] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    useEffect(() => {
        if (searchValue.trim()) {
            axios.get(`/api/v1/search?query=${searchValue}`)
            .then((res) => {
                setSearchResult(res.data.resultData)
            })
        }
    }, [searchValue])

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
                <motion.div className="p-3  max-sm:w-[100%] md:w-[80vh] shadow-lg flex justify-between items-center bg-color-accent2 rounded-lg text-color-primary"
                    initial={{ y: -500, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: 'spring', duration: 1 }}
                >
                    <div className="flex items-center gap-2">
                        <MagnifyingGlass size={23}  className="font-medium"/>
                        <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className="bg-color-accent2 placeholder-color-primary outline-none w-[60vh]" type="text" placeholder="Cari / Search Furnitems..." />
                    </div>
                    <button onClick={handleCloseSearchbar}><XCircle size={28} /></button>
                </motion.div>
                <div>
                    {searchResult?.map((result, i) => (
                        <div key={i}>
                            {result.nama_furniture}
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}
export default SearchFurnitems