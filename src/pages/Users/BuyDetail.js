import React, { useEffect, useState } from "react";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { SalesService } from "../../service/salesService";
import { useParams } from "react-router-dom";
import config from "../../config/config";

import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import "./buyDetail.css";

const _salesService = new SalesService();
export default function BuyDetail() {
  const [buyDetails, setBuyDetails] = useState([]);
  let { idSale } = useParams();

  useEffect(() => {
    const token = localStorage.getItem("tokenUser");
    _salesService
      .getPreviousSaleById(token, idSale)
      .then((response) => {
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
  const exportPdf = () => {
    import("jspdf").then((jsPDF) => {
      import("jspdf-autotable").then(() => {
        const doc = new jsPDF.default(0, 50);
        let data = buyDetails.map((buyDetail) => {
          return {
            idProduct: buyDetail.idProduct,
            productName: buyDetail.products.name,
            productCategory: buyDetail.products.category.name,
            productBrand: buyDetail.products.brand.name,
            price: buyDetail.price,
            amount: buyDetail.amount,
          };
        });
        doc.autoTable(exportColumns, data);
        doc.text("Hola", 50, 0);
        doc.save(`detalle_pedido_${idSale}.pdf`);
      });
    });
  };

  const header = (
    <div className="dc-buy-history__header">
      Descargar resumen de pedido
      <Button
        type="button"
        icon="pi pi-file-pdf"
        onClick={exportPdf}
        className="p-button-warning mr-2"
        data-pr-tooltip="PDF"
        label="Descargar PDF"
      />
    </div>
  );

  const cols = [
    { field: "idProduct", header: "Referencia producto" },
    { field: "productName", header: "Nombre" },
    { field: "productCategory", header: "Categoría" },
    { field: "productBrand", header: "Marca" },
    { field: "amount", header: "Cantidad" },
    { field: "price", header: "Precio" },
  ];
  const exportColumns = cols.map((col) => ({
    title: col.header,
    dataKey: col.field,
  }));

  return (
    <div>
      <h4 className="text-center dc-buy-details__tittle">
        Detalle de productos de la compra con id {idSale}
      </h4>

      <div className="buys-detail__containter">
        <div className=" dc-buy-detail__back">
          <Link to={"/user"} className="card-product--link">
            <Button
              icon="pi pi-arrow-left"
              className="p-button-rounded p-button-info p-button-text"
              aria-label="Volver"
              label="Volver"
            />
          </Link>
        </div>
        <DataTable
          value={buyDetails}
          paginator
          header={header}
          responsiveLayout="scroll"
          dataKey="id"
          emptyMessage="No se encontraron datos"
          className="buys-detail__containter__table"
          rows={10}
        >
          <Column
            field="idProduct"
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
    </div>
  );
}
