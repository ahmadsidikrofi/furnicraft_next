import AddCartFunction from "@/components/AddCartFunction"
import { authUserGithub } from "@/libs/auth"
import prisma from "@/libs/prisma"
import { Storefront } from "@phosphor-icons/react"
import { BackpackIcon } from "@radix-ui/react-icons"
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
    const email = authUser?.email

    return (
        <main>
            <div className="xl:px-16 lg:px-16 px-4 py-6">
                <div className="xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2 items-start gap-7">
                    <div>
                        <Image src={detailData.image} className="rounded-xl md:object-cover lg:object-cover xl:object-cover object-fill w-full xl:h-[600px] lg:h-[600px] md:h-[600px] h-full" alt="..." width={1280} height={800} />
                    </div>
                    <div className="flex flex-col gap-4 mt-4">
                        <div className="flex items-center justify-center gap-2 bg-color-accent2 text-white rounded-full md:w-[10vw] p-2">
                            <BackpackIcon className="h-4 w-4"/> <p>{detailData.Store.nama_toko}</p>
                        </div>
                        <h3 className="font-semibold text-color-accent2 text-4xl">{detailData.nama_furniture}</h3>
                        <h5 className="font-medium text-color-secondary text-2xl">Rp {detailData.harga.toLocaleString("id-ID", { minimumFractionDigits: 2 })}</h5>
                        <p className="text-color-grey text-lg font-light">{detailData.categories}</p>
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
                            email={email}
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}
export default detailFurniturePage