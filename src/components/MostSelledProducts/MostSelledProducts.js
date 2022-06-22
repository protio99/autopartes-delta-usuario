import React, { useState } from "react";
import Product from "../StoreComponents/Product";
import data from "../../productDataMostSelled";
import "./mostSelledProducts.css";

export default function MostSelledProducts() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  let products = data.map((item) => {
    return (
      <Product key={item.id} item={item} setIsSidebarOpen={setIsSidebarOpen} />
    );
  });
  return (
    <>
      <div className="dc-most-selled">
        <h3 className="dc-most-selled__title">
          Top 3 de productos mas vendidos
        </h3>
        <p className="dc-most-selled__p">
          Te presentamos los productos mas vendidos en nuestra pagina{" "}
        </p>
        <div className="products dc-products__most-selled">{products}</div>
      </div>
    </>
  );
}
