import React, { useEffect, useState } from "react";
import { InputNumber } from "primereact/inputnumber";
import { ProductService } from "./../../service/productService";
import config from "./../../config/config";
import { Cart } from "../../service/Cart";

const _cart = new Cart()

// const _productService = new ProductService();

export default function SmallProductInfo(props) {
  const [amount, setAmount] = useState(props.productBuy.amount);
  const [amount2, setAmount2] = useState(props.productBuy.amount);
  const [deletedProduct, setDeletedProduct] = useState(false)

  useEffect(()=>{
    setAmount2(amount)
  },[amount])


  const deleteProduct = () =>{
    _cart.deleteProduct(props.productBuy.id)
    setDeletedProduct(true)
  }

  useEffect(()=>{
    _cart.setProductToCartByID(props.productData.id, amount, props.productData.price)
  },[amount])


//productData informacion general del producto
//productBuy datos especificos de la compra del producto

  return (
    <div className="sidebar-car__products">
      <div className="sidebar-car__products__img">
        {props.productData.images_products?.length > 0 ? (
          <img
            src={`${config.baseURL}${props.productData.images_products[0].url}`}
            className="sidebar-car__products__img__src"
            alt={props.productData.name}
          ></img>
        ) : (
          <img
            src={`${config.baseURL}/public/images/no-pictures.png`}
            className="sidebar-car__products__img__src"
            alt={props.productData.name}
          ></img>
        )}        
      </div>

      <div className="sidebar-car__products__info">
        <div className="sidebar-car__products__info__main">
          <h5 className="sidebar-car__products__info__main__title">{props.productData.name}</h5>

          <InputNumber
            inputId="horizontal"
            value={amount}
            onValueChange={(e) => setAmount(e.value)}
            showButtons
            buttonLayout="horizontal"
            decrementButtonClassName="sidebar-car__products__info__input__button"
            incrementButtonClassName="sidebar-car__products__info__input__button"
            incrementButtonIcon=" sidebar-car__products__info__input__icon pi pi-plus"
            decrementButtonIcon="sidebar-car__products__info__input__icon pi pi-minus"
            className="sidebar-car__products__info__input"
            step={1}
            min={1}
            max={props.productData.amount}
            allowEmpty={false}
            required={true}
            size={1}
          />

          <div className="sidebar-car__products__info__main__price">
            {amount2} x{" "}
            <strong className="sidebar-car__products__info__main__price__amount">
              $ {props.productBuy.price}
            </strong>
          </div>
        </div>
        <i
          className="pi pi-times sidebar-car__products__info__icon"
          style={{ fontSize: ".6rem" }}
          onClick = {deleteProduct}
        ></i>
      </div>
    </div>
    
  );
}
