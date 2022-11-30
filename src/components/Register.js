import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

/* Import DatPicker  */
import { UserService } from ".././service/UserService";
import { RolesService } from ".././service/RolesService";
import { InputText } from "primereact/inputtext";
import GoogleLogin from "react-google-login";
import { Button, FormGroup } from "react-bootstrap";
import { Password } from "primereact/password";
import { Form, Field } from "react-final-form";
import { classNames } from "primereact/utils";
import "../styles/Register.css";
import { Checkbox } from "primereact/checkbox";
import { Toast } from "primereact/toast";

const _userService = new UserService();
const _rolService = new RolesService();

export default function Register(props) {
  /* PROCESS DATA SAVE  */
  const respuestaGoogle = (respuesta) => {
    console.log(respuesta);
  };

  const [checked, setChecked] = useState(false);
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [rolClient, setRolClient] = useState();

  const [userStatus] = useState(true);
  const toast = useRef(null);

  useEffect(() => {
    _userService.getUsers().then((response) => {
      setUsers(response);
    });
  }, []);

  useEffect(() => {
    _rolService.getRoles().then((response) => {
      setRoles(response);
    });
  }, []);

  const loadUsers = () => {
    _userService.getUsers().then((response) => {
      setUsers(response);
    });
  };

  useEffect(() => {
    roles.forEach((element) => {
      if (element.id === 2) {
        console.log(element.name);
        setRolClient(element.id);
      }
    });
  }, [setRolClient, roles]);

  console.log(rolClient);

  const initialValues = {
    idRol: null,
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  let history = useNavigate();

  function handleClickRedirect() {
    toast.current.show({
      severity: "success",
      summary: "Todo ha salido bien!",
      detail:
        "Se ha creado el usuario correctamente , seras redireccionado al login",
      life: 4000,
    });
    setTimeout(() => {
      history("/login", {replace: true});
    }, 4000);
  }
  function CreateUser(form, data) {
    // console.log(`Esta es los datos: ${data.name} ${data.lastname} rol: ${data.idRol.id} password: ${data.password} email ${data.email}`);

    _userService
      .createUser(
        data.email,
        data.password,
        data.name,
        data.lastname,
        userStatus,
        rolClient
      )
      .then(() => {
        handleClickRedirect();
        form.restart();
      })
      .catch((e) => {
        toast.current.show({
          severity: "error",
          summary: "Error",
          detail: "Upss algo salio mal, vuelve a intentarlo",
          life: 3000,
        });
        console.log(e);
      });
  }
  const validate = (data) => {
    let errors = {};

    if (!data.name) {
      errors.name = "El nombre es requerido";
    }

    if (!data.lastname) {
      errors.lastname = "El apellido es requerido";
    }

    if (!data.email) {
      errors.email = "El email es requerido";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
      errors.email = "Email invalido. E.g. example@email.com";
    } else
      users.forEach((element) => {
        const userMail = element.email;

        if (data.email === userMail) {
          errors.email = "El correo ya existe";
        }
      });

    if (!data.password) {
      errors.password = "Debe digitar una contraseña";
    }

    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = "Las contraseñas no coinciden";
    }

    return errors;
  };
  const onSubmit = (data, form) => {
    // setUserEmail(data.email);
    // setUserName(data.name);
    // setUserLastname(data.lastname);
    // setUserPassword(data.password);
    // setSelectedUserRole(data.idRol);
    // const userObject = {
    //     email : data.email,
    //     name : data.name,
    //     lastname: data.lastname,
    //     password : data.password,
    //     rol: data.idRol,
    // }
    CreateUser(form, data);
  };
  const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
  const getFormErrorMessage = (meta) => {
    return (
      isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>
    );
  };

  return (
    <div>
      <Toast ref={toast} />

      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="col-md-6 bg-light">
            <div className=" d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="intento">
                    <div className="col-lg-10 col-xl-7 mx-auto">
                      <div className="d-flex flex-column">
                        <h1 className="display-6 titleRegister">
                          Ingresa tu información
                        </h1>
                        <p className="text-muted">
                          Necesitamos que nos ayudes con alguna información
                          básica para la creación de tu cuenta. Aquí están
                          nuestros Términos y condiciones Por favor, léalas
                          cuidadosamente.
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
                      <Form
                        onSubmit={onSubmit}
                        initialValues={initialValues}
                        validate={validate}
                        render={({ handleSubmit }) => (
                          <form onSubmit={handleSubmit}>
                            <FormGroup className="d-flex flex-column p-fluid pt-4">
                              <div className="row">
                                <div className="col-6">
                                  <Field
                                    name="name"
                                    render={({ input, meta }) => (
                                      <div className="field">
                                        <span>
                                          <label
                                            htmlFor="name"
                                            className={classNames({
                                              "p-error":
                                                isFormFieldValid("name"),
                                            })}
                                          >
                                            Nombre
                                          </label>
                                          <br />
                                          <InputText
                                            id="name"
                                            {...input}
                                            placeholder="Digite el Nombre"
                                            className={classNames({
                                              "p-invalid":
                                                isFormFieldValid(meta),
                                              inputUsers: true,
                                            })}
                                          />
                                        </span>
                                        <br />
                                        {getFormErrorMessage(meta)}
                                      </div>
                                    )}
                                  />
                                </div>
                                <div className="col-6 ">
                                  <Field
                                    name="lastname"
                                    render={({ input, meta }) => (
                                      <div className="field">
                                        <span>
                                          <label
                                            htmlFor="lastname"
                                            className={classNames({
                                              "p-error":
                                                isFormFieldValid("lastmane"),
                                            })}
                                          >
                                            Apellido
                                          </label>
                                          <br />
                                          <InputText
                                            id="lastname"
                                            {...input}
                                            placeholder="Digite el apellido"
                                            className={classNames({
                                              "p-invalid":
                                                isFormFieldValid(meta),
                                              inputUsers: true,
                                            })}
                                          />
                                        </span>
                                        <br />
                                        {getFormErrorMessage(meta)}
                                      </div>
                                    )}
                                  />
                                </div>
                                <div className="col pt-4">
                                  <Field
                                    name="email"
                                    render={({ input, meta }) => (
                                      <div className="field">
                                        <span>
                                          <label
                                            htmlFor="email"
                                            className={classNames({
                                              "p-error":
                                                isFormFieldValid("email"),
                                            })}
                                          >
                                            Correo Electronico
                                          </label>
                                          <br />
                                          <InputText
                                            id="email"
                                            {...input}
                                            placeholder="Correo Electrónico"
                                            className={classNames({
                                              "p-invalid":
                                                isFormFieldValid(meta),
                                              inputUsers: true,
                                            })}
                                          />
                                        </span>
                                        <br />
                                        {getFormErrorMessage(meta)}
                                      </div>
                                    )}
                                  />
                                </div>
                              </div>
                              <div className="row">
                                <div className="col pt-4">
                                  <Field
                                    name="password"
                                    render={({ input, meta }) => (
                                      <div className="field">
                                        <span>
                                          <label
                                            htmlFor="password"
                                            className={classNames({
                                              "p-error":
                                                isFormFieldValid("password"),
                                            })}
                                          >
                                            Contraseña
                                          </label>
                                          <Password
                                            id="password"
                                            {...input}
                                            placeholder="Digite Contraseña"
                                            className={classNames({
                                              "p-invalid":
                                                isFormFieldValid(meta),
                                            })}
                                            toggleMask
                                          />
                                        </span>
                                        <br />
                                        {getFormErrorMessage(meta)}
                                      </div>
                                    )}
                                  />
                                </div>
                                <div className="col pt-4">
                                  <Field
                                    name="confirmPassword"
                                    render={({ input, meta }) => (
                                      <div className="field">
                                        <span>
                                          <label
                                            htmlFor="confirmPassword"
                                            className={classNames({
                                              "p-error":
                                                isFormFieldValid(
                                                  "confirmPassword"
                                                ),
                                            })}
                                          >
                                            Confirmar Contraseña
                                          </label>
                                          <br />
                                          <Password
                                            id="confirmPassword"
                                            {...input}
                                            placeholder="confirme su contraseña"
                                            className={classNames({
                                              "p-invalid":
                                                isFormFieldValid(meta),
                                              passwordUsers: true,
                                            })}
                                            toggleMask
                                          />
                                        </span>
                                        <br />
                                        {getFormErrorMessage(meta)}
                                      </div>
                                    )}
                                  />
                                </div>
                              </div>

                              <div className="field-checkbox p-4">
                                <Checkbox
                                  inputId="binary"
                                  checked={checked}
                                  onChange={(e) => setChecked(e.checked)}
                                  required
                                />
                                <label htmlFor="binary" className="mx-2">
                                  Aceptar Terminos y Condiciones
                                </label>
                              </div>
                              <Button variant="dark" type="submit">
                                Registrarse
                              </Button>
                            </FormGroup>
                          </form>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-flex bg-image imagenregistro"></div>
        </div>
      </div>
    </div>
  );
}
