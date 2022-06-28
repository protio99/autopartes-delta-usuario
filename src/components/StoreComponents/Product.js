import React from "react";
import { Link } from "react-router-dom";
import "./product.css";

export default function Product(props) {
  return (
    <div className="card-product">
      <Link
        // to={`../pages/ProductDetail/ProductDetail/${props.item.id}`}
        // className="card-product--link"
        to={"/ProductDetail"}
        className="card-product--link"
      >
        <div className="card-product__img">
          <img
            src={props.item.imgUrl}
            className="card-product__img--size"
            alt={props.item.altImg}
          ></img>
        </div>
      </Link>
      <div className="card-product__info">
        <div className="card-product__details">
          <div className="card-product__details__labels">
            <span className="card-product__details__labels__item">
              {props.item.brand}
            </span>
            <span className="card-product__details__labels__item">
              {props.item.category}
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
              props.setIsSidebarOpen(true);
            }}
          ></i>
        </div>
      </div>
    </div>
  );
}
