import prisma from "@/libs/prisma"

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { nama_kategori, slug } = req.body
        const data = { nama_kategori, slug }
        const createCategory = await prisma.categories.create({ data })
        if (!createCategory) {
            return res.status(500).json({ status: 500, isCreated: false });
        } else {
            return res.status(200).json({ status: 200, isCreated: true });
        }
    }
}

//  Kalau pages harus seperti ini
// export default async function GET (req, res) {
//     res.status(200).json({ message: "Hello from /api/categories" });
// } 

// Kalau begini error
