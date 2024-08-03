'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import JumbotronCategorySkeleton from "./skeleton/JumbotronCategorySkeleton";

const JumbotronCategory = ({ decodeKeyword, countResult }) => {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }, [isLoading])
    return (
        <>
            {isLoading ? <JumbotronCategorySkeleton /> : 
                <div className="relative ">
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-xl"></div>
                    <Image
                        className={`object-cover w-full h-[480px] rounded-xl mt-10 mb-20`}
                        src={`/${decodeKeyword}.jpg`}
                        width={2160}
                        height={2160}
                        alt={decodeKeyword}
                    />
                    <h3 className="absolute bottom-0 top-56 left-0 right-0 mx-auto mb-4 font-bold text-5xl max-sm:text-[20px]  text-color-accent md:text-4xl sm:text-2xl text-center">Furnitures ~ {decodeKeyword} ({countResult}) </h3>
                    <p className="absolute top-64 left-0 right-0 mx-auto text-sm max-sm:text-lg text-center font-normal text-color-primary py-2">Get to know to our interior future furniture we offer</p>
                </div>
            }
        </>
    );
}

export default JumbotronCategory;