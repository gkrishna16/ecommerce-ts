import React from "react";
import { useSelector } from "react-redux";
import crt from "./cart.module.css";
import { ProductsState } from "../../types";

const Cart = () => {
  // @ts-ignore
  const { cart } = useSelector((state) => state);
  console.log(cart.products, "-----------");

  return (
    <div>
      <div className="">
        {cart.products.map((product: ProductsState, index: number) => (
          <div className="" key={index}>
            {product.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
