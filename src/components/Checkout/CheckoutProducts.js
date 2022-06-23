import React from "react";

import "./checkoutProducts.css";

export default function CheckoutProducts(props) {
  return (
    <>
      <div className="dc-checkout__product-resume">
        <div className="dc-checkout__product-resume__info">
          <img
            src={props.item.imgUrl}
            className="dc-checkout__product-resume__info__img"
            alt={props.item.altImg}
          ></img>
          <div className="dc-checkout__product-resume__info__text">
            <h5 className="dc-checkout__product-resume__info__text__title">
              {props.item.name}
            </h5>
            <div className="dc-checkout__product-resume__container__span">
              <span className="dc-checkout__product-resume__info__text__span">
                {props.item.brand}
              </span>
              <span className="dc-checkout__product-resume__info__text__span">
                {props.item.category}
              </span>
            </div>
          </div>
        </div>
        <div className="dc-checkout__product-resume__actions">
          <strong>${props.item.price}</strong>
        </div>
      </div>
    </>
  );
}
