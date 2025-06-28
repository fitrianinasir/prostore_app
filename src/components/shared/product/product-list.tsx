"use client";
import { TProduct } from "@/lib/types";
import ProductCard from "./product-card";

type TProductList = {
  data: TProduct[];
  title?: string;
};

const ProductList = ({ data, title }: TProductList) => {
  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title}</h2>
      {data.length > 0 ? (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((product: TProduct, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      ) : (
        <div>
          <p>No Products Found</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
