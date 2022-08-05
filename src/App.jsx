import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Products } from "./components";
const Home = lazy(() => import("./components/Home/Home"));
const Cart = lazy(() => import("./components/Cart/CartContainer"));
const Product = lazy(() => import("./components/Products/Product/Product"));
const Contact = lazy(() => import("./components/Contact/FormInput"));
import { useGlobalContext } from "./context";

function App() {

  const { loading } = useGlobalContext();
  console.log(loading)
  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className=" flex flex-col h-full">
      <Router>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            {/* <Route path="/about" element={<About /> } /> */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
