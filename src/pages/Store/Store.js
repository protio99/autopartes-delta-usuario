import React, { useState } from "react";
import FilterProduct from "../../components/StoreComponents/FilterProduct";
import HeaderStore from "../../components/StoreComponents/HeaderStore";
import Product from "../../components/StoreComponents/Product";
import { Sidebar } from "primereact/sidebar";
import data from "../../data/productData";
import "./store.css";
import Footer from "../../components/FooterComponent/Footer";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
import MostSelledProducts from "../../components/MostSelledProducts/MostSelledProducts";
import { Link } from "react-router-dom";

export default function Store() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [value18, setValue18] = useState(1);

  let products = data.map((item) => {
    return (
      <Product key={item.id} item={item} setIsSidebarOpen={setIsSidebarOpen} />
    );
  });

  return (
    <>
      <Sidebar
        visible={isSidebarOpen}
        position="right"
        onHide={() => setIsSidebarOpen(false)}
        className="sidebar-car"
      >
        <h5>CARRITO DE COMPRAS</h5>
        <div className="sidebar-car__containt">
          <div>
            <div className="sidebar-car__products">
              <div className="sidebar-car__products__img">
                <img
                  src="/images/products/enchufe.jpg"
                  className="sidebar-car__products__img__src"
                  alt="product"
                ></img>
              </div>

              <div className="sidebar-car__products__info">
                <div className="sidebar-car__products__info__main">
                  <h5 className="sidebar-car__products__info__main__title">
                    Enchufe
                  </h5>

                  <InputNumber
                    inputId="horizontal"
                    value={value18}
                    onValueChange={(e) => setValue18(e.value)}
                    showButtons
                    buttonLayout="horizontal"
                    decrementButtonClassName="sidebar-car__products__info__input__button"
                    incrementButtonClassName="sidebar-car__products__info__input__button"
                    incrementButtonIcon=" sidebar-car__products__info__input__icon pi pi-plus"
                    decrementButtonIcon="sidebar-car__products__info__input__icon pi pi-minus"
                    className="sidebar-car__products__info__input"
                    step={1}
                    min={1}
                    max={50}
                    allowEmpty={false}
                    required={true}
                    size={1}
                  />

                  <div className="sidebar-car__products__info__main__price">
                    1 x{" "}
                    <strong className="sidebar-car__products__info__main__price__amount">
                      $ 54.000
                    </strong>
                  </div>
                </div>
                <i
                  className="pi pi-times sidebar-car__products__info__icon"
                  style={{ fontSize: ".6rem" }}
                ></i>
              </div>
            </div>
            <div className="sidebar-car__products">
              <div className="sidebar-car__products__img">
                <img
                  src="/images/products/embrague.jpg"
                  className="sidebar-car__products__img__src"
                  alt="product"
                ></img>
              </div>

              <div className="sidebar-car__products__info">
                <div className="sidebar-car__products__info__main">
                  <h5 className="sidebar-car__products__info__main__title">
                    Embrague
                  </h5>

                  <InputNumber
                    inputId="horizontal"
                    value={value18}
                    onValueChange={(e) => setValue18(e.value)}
                    showButtons
                    buttonLayout="horizontal"
                    decrementButtonClassName="sidebar-car__products__info__input__button"
                    incrementButtonClassName="sidebar-car__products__info__input__button"
                    incrementButtonIcon=" sidebar-car__products__info__input__icon pi pi-plus"
                    decrementButtonIcon="sidebar-car__products__info__input__icon pi pi-minus"
                    className="sidebar-car__products__info__input"
                    step={1}
                    min={1}
                    max={50}
                    allowEmpty={false}
                    required={true}
                    size={1}
                  />

                  <div className="sidebar-car__products__info__main__price">
                    1 x{" "}
                    <strong className="sidebar-car__products__info__main__price__amount">
                      $ 100.000
                    </strong>
                  </div>
                </div>
                <i
                  className="pi pi-times sidebar-car__products__info__icon"
                  style={{ fontSize: ".6rem" }}
                ></i>
              </div>
            </div>
          </div>
          <div className="sidebar-car__footer">
            <div className="sidebar-car__footer__subtotal">
              <h4 className="sidebar-car__footer__subtotal__title">
                Subtotal:
              </h4>
              <h4 className="sidebar-car__footer__subtotal__amount">
                $ 154.000
              </h4>
            </div>
            <div className="sidebar-car__footer__buttons">
              <Link to={"/pages/Shopping/ShoppingCart"} className="dc-link">
                <Button
                  label="Ver carrito"
                  icon="pi pi-shopping-cart"
                  className="sidebar-car__buttons"
                />
              </Link>
              <Button
                label="Ir a pagar"
                icon="pi pi-credit-card"
                className="sidebar-car__buttons"
              />
            </div>
          </div>
        </div>
      </Sidebar>

      <div className="store-main">
        <HeaderStore />
        <FilterProduct />
      </div>
      <div className="dc-margin products">{products}</div>
      <MostSelledProducts />
      <Footer />
    </>
  );
}
