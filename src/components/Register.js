import React from "react";
/* Import DatPicker  */

import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { useState } from "react";
import GoogleLogin from "react-google-login";
import { Form, Button } from "react-bootstrap";
import { Password } from 'primereact/password';
import { InputNumber } from 'primereact/inputnumber';
import "../styles/Register.css";
import { Checkbox } from 'primereact/checkbox';
export default function Register(props) {
  /* PROCESS DATA SAVE  */
  const respuestaGoogle = (respuesta) => {
    console.log(respuesta);
  };
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [date1, setDate1] = useState(null);
  const [value4, setValue4] = useState(null);
  const [value5, setValue5] = useState('');
  const [checked, setChecked] = useState(false)

  
  
  return (
    <div className="container-fluid">
      <div className="row no-gutter">
        <div className="col-md-6 bg-light">
          <div className=" d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="intento">
                  <div className="col-lg-10 col-xl-7 mx-auto">
                    <div className="d-flex flex-column">
                      <h1 className="display-6 titleRegister">Ingresa tu informacion</h1>
                      <p className="text-muted">
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
                    <Form className="d-flex flex-column p-fluid pt-4">
                      <div className="row">
                        <div className="col-6">
                        <span className="p-float-label">
                            <InputText id="username" value={value1} onChange={(e) => setValue1(e.target.value)} required/>
                            <label htmlFor="username">Nombre</label>
                        </span>
                        </div>
                        <div className="col-6 ">
                              <span className="p-float-label">
                                  <InputText id="username" value={value2} onChange={(e) => setValue2(e.target.value)} required/>
                                  <label htmlFor="username">Apellido</label>
                            </span>
                        </div>
                        <div className="col pt-4">
                        <span className="p-float-label">
                            <InputText id="username" value={value3} onChange={(e) => setValue3(e.target.value)}  type="email" required/>
                            <label htmlFor="username">Correo Electronico</label>
                        </span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col pt-4">
                        <span className="p-float-label">                    
                              <Password value={value5} onChange={(e) => setValue5(e.target.value)} required />
                            <label htmlFor="username">Contraseña</label>
                        </span>
                        </div>
                        <div className="col pt-4">
                        <span className="p-float-label">                    
                              <Password value={value5} onChange={(e) => setValue5(e.target.value)} required/>
                            <label htmlFor="username">Confirmar Contraseña</label>
                        </span>
                        </div>
                      </div>

                      <div className="field-checkbox p-4">
                        <Checkbox inputId="binary" checked={checked} onChange={e => setChecked(e.checked)} required />
                        <label htmlFor="binary" className="mx-2">Aceptar Terminos y Condiciones</label>
                    </div>
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
