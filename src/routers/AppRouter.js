import React from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Store from "../pages/Store/Store";
import Navbar from "../components/Navbar/Navbar";
import Register from "../components/Register";
import Login from "../pages/Login/Login";
import Users from "../pages/Users/Users";
import ResetPasswordUser from "../pages/Users/ResetPasswordUser";
import BuyDetail from "../pages/Users/BuyDetail";
// import PurchaseHistory from "../pages/Users/BuysHistory";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import ResetPasswordConfirmation from "../pages/ResetPassword/ResetPasswordConfirmation";
import ShoppingCart from "../pages/Shopping/ShoppingCart";
import Checkout from "../pages/Checkout/Checkout";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Guard from "./../pages/Guard";
import GuardCheckoout from "./../pages/GuardCheckout";
import NavbarBottom from "../components/Navbar/NavbarBottom";
import { Cart } from "../service/Cart";

const _cart = new Cart();

export default function AppRouter() {
  function GuardWrapper() {
    let { token } = useParams();
    console.log(token);
    localStorage.setItem("tokenUser", token);
    return <Guard token={token} />;
  }

  const CartGuard = () => {
    if (!_cart.getSize()) {
      window.location.href = "/Store";
      return <></>;
    }
    return <Checkout />;
  };
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/validation-token/:token" element={<GuardWrapper />} />
        <Route path="/Store" element={<Store />} />
        <Route
          // path="/pages/ProductDetail/ProductDetail/:id"
          path="/ProductDetail/:idProduct"
          element={<ProductDetail />}
        />
        <Route path="/" element={<Home />} />

        {/* <Route path='*' element = {<h1>Not found</h1>} /> */}
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route
          path="/ResetPasswordConfirmation/:token"
          element={<ResetPasswordConfirmation />}
        />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
        <Route path="/Checkout" element={<CartGuard />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/User" element={<Users />} />
        <Route path="/UserResetPassword" element={<ResetPasswordUser />} />
        <Route path="/buy-detail/:idSale" element={<BuyDetail />} />
        {/* <Route path="/PurchaseHistory" element={<PurchaseHistory />} /> */}
      </Routes>
      <NavbarBottom />
    </BrowserRouter>
  );
}

/* <Route path='*' element = {<h1>Not found</h1>} /> */
