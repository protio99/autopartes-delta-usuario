import React from "react";
import { Button } from "primereact/button";
import "./orderSummary.css";
import { Link } from "react-router-dom";

export default function OrderSummary() {
  return (
    <>
      <div className="dc-order-summary">
        <div>
          <h4 className="dc-order--summary__title">Detalles de la compra</h4>
          <div className="dc-order-summary_container">
            <div className="dc-order-summary__info">
              <p className="dc-order-summary__info__title dc-font-size">
                Subtotal
              </p>
              <p className="dc-font-size">
                <strong>$</strong> 200.000
              </p>
            </div>
            <div className="dc-order-summary__info">
              <p className="dc-order-summary__info__title dc-font-size">
                Envio
              </p>
              <p className="dc-font-size">
                <strong>$</strong> 10.000
              </p>
            </div>
            <div className="dc-order-summary__info dc-font-size">
              <p className="dc-order-summary__info__title dc-font-size">
                Total
              </p>
              <p className="dc-font-size">
                <strong>$</strong> 210.000
              </p>
            </div>
          </div>
        </div>
        <div>
          <Link to={"/Checkout"} className="card-product--link">
            <Button
              label="Ir a pagar"
              icon="pi pi-arrow-right"
              className="dc-order-summary__button"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
