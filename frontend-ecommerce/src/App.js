import { Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./pages/Cart.jsx/Cart";
import ProductList from "./components/productList/ProductList";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:category" element={<ProductList />} />
      </Routes>
    </div>
  );
}

export default App;
