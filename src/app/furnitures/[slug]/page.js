import Image from "next/image";
import prisma from "../../../libs/prisma";
import AddCart from "../../../components/AddCart"
const detailFurniture = async (slug) => {
    const dataFurniture = await prisma.furnitures.findUnique ({
        where: { slug: slug }
    })
    return dataFurniture
}
const Page = async ({ params }) => {
    const { slug } = params
    const detailData = await detailFurniture(slug)
    return ( 
        <div className="xl:px-16 lg:px-16 px-4 py-6">
            <div className="xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2 items-start gap-7">
            {/* <div className="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col max-sm:flex-col items-start gap-7"> */}
                <div>
                    <Image src={detailData.image} className="rounded-xl md:object-cover lg:object-cover xl:object-cover object-fill w-full xl:h-[600px] lg:h-[600px] md:h-[600px] h-full" alt="..." width={1280} height={800}/>
                </div>
                <div className="flex flex-col gap-4 mt-4">
                    <h3 className="font-semibold text-color-accent2 text-4xl">{detailData.nama_furniture}</h3>
                    <h5 className="font-medium text-color-secondary text-2xl">Rp {detailData.harga.toLocaleString("id-ID", {minimumFractionDigits: 2})}</h5>
                    <p className="text-color-grey text-lg font-light">{detailData.categories}</p>
                    <hr className="w-full opacity-15 border-color-grey"/>
                    <p className="font-medium text-color-secondary text-lg">Deskripsi furniture : </p>
                    <p>{detailData.deskripsi}</p>
                    <AddCart 
                        nama_furniture={detailData.nama_furniture}
                        harga={detailData.harga}
                        categories={detailData.categories}
                        image={detailData.image}
                        id_furniture={detailData.id}
                        slug={detailData.slug}
                    />
                </div>
            </div>
        </div>
    );
}
 
export default Page;