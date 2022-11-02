import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Wishlist from "../pages/Wishlist";

const Routers = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="wishlist" element={<Wishlist />} />
      <Route path="cart" element={<Cart />} />
    </Routes>
  );
};

export default Routers;
