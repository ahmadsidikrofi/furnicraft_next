'use client'
import { WhatsappLogo } from "@phosphor-icons/react";
import { BackpackIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const WAButton = ({ waLink, detailData }) => {
    return (
        <>
            <div className="flex items-center gap-3">
                <div className="flex items-center justify-center gap-2 bg-color-accent2 text-white rounded-full md:w-[10vw] p-2">
                    <BackpackIcon className="h-4 w-4" /> <p>{detailData.Store.nama_toko}</p>
                </div>
                <Link href={waLink} target="_blank" className="flex items-center text-md bg-color-accent2 text-white rounded-full p-2">
                    <WhatsappLogo className="h-5 w-5" /> <p>Chat penjual</p>
                </Link>
            </div>
        </>
    )
}

export default WAButton;