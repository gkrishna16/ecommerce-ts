import React from "react";
import { useSelector } from "react-redux";
import crt from "./cart.module.css";

const Cart = () => {
  const { products, total } = useSelector((state) => state.cart);
  console.log(products);

  console.log(total);

  return (
    <div>
      <div className={`${crt.cartContainer}`}>
        {/* Cart */}
        <div>
          {products.map((product) => (
            <div className={`${crt.productBox}`}>
              <img src={product.img} alt="" />
              <div className="">
                <div className="">Product : {product.title}</div>
                <div className="">ID : {product.id}</div>
                <div className=""> Price : $ {product.price}</div>
                <div className=""> Size : {product.size}</div>
              </div>
            </div>
          ))}
        </div>
        <div className={`${crt.cartRight}`}>
          <div className="">
            <h2>ORDER SUMMARY</h2>
          </div>
          <div className="">Subtotal : ${total}</div>
          <div className="">Estimated Shipping : $10</div>
          <div className="">Shipping Discount</div>
          <h5 className="">Total : </h5>
          <button>CHECKOUT NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
