import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PhotoService } from "../../services/product/PhotoService";
import { Galleria } from "primereact/galleria";
import GetProduct from "../../services/product/GetProduct";
import "./productDetail.css";

export default function ProductDetail() {
  let { id } = useParams();
  let product = GetProduct(id);
  const [images, setImages] = useState(null);
  const galleriaService = new PhotoService();

  useEffect(() => {
    galleriaService.getImages().then((data) => {
      console.log(data);
      setImages(data);
    });
  }, []);

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
        src={`images/${item.itemImageSrc}`}
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
        src={`images/${item.thumbnailImageSrc}`}
        onError={(e) =>
          (e.target.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
        alt={item.alt}
      />
    );
  };

  return (
    <div className="product-detail">
      <div className="card">
        <Galleria
          value={images}
          responsiveOptions={responsiveOptions}
          numVisible={5}
          style={{ maxWidth: "640px" }}
          item={itemTemplate}
          thumbnail={thumbnailTemplate}
        />
      </div>
      {/* <div>
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
      </div> */}
    </div>
  );
}
