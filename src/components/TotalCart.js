import prisma from "../libs/prisma"
const TotalCart = async () => {
    const totalCart = await prisma?.cart.findMany ()
    return <p className="font-medium text-sm">{totalCart.length}</p>;
}
export default TotalCart