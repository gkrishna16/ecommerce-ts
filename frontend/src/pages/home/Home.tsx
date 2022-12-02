import React from "react";
import { Link } from "react-router-dom";
import Categories from "../categories/Categories";
import hm from "./home.module.css";

const Home = () => {
  return (
    <div className={`${hm.homeContainer}`}>
      <div className="">Home</div>
      <div className="">
        <Categories />
      </div>
    </div>
  );
};

export default Home;
