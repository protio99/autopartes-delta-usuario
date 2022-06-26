import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import "./checkoutShippingForm.css";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";

export default function CheckoutShippingForm({ setActiveIndex }) {
  const [direccion, setDireccion] = useState("");
  const [pais, setPais] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [barrio, setBarrio] = useState("");
  const [region, setSelectedRegion] = useState(null);
  const [checked, setChecked] = useState(false);

  const regiones = [
    { name: "Antioquia", code: "CC" },
    { name: "Cundinamarca", code: "TI" },
    { name: "Amazonas", code: "CE" },
    { name: "Arauca", code: "PT" },
    { name: "Atlantico", code: "Otro" },
  ];

  const onRegionChange = (e) => {
    setSelectedRegion(e.value);
  };

  return (
    <>
      <div className="dc-checkout-personal__form">
        <div className="dc-checkout-personal__form__header">
          <h5>Información de envio</h5>
        </div>
        <div className="dc-checkout-personal__form__input">
          <span className="p-float-label">
            <InputText
              id="direccion"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
            />
            <label htmlFor="direccion">Direccion de envio</label>
          </span>
          <span className="p-float-label">
            <InputText
              id="pais"
              value={pais}
              onChange={(e) => setPais(e.target.value)}
            />
            <label htmlFor="pais">Pais</label>
          </span>
          <Dropdown
            value={region}
            options={regiones}
            onChange={onRegionChange}
            optionLabel="name"
            placeholder="Región"
          />
          <span className="p-float-label">
            <InputText
              id="ciudad"
              value={ciudad}
              onChange={(e) => setCiudad(e.target.value)}
            />
            <label htmlFor="ciudad">Ciudad</label>
          </span>
          <span className="p-float-label">
            <InputText
              id="barrio"
              value={barrio}
              onChange={(e) => setBarrio(e.target.value)}
            />
            <label htmlFor="barrio">Barrio</label>
          </span>
        </div>
        <div className="field-checkbox dc-checkout-personal__form__checkbox">
          <Checkbox
            inputId="binary"
            checked={checked}
            className="dc-checkbox"
            onChange={(e) => setChecked(e.checked)}
          />
          <label htmlFor="binary dc-checkout-personal__form__checkbox__label">
            Recordar esta informacion para futuras compras
          </label>
        </div>
        <div className="dc-checkout-shipping__button">
          <Button
            label="Continuar"
            onClick={() => {
              setActiveIndex(1);
            }}
            className="p-button-secondary dc-checkout-shipping__button__next "
          />
        </div>
      </div>
    </>
  );
}
