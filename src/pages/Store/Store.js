import React from "react";
import FilterProduct from "../../components/StoreComponents/FilterProduct";
import HeaderStore from "../../components/StoreComponents/HeaderStore";
import Product from "../../components/StoreComponents/Product";
import data from "../../productData";
import "./store.css";

export default function Store() {
  let product = data.map((item) => {
    return <Product key={item.id} item={item} />;
  });
  console.log(product);
  return (
    <>
      <div className="store-main">
        <HeaderStore />
        <FilterProduct />
      </div>
      <div className="products">{product}</div>
    </>
  );
}
