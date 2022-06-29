import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Store from "../pages/Store/Store";
import Navbar from "../components/Navbar";
import Register from "../components/Register";
import Login from "../pages/Login/Login";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import ResetPasswordConfirmation from "../pages/ResetPassword/ResetPasswordConfirmation";
import ShoppingCart from "../pages/Shopping/ShoppingCart";
import Checkout from "../pages/Checkout/Checkout";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail/ProductDetail";

export default function AppRouter() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <BrowserRouter>
      <Navbar setIsSidebarOpen={setIsSidebarOpen} />
      <Routes>
        <Route path="/Store" element={<Store />} />
        <Route
          // path="/pages/ProductDetail/ProductDetail/:id"
          path="/ProductDetail"
          element={<ProductDetail />}
        />
        <Route path="/" element={<Home />} />

        {/* <Route path='*' element = {<h1>Not found</h1>} /> */}
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route
          path="/ResetPasswordConfirmation"
          element={<ResetPasswordConfirmation />}
        />
        <Route path="ShoppingCart" element={<ShoppingCart />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

/* <Route path='*' element = {<h1>Not found</h1>} /> */
