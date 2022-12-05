import React from "react";
import "./checkoutPayment.css";
import { Button } from "primereact/button";
import { SalesService } from "../../service/salesService";
import { RadioButton } from "primereact/radiobutton";

const _salesService = new SalesService();

export default function CheckoutPayment({
  setActiveIndex,
  setEditForms,
  setDisabledConfirmation,
  setConfirmation,
}) {
  const personalInformation = JSON.parse(
    localStorage.getItem("contactInformation")
  );
  const shippingInformation = JSON.parse(
    localStorage.getItem("shippingInformation")
  );
  const token = localStorage.getItem("tokenUser");
  const cart = JSON.parse(localStorage.getItem("cart"));

  const createSale = (personalInformation, shippingInformation, cart) => {
    if (!token) {
      _salesService
        .createSale(personalInformation, shippingInformation, cart)
        .then((response) => {
          console.log(response.data.redirect);
          window.open(response.data.redirect, "_blank").focus();
          _salesService
            .buyConfirmation(personalInformation)
            .then((response) => {
              setConfirmation(true);
              localStorage.removeItem("contactInformation");
              localStorage.removeItem("shippingInformation");
              localStorage.removeItem("cart");
            })
            .catch((error) => {
              console.log("No se puso enviar el correo", error);
            });
          console.log("La venta se creo exitosamente", response);
        })
        .catch((error) => {
          console.log(
            "Ocurrio un error al crear la venta, soy el catch",
            error
          );
          setConfirmation(false);
        });
    } else {
      _salesService
        .createSaleWithToken(
          personalInformation,
          shippingInformation,
          cart,
          token
        )
        .then((response) => {
          console.log(response.data.redirect);
          window.open(response.data.redirect, "_blank").focus();
          _salesService
            .buyConfirmation(personalInformation)
            .then((response) => {
              setConfirmation(true);
              localStorage.removeItem("contactInformation");
              localStorage.removeItem("shippingInformation");
              localStorage.removeItem("cart");
            })
            .catch((error) => {
              console.log("No se puso enviar el correo", error);
            });
          console.log("La venta se creo exitosamente", response);
        })
        .catch((error) => {
          console.log(
            "Ocurrio un error al crear la venta, soy el catch",
            error
          );
          setConfirmation(false);
        });
    }
  };
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
              {shippingInformation.address}, {shippingInformation.city},{" "}
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
            <img
              src="images/others/mercado-pago-small.svg"
              alt="mercado pago icono"
              className="mercado-pago-small"
            />
            <p className="dc-checkout-shipping">Mercado Pago</p>
          </div>
          <label htmlFor="tarjeta_credito">
            <RadioButton name="category" checked={true} />
          </label>
        </div>
        <div className="dc-checkout-shipping__button">
          <Button
            label="Continuar"
            onClick={() => {
              setActiveIndex(2);
              setDisabledConfirmation(false);
              createSale(personalInformation, shippingInformation, cart);
            }}
            className="p-button-secondary dc-checkout-shipping__button__next "
          />
        </div>
      </div>
    </>
  );
}
