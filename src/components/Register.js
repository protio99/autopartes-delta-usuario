import React from "react";
/* Import DatPicker  */

import { DatePicker } from "@material-ui/pickers";
import { useState } from "react";
import GoogleLogin from "react-google-login";
import { Form, Button, FormGroup, FormLabel } from "react-bootstrap";
import "../styles/Register.css";

export default function Register(props) {
  /* PROCESS DATA SAVE  */
  const [fechaSeleccionada, cambiarFechaSeleccionada] = useState(new Date());
  console.log(fechaSeleccionada);
  const respuestaGoogle = (respuesta) => {
    console.log(respuesta);
  };
  return (
    <div className="container-fluid">
      <div className="row no-gutter">
        <div className="col-md-6 bg-light">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="intento">
                  <div className="col-lg-10 col-xl-7 mx-auto">
                    <div className="">
                      <h1 className="display-4">Ingresa tu informacion</h1>
                      <p className="text-muted ">
                        Necesitamos que nos ayudes con alguna información básica
                        para la creación de tu cuenta. Aquí están nuestros
                        Términos y condiciones Por favor, léalas cuidadosamente.
                      </p>
                    </div>
                    <div className="social-box">
                      <GoogleLogin
                        clientId="720355387560-p6r13526ab890k39ikt6e3m2ea3853b4.apps.googleusercontent.com"
                        buttonText="Registrarse"
                        onSuccess={respuestaGoogle}
                        onFailure={respuestaGoogle}
                        cookiePolicy={"single_host_origin"}
                      />
                    </div>
                    <Form>
                      <div className="row">
                        <div className="col-6">
                          <Form.Label htmlFor="inputNombre">Nombre</Form.Label>
                          <Form.Control
                            type="text"
                            className=" inputRegister form-control"
                            id="inputNombre"
                            placeholder=" Jhon"
                            required
                          />
                        </div>
                        <div className="col-6">
                          <Form.Label htmlFor="inputApellido">
                            Apellido
                          </Form.Label>
                          <Form.Control
                            type="text"
                            className=" inputRegister form-control"
                            id="inputApellido"
                            placeholder="Smith"
                            required
                          />
                        </div>
                        <div className="col">
                          <Form.Label htmlFor="inputPassword4">
                            Correo Electronico
                          </Form.Label>
                          <Form.Control
                            type="email"
                            className=" inputRegister form-control"
                            id="inputPassword4"
                            required
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <Form.Label>Fecha de Nacimiento </Form.Label>
                          <DatePicker
                            value={fechaSeleccionada}
                            onChange={cambiarFechaSeleccionada}
                            className=" inputRegister form-control"
                          />
                        </div>
                        <div className="col-12">
                          <Form.Label className="col-md-4 control-Form.Label">
                            Telefono
                          </Form.Label>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="bi bi-telephone"></i>
                            </span>
                            <Form.Control
                              name="phone"
                              placeholder="(845)555-1212"
                              className=" inputRegister form-control"
                              type="text"
                              required
                            />
                          </div>
                        </div>
                        <div className="col">
                          <Form.Label htmlFor="inputAddress2">
                            {" "}
                            Contraseña
                          </Form.Label>
                          <Form.Control
                            type="password"
                            className=" inputRegister form-control"
                            id="Contraseña"
                            required
                          />
                        </div>
                        <div className="col">
                          <Form.Label htmlFor="inputAddress2">
                            Confirmar
                          </Form.Label>
                          <Form.Control
                            type="password"
                            className=" inputRegister form-control"
                            id="confirmarContraseña"
                            required
                          />
                        </div>
                      </div>

                      <Form.Group id="checkbox">
                        <Form.Check
                          type="checkbox"
                          label="Estoy de acuerdo con terminos y condiciones"
                        />
                      </Form.Group>
                      <Button variant="dark" type="submit">
                        Registrarse
                      </Button>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-none d-md-flex bg-image imagenregistro"></div>
      </div>
    </div>
  );
}
