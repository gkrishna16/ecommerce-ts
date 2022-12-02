import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./pages/about/About";
import Cart from "./pages/cart/Cart";
import Products from "./pages/products/products/Products";
import Register from "./pages/register/Register";
import Login from "./pages/Login/Login";
import Productlist from "./pages/products/productlist/Productlist";
import Product from "./pages/products/products/Product";

function App() {
  const user = true;

  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route path="/products/:category" element={<Productlist />} />
          <Route path="/products" element={<Productlist />} />
          <Route path="/product/:id" element={<Product />} />
          <Route />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

//  const router = createBrowserRouter([
//    {
//      path: "/",
//      element: <Layout />,
//      children: [
//        {
//          path: "/",
//          element: <Home />,
//        },

//        {
//          path: "/about",
//          element: <About />,
//        },
//        {
//          path: "/cart",
//          element: <Cart />,
//        },
//        {
//          path: "/products/:category",
//          element: <Productlist />,
//        },
//        {
//          path: "/product/:id",
//          element: <Product />,
//        },
//        {
//          path: "/register",
//          element: <Register />,
//        },

//        {
//          path: "/login",

//          element: <Login />,
//        },
//      ],
//    },
//  ]);

// function Layout() {
//   return (
//     <div className="">
//       <Navbar />
//       <Outlet />
//       <Footer />
//     </div>
//   );
// }

// {
/* <RouterProvider router={router} /> */
// }
