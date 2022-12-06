import React from "react";
import nav from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { ProductsState } from "../../types";

const Navbar = () => {
  // @ts-ignore
  const { cart } = useSelector((state) => state);
  console.log(cart, `cart`);

  return (
    <div className={`${nav.container}`}>
      <div className={`${nav.title}`}>Shopping TS</div>
      <div className={`${nav.navElementsContainer}`}>
        <div>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            {/* <li>
              <NavLink to="/products/:ac">Products</NavLink>
            </li> */}
            {/* <li>
              <NavLink to="/cart">Cart</NavLink>
            </li> */}
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </div>
        <div className="">
          <NavLink to="/cart">
            <AiOutlineShoppingCart
              // style={{ color: `black` }}
              style={{ scale: `2`, color: `white` }}
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
