import React from "react";
import "./headerStore.css";
import FilterProduct from "./FilterProduct";

export default function HeaderStore() {
  return (
    <div className="header-store">
      <div className="header-store-text">
        <FilterProduct />
      </div>
    </div>
  );
}
