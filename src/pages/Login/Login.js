import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { NavLink } from "react-router-dom";
import {AuthService} from "../../service/authService"
import "./login.css";

let _authService = new AuthService()
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const verifyCredentials = () =>{

    _authService.verifyCredentials({
      email: email, 
      password: password}).then((response) => {
        console.log("Autorizacion exitosa")
      })
  }

  return (
    <div className="login">
      <div className="login-form">
        <div className="login-form-container">
          <div className="login-form-container-header">
            <h2>Ingresar</h2>
            <p>Bienvenido, ingrese sus credeniales para continuar</p>
          </div>

          <Button
            label="Iniciar con Google"
            className="p-button-raised  input-form-login input-form-login_google"
            icon="pi pi-google"
          />

          <span className="p-float-label">
            <InputText
              id="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-form-login"
            />
            <label htmlFor="username">Usuario</label>
          </span>
          {/* <span className="p-float-label">
            <InputText
              id="password"
              value={email}
              onChange={(e) => setUserName(e.target.value)}
              className="input-form-login"
            />
            <label htmlFor="Contraseña">Contraseña</label>
          </span> */}

          <span className="p-float-label">
            <Password
              inputId="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              feedback={false}
            />
            <label htmlFor="password">Clave</label>
          </span>
          <div className="field-checkbox login-form-container-rememberMe">
            <Checkbox
              inputId="binary"
              checked={checked}
              onChange={(e) => setChecked(e.checked)}
            />
            <label htmlFor="binary">Recuerdame</label>
          </div>

          <p>
            ¿Olvidaste tu constraseña?
            <NavLink to={"/ResetPassword"} className="navlink-style">
              <strong className="dc-login__link-color"> Recuperar</strong>
            </NavLink>
          </p>

          <Button
            label="Iniciar sesion"
            className="p-button-raised input-form-login"
            onClick={verifyCredentials}
          />

          <div className="login-form-register">
            <p>¿No tienes una cuenta?</p>
            <NavLink to={"/Register"} className="navlink-style">
              <strong className="dc-login__link-color">Registrarse</strong>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="login-banner">
        <img
          src="../images/others/login2.jpg"
          className="cardCart"
          alt="Agregar al carrito"
        ></img>
      </div>
    </div>
  );
}
