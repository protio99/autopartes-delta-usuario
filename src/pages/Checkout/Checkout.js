import React, { useState } from "react";
import CheckoutContactForm from "../../components/Checkout/CheckoutContactForm";
import CheckoutProductsResume from "../../components/Checkout/CheckoutProductsResume";
import CheckoutShippingForm from "../../components/Checkout/CheckoutShippingForm";
import CheckoutShippingType from "../../components/Checkout/CheckoutShippingType";
import CheckoutConfirmation from "../../components/Checkout/CheckoutConfirmation";
import CheckoutPayment from "../../components/Checkout/CheckoutPayment";

import { Steps } from "primereact/steps";
import "./checkout.css";

export default function Checkout() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      label: "Informacion",
    },
    {
      label: "Envio",
    },
    {
      label: "Pago",
    },
    {
      label: "Confirmacion",
    },
  ];
  return (
    <>
      <div className="dc-checkout">
        <div className="dc-checkout__views">
          <Steps
            model={items}
            activeIndex={activeIndex}
            onSelect={(e) => {
              // view = e.index;
              // console.log(view);

              return setActiveIndex(e.index);
            }}
            readOnly={false}
          />
          <div className="dc-checkout__views__content">
            {activeIndex === 0 && (
              <>
                <CheckoutContactForm />
                <CheckoutShippingForm />
              </>
            )}
            {activeIndex === 1 && (
              <>
                <CheckoutShippingType />
              </>
            )}
            {activeIndex === 2 && (
              <>
                <CheckoutPayment />
              </>
            )}
            {activeIndex === 3 && (
              <>
                <CheckoutConfirmation />
              </>
            )}
          </div>
        </div>
        <CheckoutProductsResume />
      </div>
    </>
  );
}
