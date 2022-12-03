import Axios from "axios";
import React, { useEffect, useState } from "react";
import prd from "./products.module.css";

interface ProductsProps {
  cat: string;
  filters: object;
  sort: string;
}

type pricetype = {
  price: string;
};

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
  // const [error, setError] = useState<String | any>("");
  console.log(filters, cat);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await Axios.get(
          cat !== ""
            ? `http://localhost:5002/api/products/${cat}`
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

  // console.log(`filtered products`, filteredProducts);
  console.log(products);
  console.log(filters);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item: any) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, filters, cat]);

  useEffect(() => {
    if (sort === `asc`) {
      setFilteredProducts((prev) =>
        [...prev].sort((a: any, b: any) => a.price - b.price)
      );
    } else if (sort === `desc`) {
      setFilteredProducts((prev: ProductsState[]) =>
        [...prev].sort((a: any, b: any) => b.price - a.price)
      );
    }
  }, [sort]);

  console.log(sort);

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
