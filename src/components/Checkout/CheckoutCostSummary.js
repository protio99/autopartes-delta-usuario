import React from "react";
import "./checkoutCostSummary.css";
export default function CheckoutCostSummary() {
  return (
    <>
      <div className="dc-checkout__order-summary">
        <div>
          <div className="dc-checkout__order-summary_container">
            <div className="dc-checkout__order-summary__info">
              <p className="dc-checkout__order-summary__info__title dc-font-size">
                Subtotal
              </p>
              <p className="dc-font-size">
                <strong>$</strong> 200.000
              </p>
            </div>
            <div className="dc-checkout__order-summary__info">
              <p className="dc-checkout__order-summary__info__title dc-font-size">
                Envio
              </p>
              <p className="dc-checkout__font-size">
                <strong>$</strong> 10.000
              </p>
            </div>
            <div className="dc-checkout__order-summary__info dc-font-size">
              <p className="dc-checkout__order-summary__info__title dc-font-size">
                Total
              </p>
              <p className="dc-checkout__font-size">
                <strong>$</strong> 210.000
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
