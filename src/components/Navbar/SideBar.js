import React, { useEffect, useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import { Cart } from "../../service/Cart";
import SmallProductInfo from "../StoreComponents/SmallProductInfo";
import { ProductService } from "../../service/productService";

const _cart = new Cart();
const _productService = new ProductService();

export default function SideBar({ isSidebarOpen, setIsSidebarOpen }) {
  const [cartData, setCartData] = useState({});
  const [productsSmall, setProductsSmall] = useState([]);
  const [products, setProducts] = useState([]);
  const [subTotal, setSubTotal] = useState(_cart.getSubtotal());
  const onDestroy = () => {
    setCartData(_cart.getState());
  };

  useEffect(() => {
    if (isSidebarOpen) {
      setCartData(_cart.getState());
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
    }
  }, [isSidebarOpen]);

  useEffect(() => {
    if (products.length) {
      let keys = Object.keys(cartData);
      const productsSmall = keys.map((idProduct) => {
        const result = products.find((product) => product.id === idProduct);
        return (
          <SmallProductInfo
            key={idProduct}
            productData={result}
            productBuy={cartData[idProduct]}
            onDestroy={onDestroy}
            onSetAmount={() => {
              setSubTotal(_cart.getSubtotal());
            }}
          />
        );
      });
      setProductsSmall(productsSmall);
      setSubTotal(_cart.getSubtotal());
    }
  }, [cartData, products]);

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
          <div>{productsSmall}</div>
          <div className="sidebar-car__footer">
            <div className="sidebar-car__footer__subtotal">
              <h4 className="sidebar-car__footer__subtotal__title">
                Subtotal:
              </h4>
              <h4 className="sidebar-car__footer__subtotal__amount">
                $ {subTotal}
              </h4>
            </div>
            <div className="sidebar-car__footer__buttons">
              <Link to={"/ShoppingCart"} className="dc-link">
                <Button
                  label="Ver carrito"
                  icon="pi pi-shopping-cart"
                  className="sidebar-car__buttons"
                />
              </Link>
              <Link to={"/Checkout"} className="dc-link">
                <Button
                  label="Ir a pagar"
                  icon="pi pi-credit-card"
                  className="sidebar-car__buttons"
                />
              </Link>
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
}
