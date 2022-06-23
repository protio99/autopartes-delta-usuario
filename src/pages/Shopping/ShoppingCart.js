import React from "react";
import OrderSummary from "../../components/Shopping/OrderSummary";
import ProductResume from "../../components/Shopping/ProductResume";
import data from "../../data/productCart";
import Footer from "../../components/FooterComponent/Footer";
import "./shoppingCart.css";
import { Button } from "primereact/button";
import { ScrollPanel } from "primereact/scrollpanel";
import { Link } from "react-router-dom";

export default function ShoppingCart() {
  let product_resume = data.map((item) => {
    return <ProductResume key={item.id} item={item} />;
  });
  return (
    <>
      <div className="dc-shopping-cart">
        <div>
          <div className="dc-shopping-cart__header">
            <div className="dc-shopping-cart__back">
              <Link to={"/pages/Store/Store"} className="card-product--link">
                <Button
                  icon="pi pi-arrow-left"
                  className="p-button-rounded p-button-info p-button-text"
                  aria-label="Volver"
                />
              </Link>
              <p className="dc-shopping-cart__back__text">Segir comprando</p>
            </div>
            <div className="dc-shoppin-cart__header__info">
              <h5 className="dc-shoppin-cart__header__info__title">
                Carrito de compras
              </h5>
              <p className="dc-shoppin-cart__header__info__p">
                Estos son los productos que tienes en el carrito de compras
              </p>
            </div>
          </div>
          <div className="scrollpanel-demo">
            <ScrollPanel
              style={{ width: "100%", height: "55vh" }}
              className="custombar1"
            >
              <div className="dc-shopping-cart__products">{product_resume}</div>
            </ScrollPanel>
          </div>
        </div>
        <OrderSummary />
      </div>
      <Footer />
    </>
  );
}
