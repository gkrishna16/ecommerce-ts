import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Axios from "axios";

function Product() {
  const [product, setProduct] = useState("");

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  console.log(id);

  useEffect(() => {
    async function getProductById() {
      try {
        const res = await Axios.get(`http://localhost:5002/api/products/${id}`);
        setProduct(res.data[0]);
      } catch (error) {
        console.log(error);
      }
    }
    getProductById();
  }, [id]);

  return (
    <div>
      Product
      <div className="">{product && product.title}</div>
    </div>
  );
}

export default Product;
