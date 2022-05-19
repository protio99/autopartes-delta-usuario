import React from "react";
import { useParams } from "react-router-dom";
import GetProduct from "../services/product/GetProduct";
import "../styles/ProductDetail.css";

export default function ProductDetail() {
  let { id } = useParams();

  let product = GetProduct(id);

  return (
    <div className="product-detail">
      <img
        src={product.imgUrl}
        className="cardMainImage"
        alt={product.altImg}
      ></img>
      <div>
        <div className="product-detail-header">
          <h1>{product.name}</h1>
          <h4>${product.price}</h4>
        </div>
        <div className="product-detail-description">
          <input type="number" min="1" max="100" step="1"></input>
          <div className="product-detail-description-scroll">
            <p>
              <strong>Categoria: </strong>
              {product.category}
            </p>
            <p>
              <strong>Marca: </strong>
              {product.brand}
            </p>

            <p>
              <strong>Descripcion: </strong>
              {product.description}
            </p>
          </div>
        </div>
        <div className="button-add-cart">
          <img src="/images/icons/bxs-cart-add1-svg" alt="Agregar al carrito" />
          <h2>Agregar al carrito</h2>
        </div>
      </div>
    </div>
  );
}
