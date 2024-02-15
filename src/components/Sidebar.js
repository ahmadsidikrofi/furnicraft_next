'use client'
import { XCircle } from "@phosphor-icons/react";
import Link from "next/link";
import { useRef, useState } from "react";

const SidebarMenu = ({ setIsSidebarOpen }) => {
    const [closeSidebar, setCloseSidebar] = useState(false)
    const handleCloseSidebar = () => {
        setCloseSidebar(true)
        setIsSidebarOpen(false)
        document.body.classList.remove('overflow-hidden');
    }
    return ( 
        <>
            {closeSidebar ? null :
                <div className="sticky z-20 top-0">
                    <div className="fixed inset-0 z-20 overflow-hidden">
                        <div className="absolute inset-0 bg-color-accent2 opacity-70 blur-xl brightness-75" onClick={handleCloseSidebar}></div>
                        <div className="absolute shadow-xl h-[100vh] w-[76vh] bg-color-primary text-color-accent2">
                            <div className="px-5 py-10">
                                <div className="flex justify-between items-center">
                                    <Link href={'/'} className="text-md font-bold">FurniCraft</Link>
                                    <button onClick={handleCloseSidebar}><XCircle size={28} /></button>
                                </div>
                                <p className="font-medium py-5">My Dashboard</p>
                                <hr className="w-[85%] opacity-35 border-color-grey" />
                                <p className="font-medium py-5">Lobby</p>
                                <hr className="w-[85%] opacity-35 border-color-grey" />
                                <p className="font-medium py-5">Categories</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}
 
export default SidebarMenu;