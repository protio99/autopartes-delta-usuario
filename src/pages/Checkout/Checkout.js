import React, { useState, useRef } from "react";
import CheckoutContactForm from "../../components/Checkout/CheckoutContactForm";
import CheckoutProductsResume from "../../components/Checkout/CheckoutProductsResume";
import CheckoutShippingForm from "../../components/Checkout/CheckoutShippingForm";
import CheckoutShippingType from "../../components/Checkout/CheckoutShippingType";
import CheckoutConfirmation from "../../components/Checkout/CheckoutConfirmation";
import CheckoutConfirmationError from "../../components/Checkout/CheckoutConfirmationError";
import CheckoutPayment from "../../components/Checkout/CheckoutPayment";
import { BreadCrumb } from "primereact/breadcrumb";
import { ScrollPanel } from "primereact/scrollpanel";
import { Steps } from "primereact/steps";
import { Toast } from "primereact/toast";
import "./checkout.css";
import config from "../../config/config";

export default function Checkout() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [editForms, setEditForms] = useState(false);
  const [disabledPayment, setDisabledPayment] = useState(true);
  const [disabledConfirmation, setDisabledConfirmation] = useState(true);
  const [confirmation, setConfirmation] = useState(true);
  const [contactFormFilled, setContactFormFilled] = useState(true);
  const toast = useRef(null);

  const items = [
    {
      label: "Información",
      command: (event) => {
        toast.current.show({
          severity: "info",
          summary: "Información",
          detail: "Diligencia tu información personal y de envío",
        });
      },
    },
    // {
    //   label: "Envío",
    //   command: (event) => {
    //     toast.current.show({
    //       severity: "info",
    //       summary: "Envío",
    //       detail:
    //         "Revisa por ultima vez tu información y verifica el tipo de envío",
    //     });
    //   },
    //   // disabled: true,
    // },
    {
      label: "Envío y pago",
      command: (event) => {
        toast.current.show({
          severity: "info",
          summary: "Pago",
          detail: "Hora de realizar el pago por medio de xx",
        });
      },
      disabled: disabledPayment,
    },
    {
      label: "Confirmación",
      command: (event) => {
        toast.current.show({
          severity: "info",
          summary: "Confirmación",
          detail: "Confirmación de tu compra",
        });
      },
      disabled: disabledConfirmation,
    },
  ];

  const items_breadcrumb = [
    { label: "Carrito de compras", url: `${config.userURL}/ShoppingCart` },
    { label: "Checkout" },
  ];

  const home = {
    icon: "pi pi-home",
    url: `${config.userURL}/Home`,
  };
  return (
    <>
      <Toast ref={toast}></Toast>
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
          <ScrollPanel
            style={{ width: "48vw", height: "60vh" }}
            className="custom"
          >
            <div className="dc-checkout__views__content">
              {activeIndex === 0 && (
                <>
                  <CheckoutContactForm
                    setContactFormFilled={setContactFormFilled}
                    editForm={setEditForms}
                  />
                  <CheckoutShippingForm
                    setActiveIndex={setActiveIndex}
                    enabledForm={contactFormFilled}
                    editForm={setEditForms}
                    setEditForms={setEditForms}
                    setDisabledPayment={setDisabledPayment}
                  />
                </>
              )}
              {/* {activeIndex === 1 && (
                <>
                  <CheckoutShippingType
                    setActiveIndex={setActiveIndex}
                    setEditForms={setEditForms}
                  />
                </>
              )} */}
              {activeIndex === 1 && (
                <>
                  <CheckoutPayment
                    setActiveIndex={setActiveIndex}
                    setEditForms={setEditForms}
                    setDisabledConfirmation={setDisabledConfirmation}
                    setConfirmation={setConfirmation}
                  />
                </>
              )}
              {activeIndex === 2 &&
                (confirmation ? (
                  <>
                    <CheckoutConfirmation />
                  </>
                ) : (
                  <>
                    <CheckoutConfirmationError />
                  </>
                ))}
            </div>
          </ScrollPanel>
        </div>
        <CheckoutProductsResume setActiveIndex={setActiveIndex} />
      </div>
    </>
  );
}
