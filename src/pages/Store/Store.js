import React from "react";
import FilterProduct from "../../components/StoreComponents/FilterProduct";
import HeaderStore from "../../components/StoreComponents/HeaderStore";
import Product from "../../components/StoreComponents/Product";
import data from "../../productData";

export default function Store() {
  let product = data.map((item) => {
    return <Product key={item.id} item={item} />;
  });
  return (
    <div>
      <HeaderStore />
      <FilterProduct />
      <div className="products">{product}</div>
    </div>
  );
}
