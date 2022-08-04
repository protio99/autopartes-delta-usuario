import React, { useState } from "react";
import UsersMenu from "./UsersMenu";
import { InputText } from "primereact/inputtext";
import "./user.css";
import { Calendar } from "primereact/calendar";
import { NavLink } from "react-router-dom";

import { Button } from "primereact/button";

export default function Users() {
  const [date1, setDate1] = useState();
  const [value1, setValue1] = useState("Danilo");
  const [value2, setValue2] = useState("Lora");
  const [value3, setValue3] = useState("danilo@gmail.com");
  const [value4, setValue4] = useState(3005844525);
  const [value5, setValue5] = useState("Colombia");
  const [value6, setValue6] = useState("Antioquia");
  const [value7, setValue7] = useState("Cr 15 AA 18 Torre 5");

  console.log(date1);
  return (
    <div>
      <UsersMenu />

      <div className="container contenedorUsuarios ">
        <div className="row">
          <div className="col-12">
            <div className="text-center pt-5">
              <h4>Resumen de Cuenta</h4>
            </div>

            <div className="row  formularioUser pt-5">
              <div className="col-4 user-form">
                <span className="p-float-label">
                  <InputText
                    className="jjj"
                    id="username"
                    value={value1}
                    onChange={(e) => setValue1(e.target.value)}
                    disabled
                  />
                  <label htmlFor="username">Nombre</label>
                </span>
              </div>
              <div className="col-4 user-form">
                <span className="p-float-label">
                  <InputText
                    className="jjj"
                    id="lastname"
                    value={value2}
                    onChange={(e) => setValue2(e.target.value)}
                    disabled
                  />
                  <label htmlFor="lastname">Apellido</label>
                </span>
              </div>
              <div className="col-4 user-form">
                <span className="p-float-label">
                  <InputText
                    className="jjj"
                    id="lastname"
                    value={value3}
                    onChange={(e) => setValue3(e.target.value)}
                    disabled
                  />
                  <label htmlFor="lastname">Correo</label>
                </span>
              </div>
              <div className="col-12 user-form">
                <span className="p-float-label">
                  <Calendar
                    id="icon"
                    value={date1}
                    onChange={(e) => setDate1(e.value)}
                  />
                  <label htmlFor="icon">F/N</label>
                </span>
              </div>
              <div className="col-4 user-form">
                <span className="p-float-label">
                  <InputText
                    className="jjj"
                    id="lastname"
                    value={value4}
                    onChange={(e) => setValue4(e.target.value)}
                    disabled
                  />
                  <label htmlFor="lastname">Numero Celular</label>
                </span>
              </div>
              <div className="col-4 user-form">
                <span className="p-float-label">
                  <InputText
                    className="jjj"
                    id="lastname"
                    value={value5}
                    onChange={(e) => setValue5(e.target.value)}
                    disabled
                  />
                  <label htmlFor="lastname">Pais</label>
                </span>
              </div>
              <div className="col-4 user-form">
                <span className="p-float-label">
                  <InputText
                    className="jjj"
                    id="lastname"
                    value={value6}
                    onChange={(e) => setValue6(e.target.value)}
                    disabled
                  />
                  <label htmlFor="lastname">Departamento</label>
                </span>
              </div>
              <div className="col-12 user-form">
                <span className="p-float-label">
                  <InputText
                    className="jjj"
                    id="lastname"
                    value={value7}
                    onChange={(e) => setValue7(e.target.value)}
                    disabled
                  />
                  <label htmlFor="lastname">Direccion</label>
                </span>
              </div>
              <div className="col-6 botonesUser">
                <Button
                  label="Editar"
                  className="dc-btn-editar"
                  icon="pi pi-pencil"
                />
              </div>
              <div className="col-6 botonesUser">
                <NavLink to={"/UserResetPassword"} className="navlink-style">
                  <Button
                    label="Cambiar Contraseña"
                    className="dc-btn-cambiar-pass"
                    icon="pi pi-shield"
                  />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
