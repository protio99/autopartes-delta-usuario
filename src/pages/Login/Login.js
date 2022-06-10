import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
// import { Password } from "primereact/password";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
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
            <Link to={"/pages/Store/ProductDetail/"}>
              <strong>Recuperar</strong>
            </Link>
          </p>
          <div className="template">
            <Button className="google p-0" aria-label="Google">
              <i className="pi pi-google px-2"></i>
              <span className="px-3">Iniciar con Google</span>
            </Button>
          </div>

          <Button label="Iniciar sesion" className="p-button-raised" />

          <div className="login-form-register">
            <p>¿No tienes una cuenta?</p>
            <Link to={"../components/Register"}>
              <strong>Registrarse</strong>
            </Link>
          </div>
        </div>
      </div>
      <div className="login-banner">
        <img
          src="../images/others/login.png"
          className="cardCart"
          alt="Agregar al carrito"
        ></img>
      </div>
    </div>
  );
}
