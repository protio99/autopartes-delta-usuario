import React from "react";
import { Link } from "react-router-dom";
import "./product.css";
import config from "./../../config/config";
import {Cart} from "./../../service/Cart"


const _cart = new Cart()

export default function Product(props) {
  const addProductToCart = () =>{
    props.setIsSidebarOpen(true);
    _cart.setProductToCartByID(props.item.id, 1, props.item.price)
  }
  
  return (
    <div className="card-product">
      <Link
        // to={`../pages/ProductDetail/ProductDetail/${props.item.id}`}
        // className="card-product--link"
        to={`/ProductDetail/${props.item.id}`}
        className="card-product--link"
      >
        <div className="card-product__img">
        {
          (props.item.images_products?.length > 0) ?
          <img
          src={`${config.baseURL}${props.item.images_products[0].url}`} 
            // src={props.imgURL}
            className="card-product__img--size"
            alt={props.item.name}
          ></img> :  <img
          src={`${config.baseURL}/public/images/no-pictures.png`} 
            // src={props.imgURL}
            className="card-product__img--size"
            alt={props.item.name}
          ></img>
        }
        </div>
      </Link>
      <div className="card-product__info">
        <div className="card-product__details">
          <div className="card-product__details__labels">
          <span className="card-product__details__labels__item">
              REF: {props.item.id}
            </span>
            <span className="card-product__details__labels__item">
              {props.item.brand.name}
            </span>
            <span className="card-product__details__labels__item">
              {props.item.category.name}
            </span>
          </div>
          <Link to={"/ProductDetail"} className="card-product--link">
            <h2 className="card-product__details__title">{props.item.name}</h2>
          </Link>
          <p className="card-product__details__text">
            {props.item.description}{" "}
          </p>
        </div>

        <div className="card-product__price">
          <p className="card-product__price__amount">${props.item.price}</p>
          <i
            className="pi pi-shopping-cart card-product__price__icon"
            onClick={() => {
              addProductToCart()        
            }}
          ></i>
        </div>
      </div>
    </div>
  );
}
