import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PhotoService } from "../../services/product/PhotoService";
import { Galleria } from "primereact/galleria";
import GetProduct from "../../services/product/GetProduct";
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

export default function ProductDetail() {
  let { id } = useParams();
  let product = GetProduct(id);
  const [images, setImages] = useState([]);
  const [products, setProducts] = useState([]);
  const galleriaService = new PhotoService();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    galleriaService.getImages().then((data) => {
      setImages(data);
    });
  }, []);
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

  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 5,
    },
    {
      breakpoint: "768px",
      numVisible: 3,
    },
    {
      breakpoint: "560px",
      numVisible: 1,
    },
  ];

  const itemTemplate = (item) => {
    return (
      <img
        src={`${item.itemImageSrc}`}
        onError={(e) =>
          (e.target.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
        alt={item.alt}
        style={{ width: "100%" }}
      />
    );
  };

  const thumbnailTemplate = (item) => {
    return (
      <img
        src={`${item.thumbnailImageSrc}`}
        onError={(e) =>
          (e.target.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
        alt={item.alt}
      />
    );
  };

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
          <Galleria
            value={images}
            responsiveOptions={responsiveOptions}
            numVisible={5}
            style={{ maxWidth: "640px" }}
            item={itemTemplate}
            thumbnail={thumbnailTemplate}
            className="product-detail__gallery__style"
            // circular
            // autoPlay
            // transitionInterval={2000}
          />
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
                {product.description}
              </p>
              <div className="product-detail__info__details__tags">
                <p className="product-detail__info__details__tags__p">
                  {product.category}
                </p>
                <p className="product-detail__info__details__tags__p">
                  {product.brand}
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
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
