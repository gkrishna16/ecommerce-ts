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
  // product array
  const [product, setProduct] = useState<ProductsState[]>();
  const [quantity, setQuantity] = useState(0);

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

  // button for cart
  const handleQuantity = (type: String): void => {
    if (type === "decs") {
      setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }

    console.log(quantity);
  };

  return (
    <div>
      <div className="">
        <div className="">
          {product?.map((item, index) => (
            <div className="" key={index}>
              <img src={item.imgUrl} alt="" />
              <div className="">{item.name}</div>
              <div className=""></div>
              <button onClick={() => handleQuantity(`asc`)}>+</button>
              <button onClick={() => handleQuantity(`desc`)}>-</button>
              <button>Add to cart.</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
