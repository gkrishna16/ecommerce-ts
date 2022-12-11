import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];

  useEffect(() => {
    async function getProductsByCategory() {
        try {
          
            
      } catch (error) {
        console.log(error);
      }
    }
  }, [cat]);

  return (
    <div>
      <div className="">
        <div className="">
          <select name="color" id="">
            <option value="red">Red</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
