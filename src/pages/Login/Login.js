import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { NavLink } from "react-router-dom";
import { AuthService } from "../../service/authService";
import { QuotationsService } from "../../service/quotationsService";
import { Cart } from "../../service/Cart";

import "./login.css";
import config from "../../config/config";

const baseAdminURL = config.adminURL + "/#/validation-token";
const baseUserURL = config.userURL + "/validation-token";

let _authService = new AuthService();
let _quotationService = new QuotationsService();
let _cart = new Cart();

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginAlert, setLoginAlert] = useState(true);

  const verifyCredentials = (event) => {
    event.preventDefault();
    _authService
      .verifyCredentials({
        email: email,
        password: password,
      })
      .then((response) => {
        const token = response.data.token;
        const idUserRol = response.data.user.idRol;
        if (idUserRol !== 2) {
          window.location.replace(`${baseAdminURL}/${token}`);
        } else {
          localStorage.setItem("tokenUser", token);
          console.log("Holaa");
          _quotationService
            .getQuotations()
            .then((response) => {
              console.log("Response getQuotations", response);
              const data = response.data;
              const cart = {};
              data.forEach((product) => {
                cart[product.idProduct] = {
                  id: product.idProduct,
                  amount: product.amount,
                  price: product.products.price,
                };
              });
              _cart.saveStateDB(cart);
              window.location.replace(`${baseUserURL}/${token}`);
            })
            .catch((error) => {
              console.log("Error getQuotations", error);
            });
        }
      })
      .catch((error) => {
        console.log("Error, credenciales incorrectas");
        setLoginAlert(false);
      });
  };

  return (
    <div className="login">
      <form className="login-form" onSubmit={verifyCredentials}>
        <div className="login-form-container">
          <div className="login-form-container-header">
            <h2>Ingresar</h2>
            <p>Bienvenido, ingrese sus credenciales para continuar</p>
          </div>

          <Button
            label="Iniciar con Google"
            className="p-button-raised  input-form-login input-form-login_google"
            icon="pi pi-google"
          />

          <span className="">
            <label htmlFor="username">Usuario</label>
            <InputText
              id="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-form-login"
            />
          </span>
          <span>
            <label htmlFor="password">Clave</label>
            <Password
              inputId="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              feedback={false}
              className="input-form-login"
            />
          </span>
          <span
            className={
              !loginAlert
                ? "input-form-login__alert"
                : "input-form-login__alert-hidden"
            }
          >
            Usuario o contraseña incorrectos
          </span>
          <p>
            ¿Olvidaste tu constraseña?
            <NavLink to={"/ResetPassword"} className="navlink-style">
              <strong className="dc-login__link-color"> Recuperar</strong>
            </NavLink>
          </p>

          <Button
            type="submit"
            label="Iniciar sesion"
            className="p-button-raised input-form-login"
            // onClick={verifyCredentials}
          />

          <div className="login-form-register">
            <p>¿No tienes una cuenta?</p>
            <NavLink to={"/Register"} className="navlink-style">
              <strong className="dc-login__link-color">Registrarse</strong>
            </NavLink>
          </div>
        </div>
      </form>
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
