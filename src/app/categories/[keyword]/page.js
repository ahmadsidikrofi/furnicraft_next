import FurnituresCard from "@/components/FurnituresCard"
import JumbotronCategory from "@/components/JumbotronCategory"
import axios from "axios"

const FurnitureKeyword = async ({params}) => {
    const { keyword } = params
    const decodeKeyword = decodeURI(keyword)
    const res = await axios.get(`https://furnicraft-shopping.vercel.app/api/v1/categories/${decodeKeyword}`)
    const resultFurnitureKeyword = res.data.data || []
    const countResult = resultFurnitureKeyword.length
    return (
        <main>
            <section className="xl:px-16 sm:px-4 max-sm:px-4">
                <JumbotronCategory countResult={countResult} decodeKeyword={decodeKeyword}/>
                <FurnituresCard furnitures={resultFurnitureKeyword}/>
            </section>
        </main>
    )
}
export default FurnitureKeyword