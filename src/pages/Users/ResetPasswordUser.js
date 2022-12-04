import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

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
  const toast = useRef(null);
  let history = useNavigate();

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
  const toastBC = useRef(null);
  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Success Message",
      detail: "Message Content",
      life: 3000,
    });
  };
  const successChangePassword = () => {
    toast.current.show({
      severity: "success",
      summary: "La contraseña ha sido cambiada correctamente!",
      detail:
        "Vamos a tu perfil",
      life: 4000,
    });
    setTimeout(() => {
      history("/user", {replace: true});
    }, 4000);

  }
  const failChangePassword = () => {
    toast.current.show({ severity: "warn", summary: "Contraseña actual incorrecta", detail: "Inténtelo de nuevo", life: 3000 });
  }
  const changePassword = () => {
    const token = localStorage.getItem("tokenUser");
    _authService
     .changePasswordUserLoged(token, currentPassword, newPassword )
     .then((res) => {
      successChangePassword();
      console.log(res);
     }).catch((error)=>{
      failChangePassword();
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
  const validateEdit = (data) => {
    let errors = {};

    if(!data.password) {
      errors.password = "Digite la contraseña actual";
    }
    if(!data.newPassword) {
      errors.newPassword = "Digite la nueva contraseña";
    }
    if(!data.confirmNewPassword) {
      errors.confirmNewPassword = "Confirme la nueva contraseña";
    }else if(data.newPassword != data.confirmNewPassword) {
      errors.confirmNewPassword = "La contraseña no coincide";
    }

    return errors;
  };

  const initialValuesEdit = {
    password: currentPassword,
    newPassword: newPassword,
    confirmNewPassword: passwordConfirmation,
    // confirmPassword: "",
  };
  const onSubmitEdit = () => {
    changePassword()

  };
  const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
  const getFormErrorMessage = (meta) => {
    return (
      isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>
    );
  };
  return (
    <div>
      <Toast ref={toast} />

      {/* <UsersMenu /> */}
      {/* <Toast ref={toastBC} position="bottom-center" /> */}
      <div className="container mt-4 mb-4">
        <div className="row justify-content-center">
          <div className="col-md-6 col-md-offset-4">
            <div className="card">
              <div className="card-header">
                <h5 className="text-center">Cambiar Contraseña</h5>
              </div>
              <Form
              onSubmit={onSubmitEdit}
              initialValues={initialValuesEdit}
              validate={validateEdit}
              render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                        <div className="card-body">
                          <div className="grid p-fluid">
                            <div className="col-12 user-form pt-5 text-center">
                               
                                  {/* <Password
                                    value={currentPassword}
                                    onChange={(e) => setCurrentPassword(e.target.value)}
                                    feedback={false}
                                  /> */}
                                  <Field
                                    name="password"
                                    render={({ input, meta }) => (
                                        <div className="field passwordUserConfirmation">
                                            <span>
                                                <label htmlFor="password" className={classNames({ "p-error": isFormFieldValid("password"),passwordUserConfirmation2: true})}>Contraseña actual</label>
                                                <br />
                                                <Password
                                                  id="password"
                                                  {...input}
                                                  placeholder="Digite la contraseña actual"
                                                  value={currentPassword}
                                                  onChange={(e) => setCurrentPassword(e.target.value)}
                                                  className={classNames({ "p-invalid": isFormFieldValid(meta), })}
                                                  toggleMask

                                                />
                                            </span>
                                            <br />
                                            {getFormErrorMessage(meta)}
                                        </div>
                                    )}
                                />
                            
                              <Field
                                    name="newPassword"
                                    render={({ input, meta }) => (
                                        <div className="field passwordUserConfirmation">
                                            <span>
                                                <label htmlFor="newPassword" className={classNames({ "p-error": isFormFieldValid("newPassword"),passwordUserConfirmation2: true})}>Nueva contraseña</label>
                                                <br />
                                                <Password
                                                  id="newPassword"
                                                  {...input}
                                                  placeholder="Digite la nueva contraseña"
                                                  value={newPassword}
                                                  onChange={(e) => setNewPassword(e.target.value)}
                                                  className={classNames({ "p-invalid": isFormFieldValid(meta), })}
                                                  toggleMask

                                                />
                                            </span>
                                            <br />
                                            {getFormErrorMessage(meta)}
                                        </div>
                                    )}
                                />
                                <Field
                                    name="confirmNewPassword"
                                    render={({ input, meta }) => (
                                        <div className="field passwordUserConfirmation">
                                            <span>
                                                <label htmlFor="confirmNewPassword" className={classNames({ "p-error": isFormFieldValid("confirmNewPassword"),passwordUserConfirmation2: true})}>Confirmar contraseña</label>
                                                <br />
                                                <Password
                                                  id="confirmNewPassword"
                                                  {...input}
                                                  placeholder="Confirmar su nueva contraseña"
                                                  value={passwordConfirmation}
                                                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                                                  className={classNames({ "p-invalid": isFormFieldValid(meta), })}
                                                  toggleMask

                                                />
                                            </span>
                                            <br />
                                            {getFormErrorMessage(meta)}
                                        </div>
                                    )}
                                />
                            </div>
                            
                            </div>

                            <div className="row pt-4">
                              <div className="col-6  text-center botonesContraseña">
                                <Button
                                  
                                  label="Cambiar"
                                  className="ui-button-warning"
                                  type="submit"
                                />
                              </div>
                              <div className="col-6 text-center botonesContraseña">
                              <NavLink to={"/user"} className="navlink-style">
                              <Button label="Cancelar" className="p-button-danger" type="button"
                                />
                              </NavLink>
                              </div>
                            </div>
                          </div>
                </form>
              )} />
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
