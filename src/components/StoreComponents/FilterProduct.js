import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Slider } from "primereact/slider";
import { Dropdown } from "primereact/dropdown";
import "./filterProduct.css";

export default function FilterProduct() {
  const [value, setValue] = useState([20, 80]);
  const [value3, setValue3] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const countries = [
    { name: "Ford", code: "ford" },
    { name: "Mazda", code: "mazda" },
    { name: "Chevrolet", code: "chevrolet" },
    { name: "Nisan", code: "nisan" },
  ];
  const onCountryChange = (e) => {
    setSelectedCountry(e.value);
  };
  const selectedCountryTemplate = (option, props) => {
    if (option) {
      return (
        <div className="country-item country-item-value">
          <div>{option.name}</div>
        </div>
      );
    }
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
        <div>
          <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText
              value={value3}
              onChange={(e) => setValue3(e.target.value)}
              placeholder="Search"
            />
          </span>
          <Dropdown
            value={selectedCountry}
            options={countries}
            onChange={onCountryChange}
            optionLabel="name"
            filter
            showClear
            filterBy="name"
            placeholder="Buscar por marca"
            valueTemplate={selectedCountryTemplate}
            itemTemplate={countryOptionTemplate}
          />
          <p>
            Rango de precio: {value[0]}, {value[1]}
          </p>
          <Slider value={value} onChange={(e) => setValue(e.value)} range />
        </div>
      </div>
    </div>
  );
}
