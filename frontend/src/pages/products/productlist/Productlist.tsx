import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import prl from "./productlist.module.css";

const Productlist = () => {
  const location = useLocation();
  console.log(location);
  const category: string = location.pathname.split("/")[2];

  console.log(category);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState(`newest`);

  function handleFilters(e: any) {
    const value = e?.target.value;
    const name = e?.target.name;
    setFilters({ ...filters, [name]: value });
  }

  console.log(filters);

  return (
    <div>
      <div className={`${prl.containerProdlist}`}>
        <div className="">
          <select name="color" id="" onClick={setFilters}>
            <option value="men">Red </option>
            <option value="women">Blue</option>
            <option value="kids">Green</option>
          </select>
          <select name="size" id="" onClick={setFilters}>
            <option value="men">X</option>
            <option value="women">XL</option>
            <option value="kids">M</option>
            <option value="kids">S</option>
          </select>
        </div>
        <div className="">
          <select name="" id="" onChange={(e) => setSort(e.target.value)}>
            <option value="men">Newest</option>
            <option value="women">Price (asc)</option>
            <option value="women">Price (desc)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Productlist;
