import React, { useEffect, useState } from "react";
import { InputNumber } from "primereact/inputnumber";
import "./productResume.css";
import config from "../../config/config";
import { Cart } from "../../service/Cart";

const _cart = new Cart();

export default function ProductResume(props) {
  const [amount, setAmount] = useState(props.productBuy.amount);
  const [total, setTotal] = useState(0);

  const deleteProduct = () => {
    _cart.deleteProduct(props.productBuy.id);
    props.onDestroy();
  };
  useEffect(() => {
    let total = amount * props.productData.price;
    setTotal(total);
    props.setReload(total);
    _cart.setProductToCartByID(
      props.productBuy.id,
      amount,
      props.productBuy.price
    );
  }, [amount]);
  return (
    <>
      <div className="dc-product-resume">
        <div className="dc-product-resume__info">
          {props.productData.images_products?.length > 0 ? (
            <img
              src={`${config.baseURL}${props.productData.images_products[0].url}`}
              className="sidebar-car__products__img__src"
              alt={props.productData.name}
            ></img>
          ) : (
            <img
              src={`${config.baseURL}/public/images/no-pictures.png`}
              className="sidebar-car__products__img__src"
              alt={props.productData.name}
            ></img>
          )}
          <div className="dc-product-resume__info__text">
            <h5 className="dc-product-resume__info__text__title">
              {props.productData.name}
            </h5>
            <div className="dc-product-resume__container__span">
              <span className="dc-product-resume__info__text__span">
                {props.productData.brand.name}
              </span>
              <span className="dc-product-resume__info__text__span">
                {props.productData.category.name}
              </span>
            </div>
          </div>
        </div>
        <div className="dc-product-resume__actions">
          <div className="dc-product-resume__input">
            <InputNumber
              inputId="horizontal"
              value={amount}
              onValueChange={(e) => setAmount(e.value)}
              showButtons
              buttonLayout="horizontal"
              decrementButtonClassName="sidebar-car__products__info__input__button"
              incrementButtonClassName="sidebar-car__products__info__input__button"
              incrementButtonIcon=" sidebar-car__products__info__input__icon pi pi-plus"
              decrementButtonIcon="sidebar-car__products__info__input__icon pi pi-minus"
              className="sidebar-car__products__info__input"
              step={1}
              min={1}
              max={props.productData.amount}
              allowEmpty={false}
              required={true}
              size={1}
            />
          </div>
          <div>
            <strong>${total}</strong>
          </div>
          <i
            className="pi pi-trash dc-product-resume__actions__icon"
            style={{ fontSize: "1.3rem" }}
            onClick={deleteProduct}
          ></i>
        </div>
      </div>
    </>
  );
}
