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
        _authService
          .verifyBuys(token)
          .then((clientInfo) => {
            if (clientInfo.length !== 0) {
              setContactInformation(clientInfo);
            }
            if (idUserRol !== 2) {
              window.location.replace(`${baseAdminURL}/${token}`);
            } else {
              localStorage.setItem("tokenUser", token);
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
            console.log(
              "Error al traer lo datos de compras del cliente",
              error
            );
          });
      })
      .catch((error) => {
        console.log("Error, credenciales incorrectas");
        setLoginAlert(false);
      });
  };

  const setContactInformation = (data) => {
    const contactInformation = {
      name: data[0].name,
      lastname: data[0].lastname,
      documentType: data[0].documentType,
      documentNumber: data[0].documentNumber,
      telephone: data[0].telephone,
      email: data[0].email,
    };
    localStorage.setItem(
      "contactInformation",
      JSON.stringify(contactInformation)
    );
    const shippingInformation = {
      address: data[0].address,
      country: data[0].country,
      department: data[0].department,
      city: data[0].city,
      neighborhood: data[0].neighborhood,
      email: data[0].email,
    };
    localStorage.setItem(
      "shippingInformation",
      JSON.stringify(contactInformation)
    );
  };

  return (
    <div className="login">
      <form className="login-form" onSubmit={verifyCredentials}>
        <div className="login-form-container">
          <div className="login-form-container-header">
            <h2>Ingresar</h2>
            <p>Bienvenido, ingrese sus credenciales para continuar</p>
          </div>

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
