import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { SalesService } from "../../service/salesService";
import { useParams } from "react-router-dom";
import config from "../../config/config";

const _salesService = new SalesService();
export default function BuyDetail() {
  const [buyDetails, setBuyDetails] = useState([]);
  let { idSale } = useParams();
  const [imagesData, setImagesData] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("tokenUser");
    _salesService
      .getPreviousSaleById(token, idSale)
      .then((response) => {
        console.log(response);
        setBuyDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const photoBodyTemplate = (rowData, info) => {
    if (!rowData.id) {
      return null;
    }
    const images = rowData.products.images_products;
    if (!images.length) {
      return null;
    }
    const url = images[0].url;
    let classBool;
    if (!url) {
      classBool = false;
    } else {
      classBool = true;
    }

    return (
      <img
        src={`${config.baseURL}${url}`}
        onError={(e) =>
          (e.target.src = `${config.baseURL}/public/images/no-pictures.png`)
        }
        alt={rowData.id}
        className={
          !classBool ? "product-image" : "info-image info-image-not-photo"
        }
      />
    );
  };

  console.log(buyDetails);
  return (
    <div>
      <h4 className="text-center">Detalle de productos de la compra</h4>

      <div className="p-inputgroup ">
        <InputText placeholder="Buscar producto" />
        <Button icon="pi pi-search" className="p-button-primary" />
      </div>

      <DataTable
        value={buyDetails}
        paginator
        responsiveLayout="scroll"
        dataKey="id"
        emptyMessage="No se encontraron datos"
        className="table-product"
        rows={10}
      >
        <Column
          field="products.id"
          sortable
          header="Referencia producto"
        ></Column>
        <Column field="products.name" sortable header="Nombre"></Column>
        <Column body={photoBodyTemplate} header="Foto"></Column>
        <Column
          field="products.category.name"
          sortable
          header="Categoría"
        ></Column>
        <Column field="products.brand.name" sortable header="Marca"></Column>
        <Column field="amount" sortable header="Cantidad"></Column>
        <Column field="price" sortable header="Precio"></Column>
      </DataTable>
    </div>
  );
}
