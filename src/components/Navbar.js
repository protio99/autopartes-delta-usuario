import React from "react";
import { NavLink } from "react-router-dom";
import { Badge } from "primereact/badge";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbarCustom">
      <img src="/images/icons/logoPagina.svg" alt="Logo empresarial"></img>
      <div className="navbarInfo">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "activeLink" : "inactiveLink"
          }
        >
          <p>Inicio</p>
        </NavLink>
        <NavLink
          to="../pages/Store/Store"
          className={({ isActive }) =>
            isActive ? "activeLink" : "inactiveLink"
          }
        >
          <p>Tienda</p>
        </NavLink>
        <NavLink
          to="../pages/User"
          className={({ isActive }) =>
            isActive ? "activeLink" : "inactiveLink"
          }
        >
          <i
            className="pi pi-user navbar-icon"
            style={{ fontSize: "1.3rem" }}
          ></i>
        </NavLink>

        <NavLink to="../pages/ShoppingCar">
          <i
            className="pi pi-shopping-cart  p-overlay-badge navbar-icon"
            style={{ fontSize: "1.3rem" }}
          >
            <Badge value="2" className="badge-size"></Badge>
          </i>
        </NavLink>
      </div>
    </nav>
  );
}
