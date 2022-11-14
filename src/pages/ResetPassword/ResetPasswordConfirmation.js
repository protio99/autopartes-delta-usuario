import React, { useEffect, useState, useRef } from "react";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import "./resetPasswordConfirmation.css";
// import { NavLink } from "react-router-dom";
import { AuthService } from "./../../service/authService";
import { Toast } from "primereact/toast";
import config from './../../config/config';
import { useParams } from "react-router-dom";

const baseUserURL = config.userURL+ '/login'
let _authService = new AuthService();

export default function ResetPasswordConfirmation() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loginAlert, setLoginAlert] = useState(true);
  let { token } = useParams();
  console.log("token",token)
  const toast = useRef(null);

  useEffect(() =>{
    if (password !== confirmPassword) {
      setLoginAlert(false)
      
    }else{
      setLoginAlert(true)
    }
  },[password,confirmPassword])
  const resetPassword = (event) => {
    event.preventDefault()
    if (password === confirmPassword) {
      _authService
        .changePassword(token, confirmPassword)
        .then((response) => {
          toast.current.show({ severity: "success", summary: "Confirmación", detail: "Cambio de clave exitoso, sera redireccionado al login para que inicie sesión ", life: 9000 });
          setTimeout(() => {
            window.location.replace(`${baseUserURL}`)
          }, 10000);
          console.log("Clave cambiada exitosamente")
          setLoginAlert(true)
        }).catch((error) => {
          toast.current.show({ severity: "error", summary: "Error", detail: "Lo sentimos, pero no estas autorizado", life: 9000 });
          console.log(error)
          setLoginAlert(false)
        });
      
    }
  };
  return (
    <div className="reset-password-c">
       <Toast ref={toast} />
      <div className="reset-password-c-form">
        <form className="reset-password-c-container" onSubmit={resetPassword}>
          <div className="reset-password-c-container-header">
            <h2 className="white">Cambiar contraseña</h2>
            <p className="white lorem">
              Ingresa tu nueva contraseña, los dos campos deben coincidir. Ten en cuenta las recomendaciones de seguridad
            </p>
          </div>
          <div className="input-c">
            <p>Ingrese una nueva contraseña</p>
            <Password
              value={password}
              className="reset-password-c-login"
              promptLabel="Ingrese una contraseña"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-c">
            <p>Repita la contraseña</p>
            <Password
              value={confirmPassword}
              className="reset-password-c-login"
              promptLabel="Repita la contraseña"
              weakLabel
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <span className={!loginAlert ? "input-form-login__alert":"input-form-login__alert-hidden"}>Las contraseñas no coinciden</span>
          <Button
            label="Cambiar de contraseña"
            className="p-button-raised p-button-secondary reset-password-c-login"
          />
        </form>
      </div>
      <div className="login-banner">
        <img
          src="../images/others/login5.jpg"
          className="cardCart"
          alt="Agregar al carrito"
        ></img>
      </div>
    </div>
  );
}
