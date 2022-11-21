import Axios from "axios";
import React, { useEffect, useState } from "react";
import prd from "./products.module.css";

interface ProductsProps {
  cat: string;
  filters: object;
  sort: string;
}

interface ProductsState {
  id: Number;
  imgUrl: string;
  name: string;
  price: Number;
  size: Array<string>;
  colors: string[];
  categories: string[];
}

const Products = ({ cat, filters, sort }: ProductsProps) => {
  const [products, setProducts] = useState<ProductsState[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductsState[]>([]);
  console.log(filters, cat);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await Axios.get(
          cat
            ? `http://localhost:5002/api/products?category=${cat}`
            : `http://localhost:5002/api/products`
        );
        console.log(res.data);
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products?.filter((item: ProductsState | object | null | any) =>
          Object?.entries(filters)?.every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  console.log(`filtered products`, filteredProducts);

  return (
    <div className="">
      <div className="">
        {filteredProducts.map((product: ProductsState, index: number) => (
          <div key={index} className="">
            {product.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;