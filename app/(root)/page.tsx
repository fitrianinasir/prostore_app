import { TProduct } from "@/lib/types";
import ProductList from "@/components/shared/product/product-list";
import { getProducts } from "@/service/product";
const HomePage = async() => {

  const productsData : TProduct[] = (await getProducts()).map(i => ({
    ...i,
    numReviews: Number(i.numReviews),
    price: String(i.price),
    rating: String(i.rating)
  }))
  

  return (
    <div>
      <ProductList
        data={productsData}
        title="Newest Arrivals"
      />
    </div>
  );
};

export default HomePage;
