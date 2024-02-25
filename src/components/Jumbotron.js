'use client'

import Link from "next/link"

const Jumbotron = () => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#10b981" fillOpacity="1" d="M0,320L20,266.7C40,213,80,107,120,69.3C160,32,200,64,240,117.3C280,171,320,245,360,272C400,299,440,277,480,277.3C520,277,560,299,600,282.7C640,267,680,213,720,192C760,171,800,181,840,197.3C880,213,920,235,960,250.7C1000,267,1040,277,1080,272C1120,267,1160,245,1200,218.7C1240,192,1280,160,1320,165.3C1360,171,1400,213,1420,234.7L1440,256L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"></path></svg>
            <div className="grid grid-cols-2 max-sm:grid-cols-1 text-[4vw] max-sm:text-center max-sm:text-[6vw] font-bold px-16 py-0">
                <div>
                    <h1 className="leading-[4vw] max-sm:leading-[7vw] tracking-tight">An open source e-commerce project built by <span className="text-color-accent2">Rofiyes</span></h1>
                    <p className="text-[2vw] max-sm:text-[3vw] max-sm:font-medium  text-color-secondary opacity-65 font-light my-5">Buy and sell furnitures gears from independent brands and stores around the world with ease</p>
                </div>
                <div className="mt-7 max-sm:pb-28 max-sm:order-last">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#10b981" fillOpacity="0.8" d="M0,128L0,32L90,32L90,192L180,192L180,320L270,320L270,128L360,128L360,32L450,32L450,128L540,128L540,64L630,64L630,256L720,256L720,64L810,64L810,96L900,96L900,96L990,96L990,224L1080,224L1080,96L1170,96L1170,224L1260,224L1260,192L1350,192L1350,32L1440,32L1440,0L1350,0L1350,0L1260,0L1260,0L1170,0L1170,0L1080,0L1080,0L990,0L990,0L900,0L900,0L810,0L810,0L720,0L720,0L630,0L630,0L540,0L540,0L450,0L450,0L360,0L360,0L270,0L270,0L180,0L180,0L90,0L90,0L0,0L0,0Z"></path></svg>
                </div>
                <div className="pb-44 max-sm:pb-4 flex max-sm:justify-center max-sm:items-center gap-4 text-sm font-medium items-center">
                    <Link href={'#'} className="py-3 px-4 text-color-primary bg-color-accent2 rounded-full hover:shadow-lg">Buy Now</Link>
                    <Link href={'#'} className="py-3 px-4 border-[1px] border-color-grey border-opacity-15 rounded-full hover:shadow-xl">Sell Now</Link>
                </div>
            </div>
        </>
    )
}
export default Jumbotron