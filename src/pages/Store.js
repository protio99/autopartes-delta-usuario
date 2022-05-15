import React from "react"
import Product from "../components/Product"
import data from '../productData'
import '../styles/App.css'



export default function Store(){
    let product = data.map( item =>{
        return (
          <Product 
            key = {item.id}
            item = {item}
    
          />
        )
      })

    return(
        <div className="products">
            {product}
        </div>
    )
}