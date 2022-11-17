import React, { useEffect, useState } from "react";
import HeaderStore from "../../components/StoreComponents/HeaderStore";
import Product from "../../components/StoreComponents/Product";
import  SideBar  from "./../../components/Navbar/SideBar";
import "./store.css";
import Footer from "../../components/FooterComponent/Footer";
import { BreadCrumb } from "primereact/breadcrumb";
import MostSelledProducts from "../../components/MostSelledProducts/MostSelledProducts";
import { ProductService } from "./../../service/productService";

const _productService = new ProductService();


export default function Store() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [productsData, setProductsData] = useState([]);
  const [products, setProducts] = useState([])


  const items = [{ label: "Tienda" }];
  const home = {
    icon: "pi pi-home",
    // <Link
    //     to={"/ProductDetail"}
    //     className="card-product--link"
    //   ></Link>
    url: "https://www.primefaces.org/primereact/showcase",
  };
  useEffect(() => {
    _productService
      .getProductsStore()
      .then( (response) => {
        setProducts(response)

        let products = response.map(  (item) => {
          return (
            <Product
              key={item.id}
              item={item}
              
              setIsSidebarOpen={setIsSidebarOpen}
            />
          );
        });
        setProductsData(products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {/* <Sidebar
        visible={isSidebarOpen}
        position="right"
        onHide={() => setIsSidebarOpen(false)}
        className="sidebar-car"
      >
        <h5>CARRITO DE COMPRAS</h5>
        <div className="sidebar-car__containt">
          <div>
            {productsSmall}
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
      </Sidebar> */}
      <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>

      <div className="store-main">
        <HeaderStore />
      </div>
      <div className="dc-store-main__body">
        <div className="dc-store-main__body__breadcrumb">
          <BreadCrumb
            model={items}
            home={home}
            className="dc-store-breadcrumb__custom"
          />
        </div>
        <div className="dc-margin products">{productsData}</div>
      </div>
      <MostSelledProducts />
      <Footer />
    </>
  );
}
