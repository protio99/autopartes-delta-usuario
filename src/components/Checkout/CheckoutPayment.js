import React from "react";
import "./checkoutPayment.css";
import { Button } from "primereact/button";

export default function CheckoutPayment({ setActiveIndex }) {
  return (
    <>
      <div className="dc-checkout-shipping__type">
        <h3 className="dc-checkout-shipping__type__title">
          Confirmación de información
        </h3>
        <div className="dc-checkout-shipping__type__bx">
          <div className="dc-checkout-shipping__type__bx__txt">
            <p className="dc-checkout-shipping dc-grey">Contacto</p>
            <p className="dc-checkout-shipping">correo@correo.com</p>
          </div>
          <i
            className="pi pi-pencil dc-checkout__pencil"
            style={{ fontSize: "1rem" }}
          ></i>
        </div>
        <div className="dc-checkout-shipping__type__bx">
          <div className="dc-checkout-shipping__type__bx__txt">
            <p className="dc-checkout-shipping dc-grey">Direccion</p>
            <p className="dc-checkout-shipping">
              Alguna direccion, Envigado, Antioquia, Colombia
            </p>
          </div>
          <i
            className="pi pi-pencil dc-checkout__pencil"
            style={{ fontSize: "1rem" }}
          ></i>
        </div>
        <div className="dc-checkout-shipping__type__bx">
          <div className="dc-checkout-shipping__type__bx__txt">
            <p className="dc-checkout-shipping dc-grey">Costo de envio</p>
          </div>
          <p className="dc-checkout-shipping dc-blue">$ 12.000</p>
        </div>
        <h3 className="dc-checkout-shipping__type__title">
          Elige el método de pago
        </h3>
        <div className="dc-checkout-shipping__type__shipping">
          <div className="dc-checkout-shipping__type__shipping__txt">
            <i className="pi pi-paypal" style={{ fontSize: "1rem" }}></i>
            <p className="dc-checkout-shipping">Tarejeta de debito</p>
          </div>
          <label for="tarjeta_credito">
            <input
              type="radio"
              id="tarjeta_credito"
              name="tarjeta_credito"
              value="tarjeta_credito"
            />
          </label>
        </div>
        <div className="dc-checkout-shipping__type__shipping">
          <div className="dc-checkout-shipping__type__shipping__txt">
            <i className="pi pi-credit-card" style={{ fontSize: "1rem" }}></i>
            <p className="dc-checkout-shipping">Tarjeta de credito</p>
          </div>
          <label for="tarjeta_debito">
            <input
              type="radio"
              id="tarjeta_debito"
              name="tarjeta_debito"
              value="tarjeta_debito"
            />
          </label>
        </div>
        <div className="dc-checkout-shipping__button">
          <Button
            label="Continuar"
            onClick={() => {
              setActiveIndex(3);
            }}
            className="p-button-secondary dc-checkout-shipping__button__next "
          />
        </div>
      </div>
    </>
  );
}
