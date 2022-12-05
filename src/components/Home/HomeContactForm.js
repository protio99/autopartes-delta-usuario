import React, { useRef } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import "./homeContactForm.css";
import { Button } from "primereact/button";
import { Form, Field } from "react-final-form";
import { classNames } from "primereact/utils";
import { AuthService } from "../../service/authService";
import { Toast } from "primereact/toast";

const _authService = new AuthService();

export default function HomeContactForm() {
  const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
  const toast = useRef(null);
  const getFormErrorMessage = (meta) => {
    return (
      isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>
    );
  };
  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Listo!",
      detail:
        "Hemos enviado tu mensaje, intentaremos comunicarnos contigo lo antes posible",
      life: 4000,
    });
  };
  const showError = () => {
    toast.current.show({
      severity: "warn",
      summary: "Upss",
      detail: "Algo salio mal al enviar tu mensaje, vuelve a intentarlo",
      life: 4000,
    });
  };
  const validate = (data) => {
    let errors = {};

    if (!data.name) {
      errors.name = "El nombre es requerido.";
    }
    if (!data.lastname) {
      errors.lastname = "El/los apellido(s) son requeridos.";
    }
    if (!data.contactNumber) {
      errors.contactNumber = "Un número de contacto es requerido.";
    }
    if (!data.message) {
      errors.message = "Debe proporcionar una razón de contacto.";
    }
    if (!data.email) {
      errors.email = "El email es requerido.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
      errors.email = "Email invalido. Ejemplo. example@email.com";
    }

    return errors;
  };
  const onSubmit = (data, form) => {
    const contactInformation = {
      name: data.name,
      lastname: data.lastname,
      contactNumber: data.contactNumber,
      message: data.message,
      email: data.email,
    };

    _authService
      .sendPQR(contactInformation)
      .then((response) => {
        showSuccess();
        form.reset();
      })
      .catch((error) => {
        showError();
        console.log("Algo salio mal al enviar el mensaje ", error);
      });
  };
  const initialValues = {
    name: "",
    lastname: "",
    contactNumber: "",
    message: "",
    email: "",
  };
  return (
    <>
      <Toast ref={toast} />
      <div className="dc-home-form">
        <p className="dc-home-form__p">
          Diligencia el siguiente formulario para comunicarnos contigo.
        </p>
        <div className="dc-home-form__form">
          <Form
            onSubmit={onSubmit}
            initialValues={initialValues}
            validate={validate}
            render={({ handleSubmit, form }) => (
              <>
                <form onSubmit={handleSubmit} id="contact-form">
                  <div className="dc-home-form__form">
                    <Field
                      name="name"
                      render={({ input, meta }) => (
                        <div>
                          <span className="dc-contact-form__span">
                            <label
                              htmlFor="name"
                              className={classNames({
                                "p-error": isFormFieldValid("name"),
                                "create-product-form__label-cc": true,
                              })}
                            >
                              Nombre
                            </label>
                            <InputText
                              id="name"
                              {...input}
                              className={classNames({
                                "p-invalid": isFormFieldValid(meta),
                                "dc-home-form__form__input": true,
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
                          <span className="dc-contact-form__span">
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
                              className={classNames({
                                "p-invalid": isFormFieldValid(meta),
                                "dc-home-form__form__input": true,
                              })}
                              placeholder="Apellidos"
                            />
                          </span>
                          {getFormErrorMessage(meta)}
                        </div>
                      )}
                    />

                    <Field
                      name="contactNumber"
                      render={({ input, meta }) => (
                        <div>
                          <span className="dc-contact-form__span">
                            <label
                              htmlFor="contactNumber"
                              className={classNames({
                                "p-error": isFormFieldValid("contactNumber"),
                                "create-product-form__label": true,
                              })}
                            >
                              Número de contacto
                            </label>
                            <InputText
                              id="contactNumber"
                              {...input}
                              className={classNames({
                                "p-invalid": isFormFieldValid(meta),
                                "dc-home-form__form__input": true,
                              })}
                              placeholder="Número de contacto"
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
                          <span className="dc-contact-form__span">
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
                              className={classNames({
                                "p-invalid": isFormFieldValid(meta),
                                "dc-home-form__form__input": true,
                              })}
                              placeholder="Email"
                            />
                          </span>
                          {getFormErrorMessage(meta)}
                        </div>
                      )}
                    />
                    <Field
                      name="message"
                      render={({ input, meta }) => (
                        <div>
                          <span className="dc-contact-form__span">
                            <label
                              htmlFor="message"
                              className={classNames({
                                "p-error": isFormFieldValid("message"),
                                "create-product-form__label": true,
                              })}
                            >
                              Mensaje
                            </label>
                            <InputTextarea
                              id="message"
                              {...input}
                              className={classNames({
                                "p-invalid": isFormFieldValid(meta),
                                "dc-home-form__form__input": true,
                              })}
                              placeholder="Mensaje"
                              rows={5}
                              cols={30}
                            />
                          </span>
                          {getFormErrorMessage(meta)}
                        </div>
                      )}
                    />
                  </div>

                  <Button
                    type="submit"
                    label="Enviar mensaje"
                    className="p-button-raised dc-home-form__form__btn"
                  ></Button>
                </form>
              </>
            )}
          />
        </div>
      </div>
    </>
  );
}
