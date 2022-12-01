import React, { useState, useRef } from "react";
// import UsersMenu from "./Users";
import "./resetpassword.css";
import { Toast } from "primereact/toast";
import { Divider } from "primereact/divider";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { NavLink } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { classNames } from "primereact/utils";
import { AuthService } from "../../service/authService";

const _authService = new AuthService();

export default function ResetPasswordUser() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const header = <h6>Elige una Contraseña</h6>;
  const footer = (
    <React.Fragment>
      <Divider />
      <p className="mt-2">Sugerencias</p>
      <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: "1.5" }}>
        <li>Al menos una minúscula</li>
        <li>Al menos una mayúscula</li>
        <li>Al menos un numérico</li>
        <li>Mínimo 8 caracteres</li>
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

  const changePassword = () => {
    const token = localStorage.getItem("tokenUser");
    _authService
     .changePasswordUserLoged(token, currentPassword, newPassword )
     .then((res) => {
      console.log(res);
     })
  }
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
      {/* <UsersMenu /> */}
      {/* <Toast ref={toastBC} position="bottom-center" /> */}
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
                          value={currentPassword}
                          onChange={(e) => setCurrentPassword(e.target.value)}
                          feedback={false}
                        />
                        <label htmlFor="password">Constraseña actual</label>
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
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          header={header}
                          footer={footer}
                          toggleMask
                        />
                        <label htmlFor="password">Nueva contraseña</label>
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
                          value={passwordConfirmation}
                          onChange={(e) => setPasswordConfirmation(e.target.value)}
                          toggleMask
                        />
                        <label htmlFor="password">Confirmar contraseña</label>
                      </span>
                    </div>
                  </div>
                  <div className="row pt-4">
                    <div className="col-6  text-center botonesContraseña">
                      <Button
                        type="button"
                        onClick={changePassword}
                        label="Cambiar"
                        className="ui-button-warning"
                      />
                    </div>
                    <div className="col-6 text-center botonesContraseña">
                      <Button label="Cancelar" className="p-button-danger"
                       />
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
