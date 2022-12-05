import React, { useRef } from "react";
import { Button } from "primereact/button";
import "./orderSummary.css";
import { Link } from "react-router-dom";
import { Toast } from "primereact/toast";
import { Cart } from "../../service/Cart";

const _cart = new Cart();

export default function OrderSummary(props) {
  const toast = useRef(null);
  const showWarm = () => {
    toast.current.show({
      severity: "warn",
      summary: "Atención",
      detail:
        "Para hacer checkout, primero debes agregar al menos un producto al carrito de compras",
      life: 3000,
    });
  };
  const verifyCart = () => {
    if (!_cart.getSize()) {
      showWarm();
      return <></>;
    }
    window.location.href = "/Checkout";
  };
  return (
    <>
      <Toast ref={toast} position="top-left" />
      <div className="dc-order-summary">
        <div>
          <h4 className="dc-order--summary__title">Detalles de la compra</h4>
          <div className="dc-order-summary_container">
            <div className="dc-order-summary__info">
              <p className="dc-order-summary__info__title dc-font-size">
                Subtotal
              </p>
              <p className="dc-font-size">
                <strong>$</strong> {props.subtotal}
              </p>
            </div>
            <div className="dc-order-summary__info">
              <p className="dc-order-summary__info__title dc-font-size">
                Envío
              </p>
              <p className="dc-font-size">
                <strong>$</strong> 0
              </p>
            </div>
            <div className="dc-order-summary__info dc-font-size">
              <p className="dc-order-summary__info__title dc-font-size">
                Total
              </p>
              <p className="dc-font-size">
                <strong>$</strong> {props.subtotal}
              </p>
            </div>
          </div>
        </div>
        <div>
          <Button
            label="Ir a pagar"
            icon="pi pi-arrow-right"
            className="dc-order-summary__button"
            onClick={verifyCart}
          />
        </div>
      </div>
    </>
  );
}
