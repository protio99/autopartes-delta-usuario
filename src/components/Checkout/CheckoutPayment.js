import React from "react";
import "./checkoutPayment.css";
import { Button } from "primereact/button";

export default function CheckoutPayment({
  setActiveIndex,
  setEditForms,
  setDisabledConfirmation,
}) {
  const personalInformation = JSON.parse(
    localStorage.getItem("contactInformation")
  );
  const shippingInformation = JSON.parse(
    localStorage.getItem("shippingInformation")
  );
  return (
    <>
      <div className="dc-checkout-shipping__type">
        <h3 className="dc-checkout-shipping__type__title">
          Confirmación de información
        </h3>
        <div className="dc-checkout-shipping__type__bx">
          <div className="dc-checkout-shipping__type__bx__txt">
            <p className="dc-checkout-shipping dc-grey">Contacto</p>
            <p className="dc-checkout-shipping">
              {personalInformation.name} {personalInformation.lastname}{" "}
              {personalInformation.email}
            </p>
          </div>
          <i
            className="pi pi-pencil dc-checkout__pencil"
            style={{ fontSize: "1rem" }}
            onClick={() => {
              setActiveIndex(0);
              setEditForms(true);
            }}
          ></i>
        </div>
        <div className="dc-checkout-shipping__type__bx">
          <div className="dc-checkout-shipping__type__bx__txt">
            <p className="dc-checkout-shipping dc-grey">Direccion</p>
            <p className="dc-checkout-shipping">
              {shippingInformation.addres}, {shippingInformation.city},{" "}
              {shippingInformation.department}, {shippingInformation.country}
            </p>
          </div>
          <i
            className="pi pi-pencil dc-checkout__pencil"
            style={{ fontSize: "1rem" }}
            onClick={() => {
              setActiveIndex(0);
              setEditForms(true);
            }}
          ></i>
        </div>
        <div className="dc-checkout-shipping__type__bx">
          <div className="dc-checkout-shipping__type__bx__txt">
            <p className="dc-checkout-shipping dc-grey">Costo de envio</p>
          </div>
          <p className="dc-checkout-shipping dc-blue">0</p>
        </div>
        <h3 className="dc-checkout-shipping__type__title">
          Elige el método de pago
        </h3>
        <div className="dc-checkout-shipping__type__shipping">
          <div className="dc-checkout-shipping__type__shipping__txt">
            <i className="pi pi-paypal" style={{ fontSize: "1rem" }}></i>
            <p className="dc-checkout-shipping">Tarjeta débito</p>
          </div>
          <label htmlFor="tarjeta_credito">
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
            <p className="dc-checkout-shipping">Tarjeta crédito</p>
          </div>
          <label htmlFor="tarjeta_debito">
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
              setActiveIndex(2);
              setDisabledConfirmation(false);
            }}
            className="p-button-secondary dc-checkout-shipping__button__next "
          />
        </div>
      </div>
    </>
  );
}
