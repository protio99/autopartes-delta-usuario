import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Slider } from "primereact/slider";
import { Dropdown } from "primereact/dropdown";
import "./headerStore.css";

export default function FilterProduct() {
  const [value, setValue] = useState([20, 80]);
  const [value3, setValue3] = useState("");
  const [selectedBrand, setSelectedBrand] = useState(null);
  const brands = [
    { name: "Ford", code: "ford" },
    { name: "Mazda", code: "mazda" },
    { name: "Chevrolet", code: "chevrolet" },
    { name: "Nisan", code: "nisan" },
  ];
  const onBrandChange = (e) => {
    setSelectedBrand(e.value);
  };
  const selectedBrandTemplate = (option, props) => {
    if (option) {
      return (
        <div className="country-item country-item-value">
          <div>{option.name}</div>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };
  const countryOptionTemplate = (option) => {
    return (
      <div className="country-item">
        <div>{option.name}</div>
      </div>
    );
  };

  return (
    <div className="filter-product-container">
      <div className="filter-product">
        <h6 className="text">Filtrar productos</h6>

        <div className="filter-product-dropdown">
          <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText
              value={value3}
              onChange={(e) => setValue3(e.target.value)}
              className="filter-product-input"
              placeholder="Buscar producto"
            />
          </span>
          <Dropdown
            value={selectedBrand}
            options={brands}
            onChange={onBrandChange}
            optionLabel="name"
            filter
            showClear
            className="filter-product-dropdown__custom"
            filterBy="name"
            placeholder="Buscar por marca"
            valueTemplate={selectedBrandTemplate}
            itemTemplate={countryOptionTemplate}
          />
          <Dropdown
            value={selectedBrand}
            className="filter-product-dropdown__custom"
            options={brands}
            onChange={onBrandChange}
            optionLabel="name"
            filter
            showClear
            filterBy="name"
            placeholder="Buscar por categoria"
            valueTemplate={selectedBrandTemplate}
            itemTemplate={countryOptionTemplate}
          />
          <Dropdown
            value={selectedBrand}
            className="filter-product-dropdown__custom"
            options={brands}
            onChange={onBrandChange}
            optionLabel="name"
            filter
            showClear
            filterBy="name"
            placeholder="Buscar por vehiculo"
            valueTemplate={selectedBrandTemplate}
            itemTemplate={countryOptionTemplate}
          />
        </div>
        <p className="text">
          Rango de precio: {value[0]}, {value[1]}
        </p>
        <Slider value={value} onChange={(e) => setValue(e.value)} range />
      </div>
    </div>
  );
}
