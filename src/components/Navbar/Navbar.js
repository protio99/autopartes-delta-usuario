import React, { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Badge } from "primereact/badge";
import "./Navbar.css";
import { TieredMenu } from "primereact/tieredmenu";
import config from "./../../config/config";
import SideBar from "./SideBar";

import { Cart } from "../../service/Cart";

const baseLoginURL = config.userURL + "/login";

const _cart = new Cart();
export default function Navbar(props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [badge, setBadge] = useState(0);
  const menu = useRef(null);
  var verifySesion = localStorage.getItem("tokenUser");
  useEffect(() => {
    setBadge(_cart.getSize());
  }, []);

  const onClickCart = () => {
    setIsSidebarOpen(true);
  };

  const logOut = () => {
    localStorage.clear();
    window.location.replace(baseLoginURL);
  };
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
      label: "Cerrar sesión",
      icon: "pi pi-fw pi-power-off",
      command: logOut,
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
          <NavLink
            to="/login"
            className={
              verifySesion === null
                ? "navbarInfo-top-login-button__active"
                : "navbarInfo-top-login-button__inactive"
            }
          >
            <p>Iniciar sesión</p>
          </NavLink>
          <NavLink to="/" className={NavLinkisActive}>
            <p>Inicio</p>
          </NavLink>
          <NavLink to="/Store" className={NavLinkisActive}>
            <p>Tienda</p>
          </NavLink>
          <TieredMenu model={items} popup ref={menu} id="overlay_tmenu" />

          <i
            className={
              verifySesion !== null
                ? "pi pi-user navbar-icon activeLink--display"
                : "navbarInfo-top-user-icon__inactive"
            }
            style={{ fontSize: "1.3rem" }}
            onClick={(event) => menu.current.toggle(event)}
            aria-haspopup
            aria-controls="overlay_tmenu"
          ></i>

          {/* <NavLink
            to="/ShoppingCart"
            className={({ isActive }) =>
              isActive
                ? "activeLink activeLink--display activeLink--display-shoppingCart"
                : "inactiveLink activeLink--display activeLink--display-shoppingCart"
            }
          > */}
          <i
            className="pi pi-shopping-cart  p-overlay-badge navbar-icon"
            style={{ fontSize: "1.3rem" }}
            onClick={onClickCart}
          >
            {badge > 0 ? (
              <Badge value={badge} className="badge-size"></Badge>
            ) : null}
          </i>
          {/* </NavLink> */}
          <SideBar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </div>
      </nav>
    </>
  );
}
