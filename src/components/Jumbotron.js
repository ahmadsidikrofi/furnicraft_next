'use client'

import Image from "next/image"
import Link from "next/link"
import JumbotronCarousel from "./JumbotronCarousel"

const Jumbotron = () => {
    return (
        <div>
            <div className="grid grid-cols-2 max-sm:grid-cols-1 text-[4vw] max-sm:text-center max-sm:text-[6vw] font-bold px-16 py-[10vh] gap-10">
                <div>
                    <div className="flex items-start gap-4 mb-4">
                        <Link href="https://github.com/ahmadsidikrofi/furnicraft_next" target="_blank" rel="noopener noreferrer" className="bg-zinc-200 hover:bg-slate-800 rounded-full p-2 flex items-center text-sm text-gray-800 hover:text-gray-100 ease-linear transition-all">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                            </svg>
                            Fork on my GitHub
                        </Link>
                    </div>
                    <h1 className="leading-[5vw] max-sm:leading-[7vw] tracking-tight">Unleash Your Home`s Potential alongside <span className="text-color-accent2">FurniCraft</span> by Rofi</h1>
                    <p className="text-[2vw] max-sm:text-[3vw] max-sm:font-medium text-color-secondary opacity-65 font-light my-5">Discover and shop unique furniture pieces from independent brands and stores around the globe. Transform your space effortlessly!</p>
                    <div className="max-sm:pb-4 flex max-sm:justify-center max-sm:items-center gap-4 text-sm font-medium items-center">
                        <Link href={'/furnitures'} className="py-3 px-4 text-color-primary bg-color-accent2 rounded-full hover:shadow-lg">Shop Now</Link> 
                        <p className="font-semibold">or</p>
                        <Link href={'/dashboard/stores'} className="py-3 px-4 border-[1px] border-color-grey border-opacity-15 rounded-full hover:shadow-xl">Cash in today</Link>
                    </div>
                </div>
                <div className="max-sm:order-last flex justify-center">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#10b981" fillOpacity="0.8" d="M0,128L0,32L90,32L90,192L180,192L180,320L270,320L270,128L360,128L360,32L450,32L450,128L540,128L540,64L630,64L630,256L720,256L720,64L810,64L810,96L900,96L900,96L990,96L990,224L1080,224L1080,96L1170,96L1170,224L1260,224L1260,192L1350,192L1350,32L1440,32L1440,0L1350,0L1350,0L1260,0L1260,0L1170,0L1170,0L1080,0L1080,0L990,0L990,0L900,0L900,0L810,0L810,0L720,0L720,0L630,0L630,0L540,0L540,0L450,0L450,0L360,0L360,0L270,0L270,0L180,0L180,0L90,0L90,0L0,0L0,0Z"></path></svg> */}
                    <Image src="/dining-jumbotron.png" className="h-full w-[80%]" width={2160} height={2160} alt="Dining Jumbotron" />
                </div>
            </div>
            <div className="mt-20 pb-20 lg:px-28 sm:px-14 max-sm:px-14">
                <JumbotronCarousel />
            </div>
        </div>
    )
}
export default Jumbotron