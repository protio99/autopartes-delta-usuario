import { DataTable } from "primereact/datatable";
import React, { useState, useEffect } from "react";
import { Column } from "primereact/column";
import { SalesService } from "../../service/salesService";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
// import { buttonBodyTemplate } from "./columnTemplates";

const _salesService = new SalesService();
export const TableHistory = ({ sales }) => {
  const [globalFilter, setGlobalFilter] = useState(null);
  return (
    <>
      <div className="p-inputgroup create-brand__table">
        <InputText
          placeholder="Buscar compra"
          onInput={(e) => setGlobalFilter(e.target.value)}
        />
        <Button icon="pi pi-search" className="p-button-primary" />
      </div>
      <DataTable
        value={sales}
        header="Compras anteriores"
        paginator
        responsiveLayout="scroll"
        dataKey="id"
        emptyMessage="No se encontraron datos"
        className="table-product"
        rows={10}
        globalFilter={globalFilter}
      >
        <Column field="sales.id" header="Número de orden"></Column>
        <Column field="sales.saleDate" sortable header="Fecha"></Column>
        <Column field="sales.totalPurchase" sortable header="Total"></Column>
        <Column field="sales.statusSale" header="Estado"></Column>

        {/* <Column body={buttonBodyTemplate} sortable header="Acciones"></Column> */}
      </DataTable>
    </>
  );
};
