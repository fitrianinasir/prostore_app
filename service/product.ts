'use server'

import { PrismaClient } from "@/generated/prisma"
import { LATEST_PRODUCT_LIMIT } from "@/lib/constants"

export async function getProducts(){
  const prisma = new PrismaClient()
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCT_LIMIT,
    orderBy:{createdAt: "desc"}
  })
  return data
}