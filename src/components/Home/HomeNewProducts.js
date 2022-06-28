import React from "react";
import { Button } from "primereact/button";
import "./homeNewProduct.css";

export default function HomeNewProducts() {
  return (
    <>
      <div className="dc-home-new-product">
        <div className="dc-home-new-product__banner">
          <h4 className="dc-home-new-product__banner__title">
            Productos agregados recientemente
          </h4>
          <Button
            label="Ver productos"
            className="p-button-raised dc-home-new-product__banner__btn"
          />
        </div>
        <div className="dc-home-new-product__contact">
          <h5 className="dc-home-new-product__contact__title">
            Comunicate con nosotros
          </h5>
          <p className="dc-home-new-product__contact__p">
            Nos interesa saber lo que piensas, escribenos y te responderemos en
            el menor tiempo posible
          </p>
        </div>
      </div>
    </>
  );
}
