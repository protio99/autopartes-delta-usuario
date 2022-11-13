import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Badge } from "primereact/badge";
import "./Navbar.css";
import { TieredMenu } from "primereact/tieredmenu";
import config from "./../../config/config";

const baseLoginURL = config.userURL + "/login";

export default function Navbar(props) {
  const menu = useRef(null);
  var verifySesion = localStorage.getItem('tokenUser');
  const logOut = () => {
    localStorage.clear();
    window.location.replace(baseLoginURL)
    
}
  const items = [
    {
      label: "Mi perfil",
      icon: "pi pi-fw pi-user",
      url: "/user",
    },
    {
      separator: true,
    },
    {
      label: "Mi Compras",
      icon: "pi pi-shopping-bag",
      url: "/PurchaseHistory",
    },
    {
      separator: true,
    },
    {
      label: "Cerrar sesion",
      icon: "pi pi-fw pi-power-off",
      command: logOut
    },
  ];

  function NavLinkisActive({ isActive }) {
    if (isActive) {
      return "activeLink activeLink--display";
    } else {
      return "inactiveLink activeLink--display";
    }
  }

  return (
    <>
      <nav className="navbarCustom">
        <img
          src="/images/icons/logoMCpartesSmall.svg"
          alt="Logo empresarial"
          className="navbarCustom-img"
        ></img>
        <div className="navbarInfo-top">
        <NavLink to="/login" className={verifySesion === null ? "navbarInfo-top-login-button__active" : "navbarInfo-top-login-button__inactive"}>
            <p >Iniciar sesión</p>
          </NavLink>
          <NavLink to="/" className={NavLinkisActive}>
            <p>Inicio</p>
          </NavLink>
          <NavLink to="/Store" className={NavLinkisActive}>
            <p>Tienda</p>
          </NavLink>
          <TieredMenu model={items} popup ref={menu} id="overlay_tmenu" />

          <i
            className={verifySesion !== null ? "pi pi-user navbar-icon activeLink--display": "navbarInfo-top-user-icon__inactive" }
            style={{ fontSize: "1.3rem" }}
            onClick={(event) => menu.current.toggle(event)}
            aria-haspopup
            aria-controls="overlay_tmenu"
          ></i>

          <NavLink
            to="/ShoppingCart"
            className={({ isActive }) =>
              isActive
                ? "activeLink activeLink--display activeLink--display-shoppingCart"
                : "inactiveLink activeLink--display activeLink--display-shoppingCart"
            }
          >
            <i
              className="pi pi-shopping-cart  p-overlay-badge navbar-icon"
              style={{ fontSize: "1.3rem" }}
              onClick={() => {
                props.setIsSidebarOpen(true);
              }}
            >
              <Badge value="2" className="badge-size"></Badge>
            </i>
          </NavLink>
        </div>
      </nav>
    </>
  );
}
