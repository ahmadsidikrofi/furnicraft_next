import prisma from "@/libs/prisma";

export default async function handler(req, res) {
  const { id } = req.query;
  if (req.method === "DELETE") {
    await prisma.categories.delete({ where: { id: +id } });
    res.status(200).json({ message: "ok" });
  }
}