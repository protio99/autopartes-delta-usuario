import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Badge } from "primereact/badge";
import "./Navbar.css";
import { TieredMenu } from "primereact/tieredmenu";
import BurgerButton from "./BurgerButton";

export default function Navbar(props) {
  const menu = useRef(null);
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
    },
  ];

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
            to="/"
            className={({ isActive }) =>
              isActive ? "activeLink" : "inactiveLink"
            }
          >
            <p>Inicio</p>
          </NavLink>
          <NavLink
            to="/Store"
            className={({ isActive }) =>
              isActive ? "activeLink" : "inactiveLink"
            }
          >
            <p>Tienda</p>
          </NavLink>
          <TieredMenu model={items} popup ref={menu} id="overlay_tmenu" />

          <i
            className="pi pi-user navbar-icon"
            style={{ fontSize: "1.3rem" }}
            onClick={(event) => menu.current.toggle(event)}
            aria-haspopup
            aria-controls="overlay_tmenu"
          ></i>

          <NavLink
            to="/ShoppingCart"
            className={({ isActive }) =>
              isActive ? "activeLink" : "inactiveLink"
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
