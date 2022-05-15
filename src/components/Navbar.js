import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Navbar(){
    return(
        <div>
            <nav className = "navbar">
                <img src = "../images/icons/logoPagina.svg" alt = "Logo empresarial"></img>
                <div className = "navbarInfo">
                    <NavLink to = "/" ><p>Inicio</p></NavLink>
                    <NavLink to = "../pages/Store"><p>Tienda</p></NavLink>
                    <img src = "../images/icons/usuario.svg" alt = "icono de opciones de usuario"></img>
                    <img src = "../images/icons/carrito.svg" alt = "icono de ver carrito de compras"></img>

                </div>
            </nav>
        </div>
    )
}

// className={({ isActive }) => isActive ? activeClassName : undefined}