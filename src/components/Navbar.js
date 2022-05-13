import React from 'react';


export default function Navbar(){
    return(
        <div>
            <nav className = "navbar">
                <img src = "images/icons/logoPagina.svg" alt = "Logo empresarial"></img>
                <div className = "navbarInfo">
                    <p>Inicio</p>
                    <p>Tienda</p>
                    <img src = "images/icons/usuario.svg" alt = "icono de opciones de usuario"></img>
                    <img src = "images/icons/carrito.svg" alt = "icono de ver carrito de compras"></img>

                </div>
            </nav>
        </div>
    )
}