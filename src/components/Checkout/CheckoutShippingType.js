import React from "react";
import "./checkoutShippingType.css";
import { Button } from "primereact/button";

export default function CheckoutShippingType({ setActiveIndex, setEditForms }) {
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
            <p className="dc-checkout-shipping dc-grey">Dirección</p>
            <p className="dc-checkout-shipping">
              {shippingInformation.addres}, {shippingInformation.city},{" "}
              {shippingInformation.department}, {shippingInformation.country}
            </p>
          </div>
          <i
            className="pi pi-pencil dc-checkout__pencil"
            onClick={() => {
              setActiveIndex(0);
              setEditForms(true);
            }}
            style={{ fontSize: "1rem" }}
          ></i>
        </div>
        <h3 className="dc-checkout-shipping__type__title">Método de envío</h3>
        <div className="dc-checkout-shipping__type__shipping">
          <div className="dc-checkout-shipping__type__shipping__txt">
            <i className="pi pi-car" style={{ fontSize: "1rem" }}></i>
            <p className="dc-checkout-shipping">Costo de envio</p>
          </div>
          <p className="dc-checkout-shipping dc-blue">0</p>
        </div>
        <div className="dc-checkout-shipping__button">
          <Button
            label="Continuar"
            onClick={() => {
              setActiveIndex(2);
            }}
            className="dc-checkout-shipping__button__next "
          />
        </div>
      </div>
    </>
  );
}
