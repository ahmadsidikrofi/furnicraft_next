import { PrismaClient } from "@prisma/client";

let prisma = global.prisma || new PrismaClient()

if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient()
} 

global.prisma = prisma // Simpan prisma ke global

// console.log("Prisma:", prisma)

export default prisma