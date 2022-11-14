import React, { useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
// import { Password } from "primereact/password";
import { Button } from "primereact/button";
import "./resetPassword.css";
import { NavLink } from "react-router-dom";
import { AuthService } from "./../../service/authService";
import { Toast } from "primereact/toast";
import config from './../../config/config';
const baseUserURL = config.userURL+ '/login'
let _authService = new AuthService();

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [loginAlert, setLoginAlert] = useState(true);
  const toast = useRef(null);
console.log(loginAlert)
  const sendRecovery = (event) => {
    event.preventDefault()
    _authService
      .sendRecovery(email)
      .then((response) => {
        toast.current.show({ severity: "success", summary: "Confirmación", detail: "Hemos enviado a tu email un enlace de recuperación, revisa tu email. Seras redireccionado al login ", life: 9000 });
        setTimeout(() => {
          window.location.replace(`${baseUserURL}`)
        }, 10000);
        console.log("Revisa tu email")
        setLoginAlert(true)
      }).catch((error) => {
        toast.current.show({ severity: "error", summary: "Email invalido", detail: "Revisa el email que ingresaste", life: 9000 });
        console.log(error)
        setLoginAlert(false)
      });
  };
  return (
    
    <div className="reset-password">
      <Toast ref={toast} />
      <div className="reset-password-form">
        <div className="reset-password-container">
          <div className="reset-password-container-header">
            <h2 className="white">¿Olvidaste tu contraseña?</h2>
            <p className="white lorem">
              Ingresa tu email, a el enviaremos un enlace de recuperación. Solo tendras 15 minutos para usar ese enlace. 
            </p>
          </div>
          <div className="template"></div>
          <form onSubmit={sendRecovery}>
            <label htmlFor="email">Email</label>
            <InputText
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="reset-password-login"
            />
            <span className={!loginAlert ? "input-form-login__alert":"input-form-login__alert-hidden"}>El email no se encuentra registrado</span>
          <Button
            label="Cambiar de contraseña"
            className="p-button-raised p-button-secondary reset-password-login"
            type="submit"
          />
          </form>

          <NavLink to={"/Login"}>
            <Button
              label="Volver"
              className="p-button-raised p-button-secondary reset-password-login"
            />
          </NavLink>
        </div>
      </div>
      <div className="login-banner">
        <img
          src="../images/others/login3.jpg"
          className="cardCart"
          alt="Agregar al carrito"
        ></img>
      </div>
    </div>
  );
}
