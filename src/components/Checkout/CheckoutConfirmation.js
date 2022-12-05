import React from "react";
import { Button } from "primereact/button";
import "./checkoutConfirmation.css";
import { Link } from "react-router-dom";

export default function CheckoutConfirmation() {
  return (
    <>
      <div className="dc-checkout__confirmation__main">
        <div className="dc-checkout__confirmation">
          <i
            className="pi pi-check-circle dc-checkout__confirmation__i"
            style={{ fontSize: "5rem" }}
          ></i>
          <h4 className="dc-checkout__confirmation__title">
            Pago por confirmar
          </h4>
          <p>
            Por favor termina el proceso de pago en la pasarela de Mercado Pago
          </p>
          <Link to={"/Store"} className="card-product--link">
            <Button
              label="Volver a la tienda"
              className=" dc-checkout-shipping__confirmation_btn "
            />
          </Link>
        </div>
      </div>
    </>
  );
}
