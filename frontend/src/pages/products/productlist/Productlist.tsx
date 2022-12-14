import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Products from "../Products";
import prl from "./productlist.module.css";

const Productlist = () => {
  const location = useLocation();
  console.log(`product list prage ---------`);
  console.log(`location ------`, location);
  const cat: string = location.pathname.split("/")[2];

  console.log(cat);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState(`newest`);

  function handleFilters(e: any) {
    const value = e?.target.value;
    const name = e?.target.name;
    setFilters((prev) => {
      return { ...prev, [name]: value };
    });
  }

  console.log(filters, sort, cat);

  return (
    <div>
      <div className={`${prl.containerProdlist}`}>
        <div className="">
          <select name="color" id="" onChange={handleFilters}>
            <option value="red">Red </option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="grey">Grey</option>
          </select>
          <select name="size" id="" onChange={handleFilters}>
            <option value="X">X</option>
            <option value="XL">XL</option>
            <option value="M">M</option>
            <option value="S">S</option>
          </select>
        </div>
        <div className="">
          <select name="sort" id="" onChange={(e) => setSort(e.target.value)}>
            <option value="newest">Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
        </div>
      </div>

      <Products cat={cat} filters={filters} sort={sort} />
    </div>
  );
};

export default Productlist;
