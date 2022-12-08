import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ProductsState } from "../../types";
import { userRequest } from "../../requestMethod";
import { useNavigate } from "react-router-dom";
import crt from "./cart.module.css";
import StripeCheckout from "react-stripe-checkout";

const Cart = () => {
  const KEY = process.env.REACT_APP_STRIPE;
  // @ts-ignore
  const { cart } = useSelector((state) => state);
  const [stripeToken, setStripeToken] = useState("");

  const navigate = useNavigate();
  console.log(cart.products, "-----------");

  function onToken(token: any) {
    setStripeToken(token);
  }

  console.log(stripeToken);
  console.log(KEY);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest(`/pay/payment`, {
          // @ts-ignore
          tokenId: stripeToken,
          amount: cart.total * 100,
          currency: "usd",
        });
      } catch (error) {
        console.error(error);
      }
    };
    makeRequest();
    // @ts-ignore
    // navigate(`/success`, { data: res.data });
  }, [stripeToken, cart.total, navigate]);

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
                  description={`Your total is ${cart.total}`}
                  amount={cart.total}
                  token={onToken}
                  // @ts-ignore
                  stripeKey={KEY}
                >
                  <button>CHECKOUT NOW</button>
                </StripeCheckout>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
// bimbo9874