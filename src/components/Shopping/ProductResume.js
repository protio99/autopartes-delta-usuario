import React, { useState } from "react";
import { InputNumber } from "primereact/inputnumber";
import "./productResume.css";

export default function ProductResume(props) {
  const [value18, setValue18] = useState(1);
  return (
    <>
      <div className="dc-product-resume">
        <div className="dc-product-resume__info">
          <img
            src={props.item.imgUrl}
            className="dc-product-resume__info__img"
            alt={props.item.altImg}
          ></img>
          <div className="dc-product-resume__info__text">
            <h5 className="dc-product-resume__info__text__title">
              {props.item.name}
            </h5>
            <div className="dc-product-resume__container__span">
              <span className="dc-product-resume__info__text__span">
                {props.item.brand}
              </span>
              <span className="dc-product-resume__info__text__span">
                {props.item.category}
              </span>
            </div>
          </div>
        </div>
        <div className="dc-product-resume__actions">
          <div className="dc-product-resume__input">
            <InputNumber
              inputId="horizontal"
              value={value18}
              onValueChange={(e) => setValue18(e.value)}
              showButtons
              buttonLayout="horizontal"
              decrementButtonClassName="sidebar-car__products__info__input__button"
              incrementButtonClassName="sidebar-car__products__info__input__button"
              incrementButtonIcon=" sidebar-car__products__info__input__icon pi pi-plus"
              decrementButtonIcon="sidebar-car__products__info__input__icon pi pi-minus"
              className="sidebar-car__products__info__input"
              step={1}
              min={1}
              max={50}
              allowEmpty={false}
              required={true}
              size={1}
            />
          </div>
          <div>
            <strong>${props.item.price}</strong>
          </div>
          <i
            className="pi pi-trash dc-product-resume__actions__icon"
            style={{ fontSize: "1.3rem" }}
          ></i>
        </div>
      </div>
    </>
  );
}
