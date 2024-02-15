import HeaderSection from "../../../../components/HeaderSection";
import UpdateFurnitureButton from "../../../../components/UpdateFurnitureButton"
import prisma from "../../../../libs/prisma";

const detailFurniture = async (slug) => {
    const data = await prisma.furnitures.findUnique ({
        where: { slug: slug }
    })
    return data
}

const EditFurniture = async ({ params }) => {
    const { slug } = params
    const detailData = await detailFurniture(slug)

    return ( 
        <div className="p-16">
        <HeaderSection titleHeader="Edit furniture" descHeader="Ubah furniture sebelumnya" />
        <hr className="pt-16 opacity-10"/>
        <div className="border-[1px] border-opacity-30 border-color-accent rounded-lg text-color-secondary">
            <div className="p-5">
                <UpdateFurnitureButton detailData={detailData}/>
            </div>
        </div>
    </div>
    );
}
 
export default EditFurniture;