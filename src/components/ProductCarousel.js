import React from "react";
import ProductRecomendation from "./ProductRecomendation";
import "../styles/ProductCarousel.css";
import recomendationData from "../productRecomendationData";

export default function ProductCarousel() {
  let product = recomendationData.map((item) => {
    return <ProductRecomendation key={item.id} item={item} />;
  });

  return <div className="products-carousel">{product}</div>;
}
