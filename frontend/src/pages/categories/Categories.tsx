import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div>
      <div className="">
        <div className="">
          <div className="">
            <Link to="/products/women">Women</Link>
          </div>
          <div className="">
            <Link to="/products/women">Men</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
