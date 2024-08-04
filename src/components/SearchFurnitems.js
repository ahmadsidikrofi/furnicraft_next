'use client'
import { MagnifyingGlass, XCircle } from "@phosphor-icons/react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import axios from "axios"
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
import { Button } from "./ui/Button"
import Link from "next/link"
import { useRouter } from "next/navigation"
  
const SearchFurnitems = ({ setIsSearchOpen }) => {
    const router = useRouter()
    const [closeSearchbar, setCloseSearchbar] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    useEffect(() => {
        if (searchValue.trim()) {
            axios.get(`/api/v1/search?query=${searchValue}`)
            .then((res) => {
                setSearchResult(res.data.resultData || [])
            })
        }
    }, [searchValue])

    const handleCloseSearchbar = () => {
        setCloseSearchbar(true)
        setIsSearchOpen(false)
        document.body.classList.remove('overflow-hidden')
    }
    const groupedResults = searchResult.reduce((acc, item) => {
        if (!acc[item.categories]) {
            acc[item.categories] = [];
        }
        acc[item.categories].push(item);
        return acc;
    }, {})
    const handleDetailFurniture = (slug) => {
        router.push(`/furnitures/${slug}`)
    }
    return (
        <>
        <div className="fixed inset-0 z-20 bg-color-primary bg-opacity-50 backdrop-blur-sm" onClick={handleCloseSearchbar}></div>
        <div className="sticky z-20">
            <div className="fixed top-48 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Command className="rounded-lg border shadow-md w-[85vh] max-sm:w-full">
                    <CommandInput onValueChange={(value) => setSearchValue(value)} placeholder="Cari furniturmu" />
                    <CommandList>
                        {Object.keys(groupedResults).length > 0 ? (
                            Object.keys(groupedResults).map((category, index) => (
                                <div key={index}>
                                    <CommandGroup heading={category}>
                                        {groupedResults[category].map((result, i) => (
                                            <div className="hover:bg-accent hover:text-accent-foreground"  onClick={() => handleDetailFurniture(result.slug)} key={i}>
                                                <CommandItem>{result.nama_furniture}</CommandItem>
                                            </div>
                                        ))}
                                    </CommandGroup>
                                </div>
                            )) 
                        ) : (
                            <CommandEmpty>Tidak membuahkan hasil.</CommandEmpty>
                        )}
                    </CommandList>
                </Command>
                {/* <motion.div className="p-3  max-sm:w-[100%] md:w-[80vh] shadow-lg flex justify-between items-center rounded-lg text-color-primary"
                    initial={{ y: -500, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: 'spring', duration: 1 }}
                >
                    <div className="flex items-center gap-2 w-[60vh]">

                        <MagnifyingGlass size={23}  className="font-medium"/>
                        <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className="bg-color-accent2 placeholder-color-primary outline-none" type="text" placeholder="Cari / Search Furnitems..." />
                    </div>
                    <button onClick={handleCloseSearchbar}><XCircle size={28} /></button>
                </motion.div> */}
            </div>
        </div>
        </>
    )
}
export default SearchFurnitems