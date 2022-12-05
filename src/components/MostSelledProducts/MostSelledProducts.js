import React, { useState, useEffect } from "react";
import Product from "../StoreComponents/Product";
import "./mostSelledProducts.css";
import { SalesService } from "../../service/salesService";

const _salesService = new SalesService();

export default function MostSelledProducts() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [topThreeProducts, setTopThreeProducts] = useState([]);

  useEffect(() => {
    _salesService
      .getTopThree()
      .then((res) => {
        console.log(res);
        setTopThreeProducts(res.data);
      })
      .catch((error) => {
        console.log(
          "Algo salio mal al traer el top tres de productos mas vedidos",
          error
        );
      });
  }, []);

  return (
    <>
      <div className="dc-most-selled">
        <h3 className="dc-most-selled__title">
          Top 3 de los productos más vendidos
        </h3>
        <p className="dc-most-selled__p">
          Te presentamos los productos más vendidos en nuestra página{" "}
        </p>
        <div className="products dc-products__most-selled">
          {topThreeProducts?.map((item) => {
            return (
              <Product
                key={item.id}
                item={item}
                setIsSidebarOpen={setIsSidebarOpen}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
