import { DataTable } from "primereact/datatable";
import React, { useState, useEffect } from "react";
import { Column } from "primereact/column";
import { imageBodyTemplate, buttonBodyTemplate } from "./columTemplates2";

export const TableUsers = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts([{ id: 1, nombre: "Llanta", img: "llanta.jpg", categoria: "Ruedas", marca: "ford", cantidad: 5, iva: 0.19, precio: 120000 }]);
    }, []);

    return (
        <DataTable value={products} paginator responsiveLayout="scroll" dataKey="id" emptyMessage="No se encontraron datos" className="table-product" rows={10}>
            <Column field="id" sortable header="Id"></Column>
            <Column field="nombre" sortable header="Nombre"></Column>
            <Column header="Imagen" sortable body={imageBodyTemplate}></Column>
            <Column field="categoria" sortable header="Categoria"></Column>
            <Column field="marca" sortable header="Marca"></Column>
            <Column field="cantidad" sortable header="Cantidad"></Column>
            <Column field="iva" sortable header="Iva"></Column>
            <Column field="precio" sortable header="Precio"></Column>
            <Column body={buttonBodyTemplate} sortable header="Acciones"></Column>
        </DataTable>
    );
};
