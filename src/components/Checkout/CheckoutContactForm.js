import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Link } from "react-router-dom";
import "./checkoutContactForm.css";

export default function CheckoutContactForm() {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [numero_documento, setNumDocumento] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [selected_tipo, setSelectedTipo] = useState(null);

  const tipos_documentos = [
    { name: "Cedula de ciudadania", code: "CC" },
    { name: "Tarjeta de identidad", code: "TI" },
    { name: "Cedula de extranjeria", code: "CE" },
    { name: "Pasaporte", code: "PT" },
    { name: "Otro", code: "Otro" },
  ];

  const onTipoChange = (e) => {
    setSelectedTipo(e.value);
  };

  return (
    <>
      <div className="dc-checkout-personal__form">
        <div className="dc-checkout-personal__form__header">
          <h5>Información de contacto</h5>
          <div>
            ¿Tienes una cuenta?{" "}
            <Link to={"/Login"} className="dc-link">
              <strong>Inicia sesión</strong>
            </Link>
          </div>
        </div>
        <div className="dc-checkout-personal__form__input">
          <span className="p-float-label">
            <InputText
              id="username"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <label htmlFor="username">Nombre</label>
          </span>
          <span className="p-float-label">
            <InputText
              id="apellidos"
              value={apellidos}
              onChange={(e) => setApellidos(e.target.value)}
            />
            <label htmlFor="apellidos">Apellidos</label>
          </span>
          <Dropdown
            value={selected_tipo}
            options={tipos_documentos}
            onChange={onTipoChange}
            optionLabel="name"
            placeholder="Tipo de documento"
          />
          <span className="p-float-label">
            <InputText
              id="numero_documento"
              value={numero_documento}
              onChange={(e) => setNumDocumento(e.target.value)}
            />
            <label htmlFor="numero_documento">Numero de documento</label>
          </span>
          <span className="p-float-label">
            <InputText
              id="telefono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
            <label htmlFor="telefono">Telefono</label>
          </span>
          <span className="p-float-label">
            <InputText
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Email</label>
          </span>
        </div>
      </div>
    </>
  );
}
