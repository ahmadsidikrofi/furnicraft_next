import AddCartFunction from "@/components/AddCartFunction"
import WAButton from "@/components/WAButton"
import { authUserGithub } from "@/libs/auth"
import prisma from "@/libs/prisma"
import Image from "next/image"

const furnitureData = async (slug) => {
    const data = await prisma?.furnitures.findUnique({
        where: { slug: slug },
        include: { Store: true }
    })
    return data
}

const detailFurniturePage = async ({ params }) => {
    const { slug } = params
    const detailData = await furnitureData(slug)
    const authUser = await authUserGithub()
    const telp = "62" + detailData.Store.telp
    const chat = `Halo, saya tertarik dengan furnitur ${detailData.nama_furniture} yang dijual seharga Rp${detailData.harga.toLocaleString('id-ID')} dengan link sebagai berikut:`
    const link = `https://furnicraft-shop.vercel.app/furnitures/${detailData.slug}`
    const waLink = `https://wa.me/${telp}?text=${chat}%0A${link}`

    return (
        <main>
            <div className="xl:px-16 lg:px-16 px-4 py-6">
                <div className="xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2 items-start gap-7">
                    <div>
                        <Image src={detailData.image} className="rounded-xl md:object-cover lg:object-cover xl:object-cover object-fill w-full xl:h-[600px] lg:h-[600px] md:h-[600px] h-full" alt="..." width={1280} height={768} />
                    </div>
                    <div className="flex flex-col gap-4 mt-4">
                        <WAButton waLink={waLink} detailData={detailData}/>
                        <h3 className="font-semibold text-color-accent2 text-4xl">{detailData.nama_furniture}</h3>
                        <h5 className="font-medium text-color-secondary text-2xl">Rp {detailData.harga.toLocaleString("id-ID", { minimumFractionDigits: 2 })}</h5>
                        <p className="text-color-grey text-lg font-normal">{detailData.Store.nama_toko}</p>
                        <hr className="w-full opacity-15 border-color-grey" />
                        <p className="font-medium text-color-secondary text-lg">Deskripsi furniture : </p>
                        <p>{detailData.deskripsi}</p>
                        <AddCartFunction
                            nama_furniture={detailData.nama_furniture}
                            harga={detailData.harga}
                            categories={detailData.categories}
                            image={detailData.image}
                            id_furniture={detailData.id}
                            slug={detailData.slug}
                            authUser={authUser}
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}
export default detailFurniturePage