import React from "react";
import { Link } from "react-router-dom";
import hm from "./home.module.css";

const Home = () => {
  return (
    <div className={`${hm.homeContainer}`}>
      <div className="">Home</div>
      <div className="">
        <div className="">
          <Link to="/products/women">Women</Link>
        </div>
        <div className="">
          <Link to="/products/women">Men</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
