import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { SalesService } from "../../service/salesService";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Link } from "react-router-dom";

const _salesService = new SalesService();
const relevantAttributes = ["id", "statusSale", "saleDate", "totalPurchase"];

export default function BuysHistory() {
  const [sales, setSales] = useState([]);
  const [salesFiltered, setSalesFiltered] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  console.log(sales);

  const buttonBodyTemplate = (rowData) => {
    console.log(rowData);
    return (
      <div className="button-column">
        <div className="row">
          <div className="col-4">
            <Button icon=" pi pi-print" className="p-button-info " />
          </div>
          <div className="col-2">
            <Link to={`/buy-detail/${rowData.id}`}>
              <Button icon=" pi pi-eye" className="p-button-info" />
            </Link>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    const token = localStorage.getItem("tokenUser");
    _salesService
      .getPreviousSales(token)
      .then((response) => {
        let data = response.data.reduce((acum, curr) => {
          if (!curr.sales) {
            return acum;
          }
          return [...acum, curr.sales];
        }, []);
        setSales(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const salesRelevantFilter = (sale) => {
      for (let i = 0; i < relevantAttributes.length; i++) {
        const key = relevantAttributes[i];
        let attribute = sale[key];
        if (typeof attribute != "string") {
          attribute = attribute.toString();
        }
        if (attribute.includes(globalFilter)) {
          return true;
        }
      }
      return false;
    };
    setSalesFiltered(sales.filter(salesRelevantFilter));
  }, [sales, globalFilter]);

  const header = (
    <div className="">
      Compras anteriores
      <InputText
        placeholder="Buscar compra"
        onInput={(e) => {
          setGlobalFilter(e.target.value);
        }}
      />
      <Button icon="pi pi-search" className="p-button-primary" />
    </div>
  );

  return (
    <div>
      <h4 className="text-center">Historial de compras</h4>

      <DataTable
        value={salesFiltered}
        header={header}
        paginator
        responsiveLayout="scroll"
        dataKey="id"
        emptyMessage="No se encontraron datos"
        className="table-product"
        rows={10}
        stripedRows
        showGridlines
      >
        <Column field="id" header="Número de orden"></Column>
        <Column field="saleDate" sortable header="Fecha"></Column>
        <Column field="totalPurchase" sortable header="Total"></Column>
        <Column field="statusSale" header="Estado"></Column>
        <Column body={buttonBodyTemplate} sortable header="Acciones"></Column>
      </DataTable>
    </div>
  );
}
