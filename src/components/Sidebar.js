'use client'
import { CaretCircleDown, CaretCircleUp, XCircle } from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SidebarMenu = ({ setIsSidebarOpen }) => {
    const [closeSidebar, setCloseSidebar] = useState(false)
    const [wrapSidebarMenu, setWrapSidebarMenu] = useState({
        myDashboard: true,
        lobby: true,
        categories: true
    })
    const handleWrapSidebarMenu = (parentMenu) => {
        setWrapSidebarMenu((prevState) => ({
            ...prevState,
            [parentMenu]: !prevState[parentMenu]
        }))
    }
    const handleCloseSidebar = () => {
        setCloseSidebar(true)
        setIsSidebarOpen(false)
        document.body.classList.remove('overflow-hidden');
    }
    return ( 
        <>
            {closeSidebar ? null :
            <div>
                {/* <div className="absolute inset-0 z-20 bg-opacity-50 bg-color-primary backdrop-blur-xl transition-all ease-in-out delay-75 2s" onClick={handleCloseSidebar}></div> */}
                <div className="sticky z-20 top-0">
                    <div className="fixed inset-0 z-20 overflow-hidden">
                    <div className="absolute inset-0 bg-opacity-20 bg-color-primary backdrop-blur-sm transition-all ease-in-out delay-75 2s" onClick={handleCloseSidebar}></div>
                        <AnimatePresence>
                            <motion.div className="absolute h-[100vh] w-[76vh] md:h-[100vh] md:w-[40%] max-sm:h-[100vh] max-sm:w-[80%] bg-color-primary text-color-accent2 shadow-lg"
                                initial={{ x: -250, opacity: 0.8 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -250, opacity: 0 , transition: { delay: 0.2 }}}
                                transition={{ type: 'tween', duration: 0.4 }}
                            >
                                <div className="px-7 py-5 text-sm">
                                    <div className="flex justify-between items-center">
                                        <Link href={'/'} className="text-lg font-bold">FurniCraft</Link>
                                        <button onClick={handleCloseSidebar}><XCircle size={28} /></button>
                                    </div>
                                    <div onClick={() => handleWrapSidebarMenu('myDashboard')} className="cursor-pointer flex justify-between items-center" >
                                        <p className="font-semibold py-4 hover:underline mt-3">My Dashboard</p>
                                        {wrapSidebarMenu.myDashboard ? <CaretCircleUp size={24} /> : <CaretCircleDown size={24} />}
                                    </div>
                                    <ul className={`${wrapSidebarMenu.myDashboard ? null : 'hidden'} opacity-95 text-color-grey pb-5`} >
                                        <li><Link href={'/checkout'}>Orders</Link></li>
                                    </ul>
                                    <hr className="w-[85%] opacity-20 border-color-grey" />
                                    <div onClick={() => handleWrapSidebarMenu('lobby')} className="cursor-pointer flex justify-between items-center">
                                        <button className="font-semibold py-4 hover:underline">Lobby</button>
                                        {wrapSidebarMenu.lobby ? <CaretCircleUp size={24} /> : <CaretCircleDown size={24} />}
                                    </div>
                                    <ul className={`${wrapSidebarMenu.lobby ? null : 'hidden'} opacity-95 text-color-grey pb-5`}>
                                        <li className="pb-2"><Link href={'/checkout'}>Product</Link></li>
                                        <li><Link href={'/checkout'}>Categories</Link></li>
                                    </ul>
                                    <hr className="w-[85%] opacity-20 border-color-grey" />
                                    <div onClick={() => handleWrapSidebarMenu('categories')} className="cursor-pointer flex justify-between items-center">
                                        <button className="font-semibold py-4 hover:underline">Categories</button>
                                        {wrapSidebarMenu.categories ? <CaretCircleUp size={24} /> : <CaretCircleDown size={24} />}
                                    </div>
                                    <ul className={`${wrapSidebarMenu.categories ? null : 'hidden'} opacity-95 text-color-grey pb-5`}>
                                        <li className="pb-2"><Link href={'/checkout'}>Kamar tidur</Link></li>
                                        <li className="pb-2"><Link href={'/checkout'}>Kitchen set</Link></li>
                                        <li className="pb-2"><Link href={'/checkout'}>Kamar mandi</Link></li>
                                        <li><Link href={'/checkout'}>Living room</Link></li>
                                    </ul>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
            }
        </>
    );
}
 
export default SidebarMenu;