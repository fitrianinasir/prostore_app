'use server'
import { LATEST_PRODUCT_LIMIT } from "@/lib/constants"
import { prisma } from "../../db/prisma"
import { convertToPlainObject } from "@/lib/utils"

export async function getProducts(){
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCT_LIMIT,
    orderBy:{createdAt: "desc"}
  })
  return convertToPlainObject(data)
}

export async function getProductBySlug(slug: string){
  return await prisma.product.findFirst({
    where:{
      slug: slug
    }
  })
}