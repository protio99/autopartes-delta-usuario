import React, { useState } from "react";
import CheckoutContactForm from "../../components/Checkout/CheckoutContactForm";
import CheckoutProductsResume from "../../components/Checkout/CheckoutProductsResume";
import CheckoutShippingForm from "../../components/Checkout/CheckoutShippingForm";
import CheckoutShippingType from "../../components/Checkout/CheckoutShippingType";
import CheckoutConfirmation from "../../components/Checkout/CheckoutConfirmation";
import CheckoutPayment from "../../components/Checkout/CheckoutPayment";
import { BreadCrumb } from "primereact/breadcrumb";

import { Steps } from "primereact/steps";
import "./checkout.css";

export default function Checkout() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [contactFormFilled, setContactFormFilled] = useState(false);

  const items = [
    {
      label: "Información",
    },
    {
      label: "Envio",
    },
    {
      label: "Pago",
    },
    {
      label: "Confirmación",
    },
  ];

  const items_breadcrumb = [
    { label: "Carrito de compras" },
    { label: "Checkout" },
  ];

  const home = {
    icon: "pi pi-home",
    url: "https://www.primefaces.org/primereact/showcase",
  };
  return (
    <>
      <div className="dc-checkout">
        <div className="dc-checkout__views">
          <div className="dc-checkout__views__bc">
            <BreadCrumb
              model={items_breadcrumb}
              home={home}
              className="dc-checkout__views__bc__custom"
            />
          </div>
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
                <CheckoutContactForm
                  setContactFormFilled={setContactFormFilled}
                />
                <CheckoutShippingForm
                  setActiveIndex={setActiveIndex}
                  enabled={contactFormFilled}
                />
              </>
            )}
            {activeIndex === 1 && (
              <>
                <CheckoutShippingType setActiveIndex={setActiveIndex} />
              </>
            )}
            {activeIndex === 2 && (
              <>
                <CheckoutPayment setActiveIndex={setActiveIndex} />
              </>
            )}
            {activeIndex === 3 && (
              <>
                <CheckoutConfirmation setActiveIndex={setActiveIndex} />
              </>
            )}
          </div>
        </div>
        <CheckoutProductsResume setActiveIndex={setActiveIndex} />
      </div>
    </>
  );
}
