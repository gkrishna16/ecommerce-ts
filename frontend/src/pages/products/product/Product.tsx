import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import prd from "./product.module.css";
import Axios from "axios";
import { ProductsState } from "../../../types";
import { publicRequest } from "../../../requestMethod";

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  console.log(id);
  // product array
  const [product, setProduct] = useState<ProductsState[]>();
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    async function getProductById() {
      try {
        const res = await publicRequest.get(`/products/${id}`);
        console.log(res.data);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getProductById();
  }, [id]);

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
        <div>
          {product?.map((item, index) => (
            <div className={`${prd.productContainer}`}>
              <div className={`${prd.imgBox}`} key={index}>
                <img src={item.imgUrl} alt="" />
                <div className="">{item.name}</div>
                <div className=""></div>
                <button onClick={() => handleQuantity(`asc`)}>+</button>
                <button onClick={() => handleQuantity(`desc`)}>-</button>
                <button>Add to cart.</button>
              </div>
              <div className={`${prd.infoBox}`}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
