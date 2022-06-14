import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
// import { Password } from "primereact/password";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { NavLink } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [value2, setValue2] = useState("");
  //   const [value13, setValue13] = useState("");
  const [checked, setChecked] = useState(false);
  return (
    <div className="login">
      <div className="login-form">
        <div className="login-form-container">
          <div className="login-form-container-header">
            <h2>Ingresar</h2>
            <p>Bienvenido, ingrese sus credeniales para continuar</p>
          </div>
          <div className="template">
            <Button
              label="Iniciar con Google"
              className="p-button-raised p-button-text p-button-plain input-form-login"
              icon="pi pi-google"
            />
          </div>
          <span className="p-float-label">
            <InputText
              id="username"
              value={value2}
              onChange={(e) => setValue2(e.target.value)}
              className="input-form-login"
            />
            <label htmlFor="username">Usuario</label>
          </span>
          <span className="p-float-label">
            <InputText
              id="password"
              value={value2}
              onChange={(e) => setValue2(e.target.value)}
              className="input-form-login"
            />
            <label htmlFor="Contraseña">Contraseña</label>
          </span>

          {/* <span className="p-float-label">
            <Password
              inputId="password"
              value={value13}
              onChange={(e) => setValue13(e.target.value)}
            />
            <label htmlFor="password">Clave</label>
          </span> */}
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
              <strong> Recuperar</strong>
            </NavLink>
          </p>

          <Button
            label="Iniciar sesion"
            className="p-button-raised input-form-login"
          />

          <div className="login-form-register">
            <p>¿No tienes una cuenta?</p>
            <NavLink to={"/Register"} className="navlink-style">
              <strong>Registrarse</strong>
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
