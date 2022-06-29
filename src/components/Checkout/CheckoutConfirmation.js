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
            Pago confirmado exitosamente
          </h4>
          <p>Recibiras mas detalles de tu compra en tu correo electronico</p>
          <Link to={"/Home"} className="card-product--link">
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
