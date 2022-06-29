import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Store from "../pages/Store/Store";
import ProductDetail from "../pages/ProductDetail";
import Navbar from "../components/Navbar";
import Register from "../components/Register";
import Login from "../pages/Login/Login";
import UsersMenu from "../pages/Users/Users";
import ResetPasswordUser from "../pages/Users/ResetPasswordUser";
import Shopping from "../pages/Users/Shopping";
import PurchaseHistory from "../pages/Users/purchaseHistory";

import ResetPassword from "../pages/ResetPassword/ResetPassword";
import ResetPasswordConfirmation from "../pages/ResetPassword/ResetPasswordConfirmation";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/pages/Store/Store" element={<Store />} />
        <Route
          path="/pages/Store/ProductDetail/:id"
          element={<ProductDetail />}
        />
        <Route path="/" element={<h1>Home</h1>} />

        {/* <Route path='*' element = {<h1>Not found</h1>} /> */}
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route
          path="/ResetPasswordConfirmation"
          element={<ResetPasswordConfirmation />}
        />
        <Route path="/User" element={<UsersMenu />} />
        <Route path="/UserResetPassword" element={<ResetPasswordUser />} />
        <Route path="/Shopping" element={<Shopping />} />
        <Route path="/PurchaseHistory" element={<PurchaseHistory />} />



      </Routes>
    </BrowserRouter>
  );
}

/* <Route path='*' element = {<h1>Not found</h1>} /> */
