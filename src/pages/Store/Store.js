import React, { useState } from "react";
import FilterProduct from "../../components/StoreComponents/FilterProduct";
import HeaderStore from "../../components/StoreComponents/HeaderStore";
import Product from "../../components/StoreComponents/Product";
import { Sidebar } from "primereact/sidebar";
import data from "../../productData";
import "./store.css";

export default function Store() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
      >
        <h3>Left Sidebar</h3>
      </Sidebar>

      <div className="store-main">
        <HeaderStore />
        <FilterProduct />
      </div>
      <div className="products">{products}</div>
    </>
  );
}
