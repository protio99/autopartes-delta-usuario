import React, { useEffect, useState } from "react";
import Product from "../../components/StoreComponents/Product";
import  SideBar  from "./../../components/Navbar/SideBar";
import "./store.css";
import Footer from "../../components/FooterComponent/Footer";
import { BreadCrumb } from "primereact/breadcrumb";
import MostSelledProducts from "../../components/MostSelledProducts/MostSelledProducts";
import { ProductService } from "./../../service/productService";
import FilterProduct from "../../components/StoreComponents/FilterProduct";

const _productService = new ProductService();


export default function Store() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [products, setProducts] = useState([])
  const [productsFilter, setProductsFilter] = useState([])
  const [nameFilter, setNameFilter] = useState("")


  const items = [{ label: "Tienda" }];
  const home = {
    icon: "pi pi-home",
    url: "https://www.primefaces.org/primereact/showcase",
  };
  useEffect(() => {
    _productService
      .getProductsStore()
      .then( (response) => {
        setProducts(response)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(()=>{
    let data = products.filter(item => {
      return item.name.includes(nameFilter)
    })
    setProductsFilter(data)
  },[nameFilter, products])

  return (
    <>
      <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>

      <div className="store-main">

      <div className="header-store">
      <div className="header-store-text">
        <FilterProduct setNameFilter={setNameFilter} />
      </div>
    </div>      </div>
      <div className="dc-store-main__body">
        <div className="dc-store-main__body__breadcrumb">
          <BreadCrumb
            model={items}
            home={home}
            className="dc-store-breadcrumb__custom"
          />
        </div>
        <div className="dc-margin products">{productsFilter.map(  (item) => {
          return (
            <Product
              key={item.id}
              item={item}
              
              setIsSidebarOpen={setIsSidebarOpen}
            />
          );
        })}</div>
      </div>
      <MostSelledProducts />
      <Footer />
    </>
  );
}
