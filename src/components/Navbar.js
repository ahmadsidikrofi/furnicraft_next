'use client'
import { List, MagnifyingGlass, ShoppingCartSimple, UserCircle } from "@phosphor-icons/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import SidebarMenu from "../components/Sidebar"
import SearchFurnitems from "./SearchFurnitems";


const Navbar = () => {
    const [cartCount, setCartCount] = useState(0)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [menuActive, setMenuActive] = useState(null)
    const router = useRouter()

    const handleMenuActive = (menu) => {
        if (menuActive === menu) {
            setMenuActive(null);
        } else {
            setMenuActive(menu);
        }
    }
    const isMenuActive = (menu) => menu === menuActive;

    const clickToCart = () => {
        router.push('/cart')
    }
    const handleCountCart = async () => {
        const res = await axios.get('/api/v1/cart')
        setCartCount(res.data.countCart)
    }
    const miniMenuNavbar = () => {
        // setIsSidebarOpen((prevState) => !prevState)
        setIsSidebarOpen(true)
        document.body.classList.add('overflow-hidden');
    }
    const handleOpenSearch = () => {
        setIsSearchOpen((prevState) => !prevState)
        document.body.classList.add('overflow-hidden');
    }

    handleCountCart()
    return ( 
        <>
            {isSidebarOpen ?
                <SidebarMenu setIsSidebarOpen={setIsSidebarOpen} />
                :
                null
            }
            {isSearchOpen ?
                <SearchFurnitems setIsSearchOpen={setIsSearchOpen}/> : null
            }
            <div className="sticky top-0 bg-color-primary z-10 flex items-center py-3 px-4 gap-10 shadow-md">
                <button onClick={miniMenuNavbar} className="p-[6px] visible lg:hidden xl:hidden hover:bg-color-accent hover:bg-opacity-10 hover:rounded-full transition-all ease-in-out">
                    <List size={24} />
                </button>
                <Link href={'/'} className="text-md font-bold hidden lg:block xl:block">FurniCraft</Link>
                <div className="hidden lg:flex lg:items-center xl:flex xl:items-center">
                    <button className="text-sm font-medium py-2 px-5 hover:bg-color-thin rounded-[10px] transition-all ease-linear">Lobby</button>
                    <button className="text-sm font-medium py-2 px-5 hover:bg-color-thin rounded-[10px] transition-all ease-linear">Categories</button>
                </div>

                <div className="flex gap-3 ml-auto">
                    <button onClick={handleOpenSearch} className="visible lg:hidden py-1 px-3 border-[1px] shadow border-color-accent border-opacity-15 rounded-full">
                        <MagnifyingGlass size={20}  className="font-medium"/>
                    </button>
                    <div onClick={handleOpenSearch} className={`cursor-pointer relative hidden xl:flex xl:items-center lg:flex lg:items-center py-2 px-4 border-[1px] shadow border-color-accent border-opacity-15 hover:bg-color-grey hover:bg-opacity-5 rounded-full transition-all ease-linear 2s`}>
                        <MagnifyingGlass size={17}  className="absolute left-2 font-medium"/>
                        <p className="font-medium pl-4 text-sm">Cari Furnitems... <span className="rounded-full bg-sky-100 text-[10px] py-1 px-2 font-bold">Ctrl K</span> </p>
                    </div>
                    <button onClick={clickToCart} className="relative flex gap-1 items-center py-2 px-3 border-[1px] shadow border-color-accent border-opacity-15 rounded-full hover:bg-color-grey hover:bg-opacity-5">
                        <ShoppingCartSimple size={17} />
                        <p className="font-medium text-sm">{cartCount}</p>
                    </button>

                    <div onClick={() => handleMenuActive('user')} className={`relative flex items-center py-2 px-3 shadow-md rounded-full ${isMenuActive('user') ? 'bg-color-accent' : null}`}>
                        <button>
                            <UserCircle size={24} />
                        </button>
                    </div>
                    <div onClick={() => handleMenuActive('user2')} className={`relative flex items-center py-2 px-3 shadow-md rounded-full ${isMenuActive('user2') ? 'bg-color-accent' : null}`}>
                        <button>
                            <UserCircle size={24} />
                        </button>
                    </div>
                    {/* <div className="relative flex items-center py-2 px-3 shadow-md rounded-full">
                        <button>
                            <UserCircle size={24} />
                        </button>
                    </div> */}
                </div>
            </div>
        </>
    );
}
 
export default Navbar;