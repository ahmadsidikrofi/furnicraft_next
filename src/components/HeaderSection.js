'use client'
import { ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";

const HeaderSection = ({ titleHeader, descHeader, linkContent, linkHeader}) => {
    return ( 
        <div>
            <div className="text-color-accent2 text-5xl font-bold">
                <h3>{titleHeader}</h3>
            </div>
            <div className="flex items-center justify-between gap-10 my-3 text-[18px] font-normal text-color-grey">
                <p>{descHeader} <span className="font-medium text-color-accent">FurniCraft</span></p>
                <Link href={`${linkHeader}`} className="hover:text-color-accent hover:translate-x-3 transition-all ease-linear items-center gap-3 hidden md:flex">
                    {linkContent}
                    <ArrowRight size={24} />
                </Link>
            </div>
        </div>
    );
}
 
export default HeaderSection;