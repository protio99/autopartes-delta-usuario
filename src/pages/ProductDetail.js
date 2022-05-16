import React from 'react'


export default function ProductDetail(props){
    return(
        <div>
            <img></img>
            <div>
                <div>
                    <h1>Nombre producto</h1>
                    <h4>$100000</h4>
                </div>
                <div>
                    <input type="number" min="1" max = "100" step = "1" ></input>
                    <p>descriopcion del producto</p>
                </div>
                <input type="button" value = "Agregar al carrito"></input>
            </div>
        </div>
    )
}