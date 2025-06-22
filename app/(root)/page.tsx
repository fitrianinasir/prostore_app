"use client"
import { TData } from "@/lib/model";
import sampleData from "../../db/sample-data";
import ProductList from "@/components/shared/product/product-list";
// import {getCollection} from '../../db/db'
// import { useEffect } from "react";

const HomePage = () => {

  // const getDBCollections = async() => {
  //   return await getCollection("products")
  // }

  // useEffect(() => {
  //   getDBCollections()
  // }, [])

  return (
    <div>
      <ProductList
        data={sampleData.products as TData[]}
        title="Newest Arrivals"
        limit={4}
      />
    </div>
  );
};

export default HomePage;
