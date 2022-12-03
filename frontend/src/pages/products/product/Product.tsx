import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import prd from "./product.module.css";
import Axios from "axios";
import { ProductsState } from "../../../types";

const Product = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  console.log(path);

  const [product, setProduct] = useState<ProductsState[]>();

  useEffect(() => {
    async function getProductById() {
      try {
        const res = await Axios.get(
          `http://localhost:5002/api/products/${path}`
        );
        console.log(res.data);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getProductById();
  }, [path]);

  return (
    <div>
      <div className=""></div>
    </div>
  );
};

export default Product;
