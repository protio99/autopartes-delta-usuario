import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Badge } from "primereact/badge";
import "./navbarBottom.css";
import { TieredMenu } from "primereact/tieredmenu";


export default function NavbarBottom(props) {
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
            label: "Cerrar sesión",
            icon: "pi pi-fw pi-power-off",
        },
    ];

    return (
        <>
            <nav className="navbarCustomBottom">

                <div className="navbarInfo">


                    <TieredMenu model={items} popup ref={menu} id="overlay_tmenu" />
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "activeLink" : "inactiveLink"
                        }
                    >
                        <i
                            className="pi pi-home  p-overlay-badge navbar-icon"
                            style={{ fontSize: "1.3rem" }}

                        >

                        </i>
                    </NavLink>

                    <NavLink
                        to="/Store"
                        className={({ isActive }) =>
                            isActive ? "activeLink" : "inactiveLink"
                        }
                    >
                        <i
                            className="pi pi-shopping-bag  p-overlay-badge navbar-icon"
                            style={{ fontSize: "1.3rem" }}

                        >
                        </i>
                    </NavLink>

                    <NavLink
                        to="/user"
                        className={({ isActive }) =>
                            isActive ? "activeLink" : "inactiveLink"
                        }
                    >
                        <i
                            className="pi pi-user  p-overlay-badge navbar-icon"
                            style={{ fontSize: "1.3rem" }}

                        >

                        </i>
                    </NavLink>



                </div>
            </nav>
        </>
    );
}
