'use client'

import { cn } from "@/lib/utils"
import Image from "next/image"
import { useState } from "react"

type TProductImages = {
  images: string[]
}
const ProductImages = ({ images }: TProductImages) => {
  const [current, setCurrent] = useState(0)
  return (
    <div className="space-y-4">
      <Image
        src={images[current]}
        alt="Product Image"
        width={1000}
        height={1000}
        className="min-h-[300px] object-cover object-center"
      />
      <div className="flex">
        {images.map((img, index) => (
          <div key={index} onClick={() => setCurrent(index)} className={cn('border mr-2 cursor-pointer hover:border-orange-600', current === index && 'border-orange-500')}>
            <Image src={img} alt="Product Image" width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductImages