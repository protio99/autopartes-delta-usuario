import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BreadCrumb } from "primereact/breadcrumb";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
import { Panel } from "primereact/panel";
import { ScrollPanel } from "primereact/scrollpanel";
import { Ripple } from "primereact/ripple";
import Footer from "../../components/FooterComponent/Footer";
import { Carousel } from "primereact/carousel";
import Product from "../../components/StoreComponents/Product";
import "./productDetail.css";
import data from "../../data/productData";
import config from "./../../config/config";
import { Image } from 'primereact/image';
import { ProductService } from "../../service/productService";

const _productService = new ProductService()

export default function ProductDetail() {
  let { idProduct } = useParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [product, setProduct] = useState({
    category: {name:''},
    brand: {name:''},
    name: '',
    images_products:[
    {url: ''}
  ]} )

  useEffect(() =>{
    _productService.getProduct(idProduct).then((response) =>{
      console.log(response)
      setProduct(response)
    }).catch((error) =>{
      console.log("Algo salio mal al traer el producto", error)
    })
  }, [])
console.log(product)
 
  const responsiveOptionsCarousel = [
    {
      breakpoint: "1024px",
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: "600px",
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: "480px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

 

  const items = [{ label: "Tienda" }, { label: "Nombre producto" }];

  const home = {
    icon: "pi pi-home",
    url: "https://www.primefaces.org/primereact/showcase",
  };

  const [value17, setValue17] = useState(1);
  const template = (options) => {
    const toggleIcon = options.collapsed
      ? "pi pi-chevron-down"
      : "pi pi-chevron-up";
    const className = `${options.className} justify-content-start`;
    const titleClassName = `${options.titleClassName} pl-1`;

    return (
      <div className={className}>
        <button
          className={options.togglerClassName}
          onClick={options.onTogglerClick}
        >
          <span className={toggleIcon}></span>
          <Ripple />
        </button>
        <span className={titleClassName}>Mas información del producto</span>
      </div>
    );
  };

  // const productTemplates = (product) => {
  //   return(
  //     <Product/>
  //   )
  // }
  let productTemplate = (product) => (
    <Product
      key={product.id}
      item={product}
      setIsSidebarOpen={setIsSidebarOpen}
    />
  );

  return (
    <>
      <div className="product-detail">
        <div className="product-detail__gallery">
        {
          (product.images_products[0]?.length > 0) ?
          <Image src={`${config.baseURL}${product.images_products[0].url}`} alt={product.altImg} width="250" preview  className="product-detail__gallery__img"/>
         :
         <Image src={`${config.baseURL}/public/images/no-pictures.png`} alt={product.altImg} width="250" preview  className="product-detail__gallery__img"/>
      
        }
        </div>
        <ScrollPanel className="dc-product-detail__scrollpanel">
          <div className="product-detail__info">
            <div className="product-detail__info__breadcrumb">
              <BreadCrumb className="dc-breadcrump" model={items} home={home} />
            </div>
            <div className="product-detail__info__header">
              <h1 className="product-detail__info__header__title">
                {product.name}
              </h1>
              <span className="product-detail__info__header__price">
                ${product.price}
              </span>
            </div>
            <div className="product-detail__info__details">
              <p className="product-detail__info__details__p">
                <strong>Referencia del producto: </strong>
                {product.id}
              </p>
              <div className="product-detail__info__details__tags">
                <p className="product-detail__info__details__tags__p">
                  {product.category.name}
                </p>
                <p className="product-detail__info__details__tags__p">
                  {product.brand.name}
                </p>
              </div>
              <div className="product-detail__info__details__input">
                <InputNumber
                  inputId="stacked"
                  value={value17}
                  className="product-detail__info__details__input__btn"
                  onValueChange={(e) => setValue17(e.value)}
                  showButtons
                  min={1}
                  max={100}
                  size={1}
                />
                <Button
                  label="Agregar al carrito"
                  className="p-button-raised product-detail__info__details__input__btn"
                  icon="pi pi-shopping-cart"
                />
              </div>
              <div className="product-detail__description">
                <Panel headerTemplate={template} toggleable>
                  <p>
                    {product.description}
                  </p>
                </Panel>
              </div>
            </div>
          </div>
        </ScrollPanel>
      </div>
      <div className="product-detail__carousel">
        <h5 className="product-detail__carousel__title">
          Otros productos que te pueden interesar
        </h5>
        <Carousel
          value={data}
          numVisible={3}
          numScroll={1}
          responsiveOptions={responsiveOptionsCarousel}
          className="custom-carousel"
          circular
          autoplayInterval={5000}
          itemTemplate={productTemplate}
        />
      </div>
      <Footer />
    </>
  );
}
