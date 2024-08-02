    'use client'
import { List, MagnifyingGlass, ShoppingCartSimple, UserCircle } from "@phosphor-icons/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import SidebarMenu from "../components/Sidebar"
import SearchFurnitems from "./SearchFurnitems";
import { ListItem } from "@/components/ui/ListItem"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import AuthButton from "./AuthButton";

const Navbar = ({authUser}) => {
    const [cartCount, setCartCount] = useState(0)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const keywordCategoriesRef = useRef()
    const router = useRouter()

    const clickToCart = () => {
        authUser ? router.push('/cart') : router.push('/sign-in')
    }

    // const handleCountCart = async () => {
    //     const res = await axios.get('/api/v1/cart')
    //     setCartCount(res.data.countCart)
    // }
    // handleCountCart()

    const miniMenuNavbar = () => {
        setIsSidebarOpen(true)
        document.body.classList.add('overflow-hidden');
    }
    const handleOpenSearch = () => {
        setIsSearchOpen((prevState) => !prevState)
        document.body.classList.add('overflow-hidden')
    }

    const handleKeywordCategories = (key) => {
        router.push(`/categories/${key}`)
    }

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
            <div className="sticky top-0 bg-white z-10 flex items-center py-3 px-4 gap-10 shadow-md">
                <button onClick={miniMenuNavbar} className="p-[6px] visible lg:hidden xl:hidden hover:bg-color-accent hover:bg-opacity-10 hover:rounded-full transition-all ease-in-out">
                    <List size={24} />
                </button>
                <Link href={'/'} className="text-emerald-600 text-md font-bold hidden lg:block xl:block">FurniCraft</Link>
                <div className="hidden lg:flex lg:items-center xl:flex xl:items-center">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Lobby tes</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                                        <li className='row-span-3'>
                                            <NavigationMenuLink asChild>
                                                <Link className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md' href='/'>
                                                    {/* <Icons.logo className='h-6 w-6' /> */}
                                                    <div className='mb-2 mt-4 text-lg font-medium'>Furnicraft</div>
                                                    <p className='text-sm leading-tight text-muted-foreground'>Discover cutting-edge furniture shopping, powered by Next.js technology. Shop smarter, live better!</p>
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                        <ListItem href='/furnitures' title='Furnitures'>
                                            Explore our elegant and stylish furniture collection
                                        </ListItem>
                                        <ListItem href='/categories' title='Categories'>
                                            Discover of our collected categories
                                        </ListItem>
                                        <ListItem href='/dashboard/stores' title='Create store'>
                                            Open your store and sell now
                                        </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className='grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2'>
                                        <ListItem onClick={() => handleKeywordCategories('Ruang tamu')} title='Ruang tamu'>
                                            Browse our stylish ruang tamu collection
                                        </ListItem>
                                        <ListItem onClick={() => handleKeywordCategories('Kamar tidur')} title='Kamar tidur'>
                                            Discover cozy kamar tidur essentials
                                        </ListItem>
                                        <ListItem onClick={() => handleKeywordCategories('Ruang dapur')} title='Ruang dapur'>
                                            Find perfect kitchen set solutions
                                        </ListItem>
                                        <ListItem onClick={() => handleKeywordCategories('Kamar mandi')} title='Kamar mandi'>
                                            Elevate your kamar mandi experience
                                        </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="flex gap-3 ml-auto items-center ">
                    <button onClick={handleOpenSearch} className="visible lg:hidden py-1 px-3 border-[1px] shadow border-color-accent border-opacity-15 rounded-full">
                        <MagnifyingGlass size={20}  className="font-medium"/>
                    </button>
                    <div onClick={handleOpenSearch} className={`cursor-pointer relative hidden h-10 xl:flex xl:items-center lg:flex lg:items-center py-2 px-4 border-[1px] shadow border-color-accent border-opacity-15 hover:bg-color-grey hover:bg-opacity-5 rounded-full transition-all ease-linear 2s`}>
                        <MagnifyingGlass size={17}  className="absolute left-2 font-medium"/>
                        <p className="font-medium pl-4 text-sm">Cari Furnitems... <span className="rounded-full bg-sky-100 text-[10px] py-1 px-2 font-bold">Ctrl K</span> </p>
                    </div>
                    <button onClick={clickToCart} className="relative flex gap-1 items-center h-10  py-2 px-3 border-[1px] shadow border-color-accent border-opacity-15 rounded-full hover:bg-color-grey hover:bg-opacity-5">
                        <ShoppingCartSimple size={17} />
                        <p className="font-medium text-sm">{cartCount ? cartCount : 0}</p>
                    </button>

                    <AuthButton authUser={authUser}/>
                    
                    {/* <div onClick={() => handleMenuActive('user2')} className={`relative flex items-center py-2 px-3 shadow-md rounded-full ${isMenuActive('user2') ? 'bg-color-accent' : null}`}>
                        <button>
                            <UserCircle size={24} />
                        </button>
                    </div> */}
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