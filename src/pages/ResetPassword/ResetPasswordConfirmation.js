import React, { useState } from "react";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import "./resetPasswordConfirmation.css";
// import { NavLink } from "react-router-dom";

export default function ResetPasswordConfirmation() {
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  return (
    <div className="reset-password-c">
      <div className="reset-password-c-form">
        <div className="reset-password-c-container">
          <div className="reset-password-c-container-header">
            <h2 className="white">Cambiar contraseña</h2>
            <p className="white lorem">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              culpa molestias eaque nihil fuga blanditiis ea neque
            </p>
          </div>
          <div className="input-c">
            <p>Ingrese una nueva contraseña</p>
            <Password
              value={value2}
              className="reset-password-c-login"
              promptLabel="Ingrese una contraseña"
              onChange={(e) => setValue2(e.target.value)}
            />
          </div>
          <div className="input-c">
            <p>Repita la contraseña</p>
            <Password
              value={value3}
              className="reset-password-c-login"
              promptLabel="Repita la contraseña"
              weakLabel
              onChange={(e) => setValue3(e.target.value)}
            />
          </div>

          <Button
            label="Cambiar de contraseña"
            className="p-button-raised p-button-secondary reset-password-c-login"
          />
        </div>
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
