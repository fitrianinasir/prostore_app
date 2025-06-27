import { TData } from "@/lib/model";
import ProductList from "@/components/shared/product/product-list";
import { getProducts } from "../../service/product";
const HomePage = async() => {

  const productsData : TData[] = (await getProducts()).map(i => ({
    ...i,
    price: Number(i.price),
    rating: Number(i.rating)
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
