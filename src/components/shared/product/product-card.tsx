"use client";
import Link from "next/link";
import Image from "next/image";
import { TData } from "@/lib/model";
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card";
import ProductPrice from "./product-price";

type TProductCard = {
  product: TData;
};
const ProductCard = ({ product }: TProductCard) => {
  return (
    <Link href={`/product/${product.slug}`}>
      <Card className="w-full max-w-sm">
        <CardHeader className="p-0 items-center">
          <Image
            src={product.images[0]}
            alt={product.name}
            height={300}
            width={300}
            priority={true}
          />
        </CardHeader>
        <CardContent className="p-4 grid gap-4">
          <p className="text-xs">{product.brand}</p>
          <h2 className="text-sm font-medium">{product.name}</h2>
          <div className="flex-between text-sm gap-4">
            <p>{product.rating} Stars</p>
            {product.stock > 0 ? (
              <ProductPrice value={Number(product.price)}/>
            ) : (
              <p className="text-destructive">Out of stock</p>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
