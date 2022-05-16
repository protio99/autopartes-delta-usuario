import React from "react";
    /* Import DatPicker  */

import {DatePicker} from '@material-ui/pickers';
import  {useState} from "react";


export default function Register(props){
    /* PROCESS DATA SAVE  */
    const [fechaSeleccionada, cambiarFechaSeleccionada] = useState(new Date());
        console.log(fechaSeleccionada);
     return(
        <div>
        <div className="container-fluid">
          <div className="row no-gutter">
            <div className="col-md-6 bg-light">
              <div className="login d-flex align-items-center py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-10 col-xl-7 mx-auto">
                      <div className>
                        <h1 className="display-4">Ingresa tu informacion</h1>
                        <p className="text-muted ">
                          Necesitamos que nos ayudes con alguna información básica
                          para la creación de tu cuenta. Aquí están nuestros
                          Términos y condiciones Por favor, léalas cuidadosamente.
                        </p>
                      </div>
                      <div class="social-box">
                            <button class="social-login google"><img src="https://cdn.freebiesupply.com/logos/large/2x/google-icon-logo-png-transparent.png"/>Google</button>
                          </div>
                      <form onsubmit="return validarRegistro()">
                        <div className="row">
                          <div className="col-6">
                            <label for="inputEmail4">Nombre</label>
                            <input
                              type="text"
                              className=" inputRegister form-control"
                              id="inputEmail4"
                              placeholder=" Jhon"
                              required
                            />
                          </div>
                          <div className="col-6">
                            <label for="inputEmail4">Apellido</label>
                            <input
                              type="text"
                              className=" inputRegister form-control"
                              id="inputEmail4"
                              placeholder="Smith"
                              required
                            />
                          </div>
                          <div className="col">
                            <label for="inputPassword4">Correo Electronico</label>
                            <input
                              type="email"
                              className=" inputRegister form-control"
                              id="inputPassword4"
                              required
                            />
                          </div>
                        </div>
                        <div className="row">
                            <div className="col">
                              <label>Fecha de Nacimiento </label>
                              <DatePicker value={fechaSeleccionada} onChange={cambiarFechaSeleccionada} className=" inputRegister form-control"/>

                            </div>
                            <div className="col-12">
                              <label className="col-md-4 control-label">
                                Telefono
                              </label>
                              <div class="input-group">
                                        <span class="input-group-addon"><i class="bi bi-telephone"></i></span>
                                  <input name="phone" placeholder="(845)555-1212" class=" inputRegister form-control" type="text" required/>
                                    </div>
                            </div>
                            <div className="col">
                              <label for="inputAddress2"> Contraseña</label>
                              <input
                                type="password"
                                className=" inputRegister form-control"
                                id="confirmarContraseña"
                                required
                              />
                            </div>
                            <div className="col">
                              <label for="inputAddress2">Confirmar</label>
                              <input
                                type="password"
                                className=" inputRegister form-control"
                                id="confirmarContraseña"
                                required
                              />
                            </div>
                        </div>
                        
                        <div className="form-group">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="gridCheck"
                              required
                            />
                            <label className="form-check-label" for="gridCheck">
                              Estoy de acuerdo con terminos y condiciones
                            </label>
                          </div>
                        </div>
                        <button type="submit" className="btn btn-primary">
                          Registrarse
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-none d-md-flex bg-image imagenregistro"></div>
          </div>
        </div>
      </div>
     )
}