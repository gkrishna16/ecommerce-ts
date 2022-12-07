import React, { useState } from "react";
import { useSelector } from "react-redux";
import crt from "./cart.module.css";
import { ProductsState } from "../../types";
import StripeCheckout from "react-stripe-checkout";

const Cart = () => {
  const KEY = process.env.REACT_APP_STRIPE;

  // @ts-ignore
  const { cart } = useSelector((state) => state);
  const [stripeToken, setStripeToken] = useState("");
  console.log(cart.products, "-----------");

  function onToken(token: any) {
    setStripeToken(token);
  }

  console.log(stripeToken);
  console.log(KEY);

  return (
    <div>
      <div className={`${crt.main}`}>
        {cart.products.map((product: ProductsState, index: number) => (
          <div className="" key={index}>
            <div className={`${crt.cartBox}`}>
              <img src={product.img} alt="" />
              <div className="">{product.title}</div>
              <div className="">
                {/* @ts-ignore */}
                <StripeCheckout
                  name="Gopal Ecommerce"
                  billingAddress
                  shippingAddress
                  description={`Your total is ${cart.total * 100}`}
                  amount={cart.total * 100}
                  token={onToken}
                  // @ts-ignore
                  stripeKey={KEY}
                ></StripeCheckout>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
