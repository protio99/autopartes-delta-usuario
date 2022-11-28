import React, { useState } from "react";
import UsersMenu from "./Users";
import { InputText } from "primereact/inputtext";
import "./user.css";
import { NavLink } from "react-router-dom";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

export default function MyProfile() {
  const [value1, setValue1] = useState("Danilo");
  const [value2, setValue2] = useState("Lora");
  const [value3, setValue3] = useState("13/10/2022");
  const [value4, setValue4] = useState("email@email.com");
  const [displayBasic2, setDisplayBasic2] = useState(false);
  const [position, setPosition] = useState("center");
  const dialogFuncMap = {
    displayBasic2: setDisplayBasic2,
  };

  const onClick = (name, position) => {
    dialogFuncMap[`${name}`](true);

    if (position) {
      setPosition(position);
    }
  };

  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };

  const renderFooter = (name) => {
    return (
      <div>
        <Button
          label="Cancelar"
          icon="pi pi-times"
          onClick={() => onHide(name)}
          className="p-button-text"
        />
        <Button
          label="Editar"
          icon="pi pi-check"
          onClick={() => onHide(name)}
          autoFocus
        />
      </div>
    );
  };
  return (
    <div>
      <div className="containerUsers">
        <h1 className="user__title">
          <h4>Resumen de cuenta</h4>
        </h1>
        <div className="form__users d-flex pt-5">
          <label htmlFor=""></label>
          <div className="form__first">
            <span className="p-float-label">
              <InputText
                id="inputtext"
                value={value1}
                onChange={(e) => setValue1(e.target.value)}
                disabled
              />
              <label htmlFor="inputtext">Nombre</label>
            </span>
            <span className="p-float-label">
              <InputText
                class=" "
                id="inputtext"
                value={value2}
                onChange={(e) => setValue2(e.target.value)}
                disabled
              />
              <label htmlFor="inputtext">Apellido</label>
            </span>
          </div>
          <div className="form__second">
            <span className="p-float-label">
              <InputText
                id="inputtext"
                value={value4}
                onChange={(e) => setValue4(e.target.value)}
                disabled
              />
              <label htmlFor="inputtext">Email</label>
            </span>
            <span className="p-float-label">
              <InputText
                id="inputtext"
                value={value3}
                onChange={(e) => setValue3(e.target.value)}
                className="form__padding"
                disabled
              />
              <label htmlFor="inputtext">Fecha de Registro</label>
            </span>
          </div>
        </div>
        <div className="buttons__users">
          <Button
            label="Editar Datos"
            className="btn__users__edit"
            icon="pi pi-external-link"
            onClick={() => onClick("displayBasic2")}
          />
          <NavLink to={"/UserResetPassword"} className="navlink-style">
            <Button
              label="Cambiar Contraseña"
              aria-label="Submit"
              className="btn__users__password"
            />
          </NavLink>
          <Dialog
            header="Edita Tus Datos"
            visible={displayBasic2}
            style={{ width: "80vw" }}
            footer={renderFooter("displayBasic2")}
            onHide={() => onHide("displayBasic2")}
          >
            <div className="form__edit d-flex pt-5">
              <label htmlFor=""></label>
              <div className="form__first__edit">
                <span className="p-float-label">
                  <InputText
                    id="inputtext"
                    value={value1}
                    onChange={(e) => setValue1(e.target.value)}
                  />
                  <label htmlFor="inputtext">Nombre</label>
                </span>
                <span className="p-float-label">
                  <InputText
                    class=" "
                    id="inputtext"
                    value={value2}
                    onChange={(e) => setValue2(e.target.value)}
                  />
                  <label htmlFor="inputtext">Apellido</label>
                </span>
              </div>
              <div className="form__second__edit">
                <span className="p-float-label">
                  <InputText
                    id="inputtext"
                    value={value4}
                    onChange={(e) => setValue4(e.target.value)}
                  />
                  <label htmlFor="inputtext">Email</label>
                </span>
                <span className="p-float-label">
                  <InputText
                    id="inputtext"
                    value={value3}
                    onChange={(e) => setValue3(e.target.value)}
                    className="form__padding"
                  />
                  <label htmlFor="inputtext">Fecha de Registro</label>
                </span>
              </div>
            </div>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
