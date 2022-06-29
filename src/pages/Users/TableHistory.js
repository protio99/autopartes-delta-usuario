import { DataTable } from "primereact/datatable";
import React, { useState, useEffect } from "react";
import { Column } from "primereact/column";
import { buttonBodyTemplate } from "./columnTemplates";

export const TableHistory = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts([{ NroOrden: 2514, Fecha: "22/06/22", total: "250.000", Estado: "Finalizado" }]);
    }, []);

    return (
        <DataTable value={products} paginator responsiveLayout="scroll" dataKey="id" emptyMessage="No se encontraron datos" className="table-product" rows={10}>
            <Column field="NroOrden" sortable header="NroOrden"></Column>
            <Column field="Fecha" sortable header="Fecha"></Column>
            <Column field="total" sortable header="Total"></Column>
            <Column field="Estado" sortable header="Estado"></Column>

            
            <Column body={buttonBodyTemplate} sortable header="Acciones"></Column>
        </DataTable>
    );
};
