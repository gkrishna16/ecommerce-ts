import React, { useEffect } from "react";
import Axios from "axios";

const Home = () => {
  useEffect(() => {
    async function getProducts(url) {
      try {
        const res = await Axios.get(url);
        const data = await res.json();
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return (
    <div>
      <div className="">Home</div>
    </div>
  );
};

export default Home;
