import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
// import { Password } from "primereact/password";
import { Button } from "primereact/button";

import "./resetPassword.css";
import { NavLink } from "react-router-dom";

export default function ResetPassword() {
  const [value2, setValue2] = useState("");
  return (
    <div className="reset-password">
      <div className="reset-password-form">
        <div className="reset-password-container">
          <div className="reset-password-container-header">
            <h2 className="white">¿Olvidaste tu contraseña?</h2>
            <p className="white lorem">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              culpa molestias eaque nihil fuga blanditiis ea neque
            </p>
          </div>
          <div className="template"></div>
          <span className="p-float-label">
            <InputText
              id="username"
              value={value2}
              onChange={(e) => setValue2(e.target.value)}
              className="reset-password-login"
            />
            <label htmlFor="username">Email</label>
          </span>

          <Button
            label="Cambiar de contraseña"
            className="p-button-raised p-button-secondary reset-password-login"
          />
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
