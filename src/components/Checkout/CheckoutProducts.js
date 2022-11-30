import React from "react";
import config from "../../config/config";
import "./checkoutProducts.css";

export default function CheckoutProducts(props) {
  const amount = props.productBuy.amount;
  const unitPrice = props.productData.price;
  return (
    <>
      <div className="dc-checkout__product-resume">
        <div className="dc-checkout__product-resume__info">
          {props.productData.images_products?.length > 0 ? (
            <img
              src={`${config.baseURL}${props.productData.images_products[0].url}`}
              className="dc-checkout__product-resume__info__img"
              alt={props.productData.name}
            ></img>
          ) : (
            <img
              src={`${config.baseURL}/public/images/no-pictures.png`}
              className="dc-checkout__product-resume__info__img"
              alt={props.productData.name}
            ></img>
          )}
          <div className="dc-checkout__product-resume__info__text">
            <h5 className="dc-checkout__product-resume__info__text__title">
              {props.productData.name}
            </h5>
            <div className="dc-checkout__product-resume__container__span">
              <span className="dc-checkout__product-resume__info__text__span">
                {props.productData.brand.name}
              </span>
              <span className="dc-checkout__product-resume__info__text__span">
                {props.productData.category.name}
              </span>
            </div>
          </div>
        </div>
        <div className="dc-checkout__product-resume__actions">
          <strong>
            {amount} x ${unitPrice}
          </strong>
        </div>
      </div>
    </>
  );
}
