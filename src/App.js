import React from "react";
import "./App.css";
import TimbuOnlineStore from "./components/TimbuOnlineStore";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Checkout from "./components/CheckoutDetails";
import { Routes, Route } from "react-router-dom";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<TimbuOnlineStore />} />
        <Route path="/shopping_cart/:id" element={<ShoppingCart />} />
        <Route path="/checkoutDetails/:id" element={<Checkout />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
