'use client'
import { List, MagnifyingGlass, ShoppingCartSimple } from "@phosphor-icons/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SidebarMenu from "../components/Sidebar"
import SearchFurnitems from "./SearchFurnitems";
import { ListItem } from "@/components/ui/ListItem"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/components/ui/navigation-menu"
import AuthButton from "./AuthButton";
import Image from "next/image";

const Navbar = ({authUser, countCart}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [countCartLocal, setCountCartLocal] = useState(0)
    const router = useRouter()

    const clickToCart = () => {
        // authUser ? router.push('/cart') : router.push('/sign-in')
        router.push('/cart')
    }
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
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.ctrlKey && e.key === 'k') {
                e.preventDefault(); // Mencegah perilaku default
                handleOpenSearch(); // Panggil fungsi untuk membuka pencarian
            }
        };
        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [])

    useEffect(() => {
        const updateCartCount = () => {
            const cartItems = JSON.parse(localStorage.getItem("cartItems")) || []
            setCountCartLocal(cartItems.length)
        }
        updateCartCount()
        const handleCartUpdate = () => updateCartCount()
        window.addEventListener('storage', handleCartUpdate)
        window.addEventListener('cartItemsUpdated', handleCartUpdate)
        return () => {
            window.removeEventListener('storage', handleCartUpdate)
            window.removeEventListener('cartItemsUpdated', handleCartUpdate)
        }
    }, [])

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
                <Link href={'/'} className="text-emerald-600 text-lg font-bold hidden lg:flex items-center gap-2 mx-2">
                    <Image className="w-[30px] h-[30px]" width={768} height={768} src="/icon.png" alt="Furnicraft Logo" />
                    <p>FurniCraft</p>
                </Link>
                <div className="hidden lg:flex lg:items-center xl:flex xl:items-center">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Lobby</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                                        <li className='row-span-3'>
                                            <NavigationMenuLink asChild>
                                                <Link className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md' href='/'>
                                                    <Image className="w-[50px] h-[50px]" width={768} height={768} src="/icon.png" alt="Furnicraft Logo"  />
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

                <div className="flex gap-3 ml-auto items-center">
                    <button onClick={handleOpenSearch} className="search-furniture visible lg:hidden h-10 py-1 px-3 border-[1px] shadow border-color-accent border-opacity-15 rounded-full hover:bg-color-grey hover:bg-opacity-5">
                        <MagnifyingGlass size={20}  className="font-medium"/>
                    </button>
                    <div onClick={handleOpenSearch} className={`cursor-pointer relative hidden h-10 xl:flex xl:items-center lg:flex lg:items-center py-2 px-4 border-[1px] shadow border-color-accent border-opacity-15 hover:bg-color-grey hover:bg-opacity-5 rounded-full transition-all ease-linear 2s`}>
                        <MagnifyingGlass size={17}  className="absolute left-2 font-medium search-furniture"/>
                        <p className="font-medium pl-4 text-sm search-furniture">Cari Furnitems... <span className="rounded-full bg-sky-100 text-[10px] py-1 px-2 font-bold">Ctrl K</span> </p>
                    </div>
                    <button onClick={clickToCart} className="cart-driver relative flex gap-1 items-center h-10  py-1 px-3 border-[1px] shadow border-color-accent border-opacity-15 rounded-full hover:bg-color-grey hover:bg-opacity-5">
                        <ShoppingCartSimple size={17} />
                        <p className="font-medium text-sm">{authUser ? countCart : countCartLocal}</p>
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