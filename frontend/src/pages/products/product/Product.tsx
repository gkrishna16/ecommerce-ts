import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import prd from "./product.module.css";
import Axios from "axios";
import { ProductsState } from "../../../types";
import { publicRequest } from "../../../requestMethod";

const Product = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  console.log(path);

  const [product, setProduct] = useState<ProductsState[]>();

  useEffect(() => {
    async function getProductById() {
      try {
        const res = await publicRequest.get(`/products/${path}`);
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
      <div className="">
        <div className="">
          {product?.map((item, index) => (
            <div className="" key={index}>
              <img src={item.imgUrl} alt="" />
              <div className="">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
