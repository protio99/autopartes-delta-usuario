import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Link } from "react-router-dom";
import "./checkoutContactForm.css";
import { Form, Field } from "react-final-form";
import { classNames } from "primereact/utils";
import { Button } from "primereact/button";

export default function CheckoutContactForm({ setContactFormFilled }) {
  // const [nombre, setNombre] = useState("");
  // const [apellidos, setApellidos] = useState("");
  // const [numero_documento, setNumDocumento] = useState("");
  // const [telefono, setTelefono] = useState("");
  // const [email, setEmail] = useState("");
  // const [selected_tipo, setSelectedTipo] = useState(null);
  const [formFilled, setFormFilled] = useState(null);
  const initialValues = {
    name: "",
    lastname: "",
    documentType: "",
    documentNumber: "",
    telephone: "",
    email: "",
  };
  const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
  const getFormErrorMessage = (meta) => {
    return (
      isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>
    );
  };
  const validate = (data) => {
    let errors = {};
    // let validateExistingId = products.map((product) => {
    //     if (product.id === data.name) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // });
    // if (selectedVehicles.length === 0) {
    //     errors.selectedVehicles = "Debe seleccionar al menos un vehiculo al producto.";
    // }
    // if (validateExistingId.includes(true)) {
    //     errors.name = "El producto con referencia " + data.name  + " ya existe, ingrese una referencia diferente";
    // }
    if (!data.name) {
      errors.name = "El nombre es requerido.";
    }
    if (!data.lastname) {
      errors.lastname = "El/Los apellido(s) son requeridos.";
    }

    if (!data.documentType) {
      errors.documentType = "Debe seleccionar un tipo de documento.";
    }

    if (!data.documentNumber) {
      errors.documentNumber = "Debe ingresar un número de documento.";
    }
    if (!data.telephone) {
      errors.telephone = "El número de teléfono es requerido.";
    }
    if (!data.email) {
      errors.email = "El email es requerido.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
      errors.email = "Email invalido. Ejemplo. example@email.com";
    }

    return errors;
  };
  const documentsTypes = [
    { name: "Cedula de ciudadania", code: "CC" },
    { name: "Tarjeta de identidad", code: "TI" },
    { name: "Cedula de extranjeria", code: "CE" },
    { name: "Pasaporte", code: "PT" },
    { name: "Otro", code: "Otro" },
  ];

  // const onTipoChange = (e) => {
  //   setSelectedTipo(e.value);
  // };

  const onSubmit = (data, form) => {
    const contactInformation = {
      name: data.name,
      lastname: data.lastname,
      documentType: data.documentType,
      documentNumber: data.documentNumber,
      telephone: data.telephone,
      email: data.email,
    };
    localStorage.setItem(
      "contactInformation",
      JSON.stringify(contactInformation)
    );
    setContactFormFilled(false);
  };

  return (
    <>
      <div className="dc-checkout-personal__form">
        <div className="dc-checkout-personal__form__header">
          <h5>Información de contacto</h5>
          <div>
            ¿Tienes una cuenta?{" "}
            <Link to={"/Login"} className="dc-link">
              <strong>Inicia sesión</strong>
            </Link>
          </div>
        </div>
        <Form
          onSubmit={onSubmit}
          initialValues={initialValues}
          validate={validate}
          render={({ handleSubmit }) => (
            <>
              <form onSubmit={handleSubmit}>
                <div className="dc-checkout-personal__form__input">
                  <Field
                    name="name"
                    render={({ input, meta }) => (
                      <div>
                        <span className="personal-information__form">
                          <label
                            htmlFor="name"
                            className={classNames({
                              "p-error": isFormFieldValid("name"),
                              "create-product-form__label": true,
                            })}
                          >
                            Nombre
                          </label>
                          <InputText
                            id="name"
                            {...input}
                            autoFocus
                            className={classNames({
                              "p-invalid": isFormFieldValid(meta),
                              "create-product-form__input": true,
                            })}
                            placeholder="Nombre"
                          />
                        </span>
                        {getFormErrorMessage(meta)}
                      </div>
                    )}
                  />
                  <Field
                    name="lastname"
                    render={({ input, meta }) => (
                      <div>
                        <span className="personal-information__form">
                          <label
                            htmlFor="lastname"
                            className={classNames({
                              "p-error": isFormFieldValid("lastname"),
                              "create-product-form__label": true,
                            })}
                          >
                            Apellidos
                          </label>
                          <InputText
                            id="lastname"
                            {...input}
                            autoFocus
                            className={classNames({
                              "p-invalid": isFormFieldValid(meta),
                              "create-product-form__input": true,
                            })}
                            placeholder="Apellidos"
                          />
                        </span>
                        {getFormErrorMessage(meta)}
                      </div>
                    )}
                  />
                  <Field
                    name="documentType"
                    render={({ input, meta }) => (
                      <div className="">
                        <span className="personal-information__form">
                          <label
                            htmlFor="documentType"
                            className={classNames({
                              "p-error": isFormFieldValid("documentType"),
                            })}
                          >
                            Tipo de documento
                          </label>
                          <Dropdown
                            id="documentType"
                            {...input}
                            className={classNames({
                              "p-invalid": isFormFieldValid(meta),
                              "create-product-form__dropdown": true,
                            })}
                            options={documentsTypes}
                            optionLabel="name"
                            optionValue="name"
                            placeholder="Tipo de documento"
                          />
                        </span>
                        {getFormErrorMessage(meta)}
                      </div>
                    )}
                  />
                  <Field
                    name="documentNumber"
                    render={({ input, meta }) => (
                      <div>
                        <span className="personal-information__form">
                          <label
                            htmlFor="documentNumber"
                            className={classNames({
                              "p-error": isFormFieldValid("documentNumber"),
                              "create-product-form__label": true,
                            })}
                          >
                            Número de documento
                          </label>
                          <InputText
                            id="documentNumber"
                            {...input}
                            autoFocus
                            className={classNames({
                              "p-invalid": isFormFieldValid(meta),
                              "create-product-form__input": true,
                            })}
                            placeholder="Número"
                          />
                        </span>
                        {getFormErrorMessage(meta)}
                      </div>
                    )}
                  />
                  <Field
                    name="telephone"
                    render={({ input, meta }) => (
                      <div>
                        <span className="personal-information__form">
                          <label
                            htmlFor="telephone"
                            className={classNames({
                              "p-error": isFormFieldValid("telephone"),
                              "create-product-form__label": true,
                            })}
                          >
                            Teléfono
                          </label>
                          <InputText
                            id="telephone"
                            {...input}
                            autoFocus
                            className={classNames({
                              "p-invalid": isFormFieldValid(meta),
                              "create-product-form__input": true,
                            })}
                            placeholder="Teléfono"
                          />
                        </span>
                        {getFormErrorMessage(meta)}
                      </div>
                    )}
                  />
                  <Field
                    name="email"
                    render={({ input, meta }) => (
                      <div>
                        <span className="personal-information__form">
                          <label
                            htmlFor="email"
                            className={classNames({
                              "p-error": isFormFieldValid("email"),
                              "create-product-form__label": true,
                            })}
                          >
                            Email
                          </label>
                          <InputText
                            id="email"
                            {...input}
                            autoFocus
                            className={classNames({
                              "p-invalid": isFormFieldValid(meta),
                              "create-product-form__input": true,
                            })}
                            placeholder="Email"
                          />
                        </span>
                        {getFormErrorMessage(meta)}
                      </div>
                    )}
                  />
                </div>
                <Button
                  type="submit"
                  label="Continuar"
                  className="p-button-secondary dc-checkout-shipping__button__next "
                ></Button>
              </form>
            </>
          )}
        />
      </div>
    </>
  );
}
