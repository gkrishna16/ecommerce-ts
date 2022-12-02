import React from "react";
import nav from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
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
            <li>
              <NavLink to="/cart">Cart</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </div>
        <div className="">
          <AiOutlineShoppingCart style={{ scale: `2` }} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
