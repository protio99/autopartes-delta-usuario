import React, { useEffect, useState } from "react";
import OrderSummary from "../../components/Shopping/OrderSummary";
import ProductResume from "../../components/Shopping/ProductResume";
import Footer from "../../components/FooterComponent/Footer";
import "./shoppingCart.css";
import { Button } from "primereact/button";
import { ScrollPanel } from "primereact/scrollpanel";
import { Link } from "react-router-dom";
import { Cart } from "../../service/Cart";
import { ProductService } from "../../service/productService";

const _cart = new Cart();
const _productService = new ProductService();

export default function ShoppingCart() {
  const [products, setProducts] = useState([]);
  const [productsResume, setProductsResume] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [reload, setReload] = useState(0);
  // const [subtotal, setSubtotal] = useState([])
  const onDestroy = () => {
    setCartData(_cart.getState());
  };

  useEffect(() => {
    _productService
      .getProductsStore()
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.log(
          "Error al traer los productos de la tienda desde el sideBar",
          error
        );
      });
  }, []);

  useEffect(() => {
    setCartData(_cart.getState());
  }, [reload]);

  useEffect(() => {
    let keys = Object.keys(cartData);
    let total = 0;
    if (products.length === 0) {
      return;
    }
    const productsResume = keys.map((idProduct) => {
      const result = products.find((product) => product.id === idProduct);
      total = total + cartData[idProduct].price * cartData[idProduct].amount;

      return (
        <ProductResume
          key={idProduct}
          productData={result}
          productBuy={cartData[idProduct]}
          setReload={setReload}
          onDestroy={onDestroy}
        />
      );
    });
    setProductsResume(productsResume);
    setSubtotal(total);
  }, [cartData, products]);

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
              <div className="dc-shopping-cart__products">{productsResume}</div>
            </ScrollPanel>
          </div>
        </div>
        <OrderSummary subtotal={subtotal} />
      </div>
      <Footer />
    </>
  );
}
