import React, { useState, useRef } from "react";
import UsersMenu from "./UsersMenu";
import "./resetpassword.css";
import { Toast } from "primereact/toast";
import { Divider } from "primereact/divider";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { NavLink } from "react-router-dom";

export default function Users() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const header = <h6>Elige una Contraseña</h6>;
  const footer = (
    <React.Fragment>
      <Divider />
      <p className="mt-2">Sugerencias</p>
      <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: "1.5" }}>
        <li>Al menos una minúscula</li>
        <li>Al menos una mayuscula</li>
        <li>Al menos un numerico</li>
        <li>Minimo 8 caractereres</li>
      </ul>
    </React.Fragment>
  );
  const toast = useRef(null);
  const toastBC = useRef(null);
  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Success Message",
      detail: "Message Content",
      life: 3000,
    });
  };
  const showConfirm = () => {
    toastBC.current.show({
      severity: "warn",
      sticky: true,
      content: (
        <div className="flex flex-column" style={{ flex: "1" }}>
          <div className="text-center">
            <i
              className="pi pi-exclamation-triangle"
              style={{ fontSize: "3rem" }}
            ></i>
            <h4>Esta seguro que quieres cambiar contraseña?</h4>
            <p>Confirmar</p>
          </div>
          <div className="grid p-fluid">
            <div className="row">
              <div className="col-6">
                <NavLink to={"/User"} className="navlink-style">
                  <Button
                    label="Aceptar"
                    className="p-button-success"
                    onClick={showSuccess}
                  />
                </NavLink>
              </div>
              <div className="col-6">
                <Button
                  type="button"
                  label="No"
                  className="p-button-secondary"
                />
              </div>
            </div>
          </div>
        </div>
      ),
    });
  };

  return (
    <div>
      <UsersMenu />
      <Toast ref={toastBC} position="bottom-center" />
      <div className="container mt-4 mb-4">
        <div className="row justify-content-center">
          <div className="col-md-6 col-md-offset-4">
            <div className="card">
              <div className="card-header">
                <h4 className="text-center">Cambiar Contraseña</h4>
              </div>
              <div className="card-body">
                <div className="grid p-fluid">
                  <div className="col-12 user-form pt-5 text-center">
                    <div className="p-inputgroup">
                      <span className="p-inputgroup-addon">
                        <i className="pi pi-unlock"></i>
                      </span>
                      <span className="p-float-label">
                        <Password
                          value={value1}
                          onChange={(e) => setValue1(e.target.value)}
                          feedback={false}
                        />
                        <label htmlFor="password">Constraseña Antigua</label>
                      </span>
                    </div>
                  </div>
                  <div className="col-12 user-form pt-5 text-center">
                    <div className="p-inputgroup">
                      <span className="p-inputgroup-addon">
                        <i className="pi pi-unlock"></i>
                      </span>
                      <span className="p-float-label">
                        <Password
                          value={value2}
                          onChange={(e) => setValue2(e.target.value)}
                          header={header}
                          footer={footer}
                          toggleMask
                        />
                        <label htmlFor="password">Nueva Contraseña</label>
                      </span>
                    </div>
                  </div>
                  <div className="col-12 user-form pt-5 text-center">
                    <div className="p-inputgroup">
                      <span className="p-inputgroup-addon">
                        <i className="pi pi-unlock"></i>
                      </span>
                      <span className="p-float-label">
                        <Password
                          value={value3}
                          onChange={(e) => setValue3(e.target.value)}
                          toggleMask
                        />
                        <label htmlFor="password">Confirmar Contraseña</label>
                      </span>
                    </div>
                  </div>
                  <div className="row pt-2">
                    <div className="col-6  text-center botonesContraseña">
                      <Button
                        type="button"
                        onClick={showConfirm}
                        label="Cambiar"
                        className="ui-button-warning"
                      />
                    </div>
                    <div className="col-6 text-center botonesContraseña">
                      <Button label="Cancelar" className="p-button-danger" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
