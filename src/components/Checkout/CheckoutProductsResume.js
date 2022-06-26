import React from "react";
import CheckoutCostSummary from "./CheckoutCostSummary";
import CheckoutProducts from "./CheckoutProducts";
import data from "../../data/productCart";
import "./checkoutProductsResume.css";
import { ScrollPanel } from "primereact/scrollpanel";
// import { Link } from "react-router-dom";

export default function CheckoutProductsResume() {
  let product_resume = data.map((item) => {
    return <CheckoutProducts key={item.id} item={item} />;
  });
  return (
    <>
      <div className="dc-checkout-products-resume">
        <div>
          <h4 className="dc-checkout-products-resume__title">
            Resumen de la compra
          </h4>
          <ScrollPanel
            style={{ width: "100%", height: "70vh" }}
            className="custombar2"
          >
            <div className="dc-checkout-products-resume__products">
              {product_resume}
            </div>
          </ScrollPanel>
        </div>
        <CheckoutCostSummary />
      </div>
    </>
  );
}
