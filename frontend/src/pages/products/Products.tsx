import React, { useState } from "react";
import prd from "./products.module.css";

const Products = () => {
  const [category, setCategory] = useState("");

  function changeCategory(e: any) {
    setCategory(e.target.value);
  }

  console.log(category);

  return (
    <div>
      <div className={`${prd.containerProdpage}`}>
        <div className="">
          <select name="" id="" onClick={changeCategory}>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
          </select>
          <select name="" id="" onClick={changeCategory}>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
          </select>
        </div>
        <div className="">
          <select name="" id="" onClick={changeCategory}>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Products;
