'use client'
import { CalendarCheck, WhatsappLogo } from "@phosphor-icons/react";
import Link from "next/link";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"

const WAButton = ({ waLink, detailData }) => {
    return (
        <>
            <div className="fixed bottom-8 right-8 gap-3">
                <HoverCard>
                    <HoverCardTrigger href={waLink} target="_blank" className="flex items-center text-md bg-color-accent2 text-white rounded-full p-3"> 
                        <WhatsappLogo className="h-10 w-10" />
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                        <div className="flex justify-between space-x-4">
                            <div className="space-y-1">
                                <h4 className="text-sm font-semibold">{detailData.Store.nama_toko}</h4>
                                <p className="text-sm">
                                    {detailData.Store.deskripsi}
                                </p>
                                <div className="flex items-center pt-2">
                                    <CalendarCheck className="mr-2 h-4 w-4 opacity-70" />{" "}
                                    <span className="text-xs text-muted-foreground">
                                        Sejak {new Date(detailData.Store.created_at).toLocaleDateString("id-ID", {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric'
                                        })}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </HoverCardContent>
                </HoverCard>
            </div>
        </>
    )
}

export default WAButton;