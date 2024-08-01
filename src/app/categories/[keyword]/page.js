import FurnituresCard from "@/components/FurnituresCard"
import axios from "axios"
import Image from "next/image"

const FurnitureKeyword = async ({params}) => {
    const { keyword } = params
    const decodeKeyword = decodeURI(keyword)
    const res = await axios.get(`http://localhost:3000/api/v1/categories/${decodeKeyword}`)
    const resultFurnitureKeyword = res.data.data || []
    const countResult = resultFurnitureKeyword.length
    return (
        <main>
            <section className="xl:px-16 sm:px-4 max-sm:px-4">
                <div className="relative ">
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-xl"></div>
                    <Image
                        className={`object-cover w-full h-[480px] rounded-xl mt-16 mb-20`}
                        src={`/${decodeKeyword}.jpg`}
                        width={2160}
                        height={2160}
                        alt={decodeKeyword}
                    />
                    <h3 className="absolute bottom-0 top-56 left-0 right-0 mx-auto mb-4 font-bold text-5xl max-sm:text-[20px]  text-color-accent md:text-4xl sm:text-2xl text-center">Furnitures ~ {decodeKeyword} ({countResult}) </h3>
                    <p className="absolute top-64 left-0 right-0 mx-auto text-sm max-sm:text-lg text-center font-normal text-color-primary py-2">Get to know to our interior future furniture we offer</p>
                </div>
                <FurnituresCard furnitures={resultFurnitureKeyword}/>
            </section>
        </main>
    )
}
export default FurnitureKeyword