import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import "./homeContactForm.css";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";

export default function HomeContactForm() {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [checked, setChecked] = useState(false);
  return (
    <>
      <div className="dc-home-form">
        <p className="dc-home-form__p">
          Diligencia el siguiente formulario para comunicarnos contigo
        </p>
        <div className="dc-home-form__form">
          <span className="p-float-label">
            <InputText
              id="nombre"
              value={nombre}
              className="dc-home-form__form__input"
              onChange={(e) => setNombre(e.target.value)}
            />
            <label htmlFor="nombre">Nombre</label>
          </span>
          <span className="p-float-label">
            <InputText
              id="apellidos"
              value={apellidos}
              className="dc-home-form__form__input"
              onChange={(e) => setApellidos(e.target.value)}
            />
            <label htmlFor="apellidos">Apellidos</label>
          </span>
          <span className="p-float-label">
            <InputText
              id="email"
              value={email}
              className="dc-home-form__form__input"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Correo electronico</label>
          </span>
          <span className="p-float-label">
            <InputTextarea
              id="mensaje"
              value={mensaje}
              className="dc-home-form__form__input"
              onChange={(e) => setMensaje(e.target.value)}
              rows={5}
              cols={30}
            />
            <label htmlFor="mensaje">Mensaje</label>
          </span>
          <div className="field-checkbox">
            <Checkbox
              inputId="binary"
              checked={checked}
              onChange={(e) => setChecked(e.checked)}
            />
            <label htmlFor="binary" className="dc-home-form__label">
              Acepto politica de tratamiento de datos
            </label>
          </div>
          <Button
            label="Enviar"
            className="p-button-raised dc-home-form__form__btn"
          />
        </div>
      </div>
    </>
  );
}
