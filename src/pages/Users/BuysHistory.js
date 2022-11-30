import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { SalesService } from "../../service/salesService";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Link } from "react-router-dom";
import "./buysHistory.css";

const _salesService = new SalesService();
const relevantAttributes = ["id", "statusSale", "saleDate", "totalPurchase"];

export default function BuysHistory() {
  const [sales, setSales] = useState([]);
  const [salesFiltered, setSalesFiltered] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");

  const buttonBodyTemplate = (rowData) => {
    return (
      <div className="button-column">
        <div className="row">
          <div className="col-2">
            <Link to={`/buy-detail/${rowData.id}`} className="dc-link">
              <Button
                label="Ver detalle"
                icon=" pi pi-eye"
                className="p-button-info dc-view-sale-detail"
              />
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
    <div className="dc-buy-history__header">
      Compras anteriores
      <InputText
        placeholder="Buscar compra"
        onInput={(e) => {
          setGlobalFilter(e.target.value);
        }}
      />
    </div>
  );

  const statusBodyTemplate = (rowData) => {
    if (rowData.statusSale === "Activo") {
      return <span className="product-badge-state-active">ACTIVO</span>;
    } else if (rowData.statusSale === "Finalizado") {
      return <span className="product-badge-state-done">INACTIVO</span>;
    } else {
      return <span className="product-badge-state-na">NA</span>;
    }
  };

  return (
    <div>
      <h4 className="text-center">Historial de compras</h4>
      <div className="buys-history__containter">
        <DataTable
          value={salesFiltered}
          header={header}
          paginator
          responsiveLayout="stack"
          dataKey="id"
          emptyMessage="No se encontraron datos"
          className="buys-history__containter__table"
          rows={10}
          stripedRows
          showGridlines
          size="small"
        >
          <Column
            field="id"
            header="Número de orden"
            className="buys-history__containter__table__col-id"
          ></Column>
          <Column field="saleDate" sortable header="Fecha"></Column>
          <Column field="totalPurchase" sortable header="Total"></Column>
          <Column
            field="statusSale"
            body={statusBodyTemplate}
            header="Estado"
            className="buys-history__containter__table__col-status"
          ></Column>
          <Column
            body={buttonBodyTemplate}
            header="Acciones"
            className="buys-history__containter__table__col-actions"
          ></Column>
        </DataTable>
      </div>
    </div>
  );
}
