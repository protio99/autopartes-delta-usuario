import React from "react";
import { Button } from "primereact/button";
import "./checkoutConfirmation.css";
import { Link } from "react-router-dom";

export default function CheckoutConfirmationError() {
  return (
    <>
      <div className="dc-checkout__confirmation__main">
        <div className="dc-checkout__confirmation">
          <i
            className="pi pi-times dc-checkout__confirmation__i"
            style={{ fontSize: "5rem" }}
          ></i>
          <h4 className="dc-checkout__confirmation__title">
            Upss algo ha salido mal
          </h4>
          <p>Revisa el estado de pago de tu compra</p>
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
