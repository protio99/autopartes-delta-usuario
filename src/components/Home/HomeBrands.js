import React from "react";
import { Button } from "primereact/button";
import "./homeBrands.css";

export default function HomeBrands() {
  return (
    <>
      <div className="dc-home-brands">
        <h3 className="dc-home-brands__title">
          Los mejores precios en un solo lugar{" "}
        </h3>
        <p>Nuestras marcas</p>
        <div className="dc-home-brands__btns">
          <div className="dc-home-brands__btns__item">
            <img
              src="/images/others/logo-ford.png"
              className="dc-home-brands__btns__item__img dc-ford-logo"
              alt="logo"
            ></img>
            <Button
              label="Productos Ford"
              className="p-button-raised dc-home-brands-btn"
            />
          </div>
          <div className="dc-home-brands__btns__item">
            <img
              src="/images/others/logo-mazda.png"
              className="dc-home-brands__btns__item__img"
              alt="logo"
            ></img>
            <Button
              label="Productos Mazda"
              className="p-button-raised dc-home-brands-btn"
            />
          </div>
          <div className="dc-home-brands__btns__item">
            <img
              src="/images/others/logo-nissan.png"
              className="dc-home-brands__btns__item__img"
              alt="logo"
            ></img>
            <Button
              label="Productos Nissan"
              className="p-button-raised dc-home-brands-btn"
            />
          </div>
        </div>
      </div>
    </>
  );
}
