import React, { useEffect, useState } from "react";
import Product from "../../components/StoreComponents/Product";
import SideBar from "./../../components/Navbar/SideBar";
import "./store.css";
import Footer from "../../components/FooterComponent/Footer";
import { BreadCrumb } from "primereact/breadcrumb";
import MostSelledProducts from "../../components/MostSelledProducts/MostSelledProducts";
import { ProductService } from "./../../service/productService";
import FilterProduct from "../../components/StoreComponents/FilterProduct";
import config from "../../config/config";

const _productService = new ProductService();

export default function Store() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [filter, setFilter] = useState({
    name: "",
    brand: "",
    category: "",
    vehicle: {
      name: "",
      model: "",
    },
  });
  console.log("productos", products);
  const items = [{ label: "Tienda" }];
  const home = {
    icon: "pi pi-home",
    url: `${config.userURL}/Home`,
  };
  useEffect(() => {
    _productService
      .getProductsStore()
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const nameFilter = (product) => {
      return product.name.toUpperCase().includes(filter.name.toUpperCase());
    };
    const categoryFilter = (product) => {
      if (!filter.category) {
        return true;
      }
      return (
        product.category.name.toUpperCase() === filter.category.toUpperCase()
      );
    };
    const brandFilter = (product) => {
      if (!filter.brand) {
        return true;
      }
      return product.brand.name.toUpperCase() === filter.brand.toUpperCase();
    };
    const vehicleFilter = (product) => {
      if (!filter.vehicle.name) {
        return true;
      }
      const vehicleValidation = product.products_vehicles.some((vehicle) => {
        console.log("vehicle", vehicle);
        return (
          vehicle.vehicles.name.toUpperCase() ===
            filter.vehicle.name.toUpperCase() &&
          vehicle.vehicles.model.toUpperCase() ===
            filter.vehicle.model.toUpperCase()
        );
      });
      return vehicleValidation;
    };
    let data = products
      .filter(nameFilter)
      .filter(brandFilter)
      .filter(vehicleFilter)
      .filter(categoryFilter);
    setProductsFiltered(data);
  }, [filter, products]);

  return (
    <>
      <SideBar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div className="store-main">
        <div className="header-store">
          <div className="header-store-text">
            <FilterProduct setFilter={setFilter} />
          </div>
        </div>{" "}
      </div>
      <div className="dc-store-main__body">
        <div className="dc-store-main__body__breadcrumb">
          <BreadCrumb
            model={items}
            home={home}
            className="dc-store-breadcrumb__custom"
          />
        </div>
        <div className="dc-margin products">
          {productsFiltered.map((item) => {
            return (
              <Product
                key={item.id}
                item={item}
                setIsSidebarOpen={setIsSidebarOpen}
              />
            );
          })}
        </div>
      </div>
      <MostSelledProducts />
      <Footer />
    </>
  );
}
