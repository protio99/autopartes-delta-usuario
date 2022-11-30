import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import "./checkoutShippingForm.css";
import { Button } from "primereact/button";
import { Form, Field } from "react-final-form";
import { classNames } from "primereact/utils";
import { InputTextarea } from "primereact/inputtextarea";

export default function CheckoutShippingForm({
  setActiveIndex,
  enabledForm,
  editForm,
  setEditForms,
  setDisabledPayment,
}) {
  const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
  const getFormErrorMessage = (meta) => {
    return (
      isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>
    );
  };
  const shippingInformationLS = JSON.parse(
    localStorage.getItem("shippingInformation")
  );

  const departments = [
    { name: "Antioquia", code: "CC" },
    { name: "Cundinamarca", code: "TI" },
    { name: "Amazonas", code: "CE" },
    { name: "Arauca", code: "PT" },
    { name: "Atlantico", code: "Otro" },
  ];
  const initialValues = {
    address:
      editForm && shippingInformationLS ? shippingInformationLS.address : "",
    country:
      editForm && shippingInformationLS ? shippingInformationLS.country : "",
    department:
      editForm && shippingInformationLS ? shippingInformationLS.department : "",
    city: editForm && shippingInformationLS ? shippingInformationLS.city : "",
    neighborhood:
      editForm && shippingInformationLS
        ? shippingInformationLS.neighborhood
        : "",
    indications: null,
  };

  // const onRegionChange = (e) => {
  //   setSelectedRegion(e.value);
  // };
  const validate = (data) => {
    let errors = {};
    if (!data.address) {
      errors.address = "La dirección es requerida.";
    }
    if (!data.country) {
      errors.country = "El pais es requerido";
    }

    if (!data.department) {
      errors.department = "Debe seleccionar un departamento.";
    }

    if (!data.city) {
      errors.city = "La ciudad es requerida.";
    }
    if (!data.neighborhood) {
      errors.neighborhood = "El barrio es requerido.";
    }

    return errors;
  };
  const onSubmit = (data, form) => {
    const contactInformation = {
      address: data.address,
      country: data.country,
      department: data.department,
      city: data.city,
      neighborhood: data.neighborhood,
      email: data.email,
      indications: data.indications,
    };
    localStorage.setItem(
      "shippingInformation",
      JSON.stringify(contactInformation)
    );
    setActiveIndex(1);
    setDisabledPayment(false);
  };
  return (
    <>
      <div className="dc-checkout-personal__form">
        <div className="dc-checkout-personal__form__header">
          <h5 className={enabledForm ? "enabled-form" : ""}>
            Información de envio
          </h5>
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
                    name="address"
                    render={({ input, meta }) => (
                      <div>
                        <span className="personal-information__form">
                          <label
                            htmlFor="address"
                            className={classNames({
                              "p-error": isFormFieldValid("address"),
                              "create-product-form__label": true,
                              "enabled-form": enabledForm,
                            })}
                          >
                            Dirección
                          </label>
                          <InputText
                            id="address"
                            disabled={enabledForm}
                            {...input}
                            autoFocus
                            className={classNames({
                              "p-invalid": isFormFieldValid(meta),
                              "create-product-form__input": true,
                            })}
                            placeholder="Dirección"
                          />
                        </span>
                        {getFormErrorMessage(meta)}
                      </div>
                    )}
                  />
                  <Field
                    name="country"
                    render={({ input, meta }) => (
                      <div>
                        <span className="personal-information__form">
                          <label
                            htmlFor="country"
                            className={classNames({
                              "p-error": isFormFieldValid("country"),
                              "create-product-form__label": true,
                              "enabled-form": enabledForm,
                            })}
                          >
                            Pais
                          </label>
                          <InputText
                            id="country"
                            {...input}
                            disabled={enabledForm}
                            className={classNames({
                              "p-invalid": isFormFieldValid(meta),
                              "create-product-form__input": true,
                            })}
                            placeholder="Pais"
                          />
                        </span>
                        {getFormErrorMessage(meta)}
                      </div>
                    )}
                  />

                  <Field
                    name="department"
                    render={({ input, meta }) => (
                      <div className="">
                        <span className="personal-information__form">
                          <label
                            htmlFor="department"
                            className={classNames({
                              "p-error": isFormFieldValid("department"),
                              "enabled-form": enabledForm,
                            })}
                          >
                            Departamento
                          </label>
                          <Dropdown
                            id="department"
                            disabled={enabledForm}
                            {...input}
                            className={classNames({
                              "p-invalid": isFormFieldValid(meta),
                              "create-product-form__dropdown": true,
                            })}
                            options={departments}
                            optionLabel="name"
                            optionValue="name"
                            placeholder="Departamento"
                          />
                        </span>
                        {getFormErrorMessage(meta)}
                      </div>
                    )}
                  />

                  <Field
                    name="city"
                    render={({ input, meta }) => (
                      <div>
                        <span className="personal-information__form">
                          <label
                            htmlFor="city"
                            className={classNames({
                              "p-error": isFormFieldValid("city"),
                              "create-product-form__label": true,
                              "enabled-form": enabledForm,
                            })}
                          >
                            Ciudad
                          </label>
                          <InputText
                            id="city"
                            disabled={enabledForm}
                            {...input}
                            className={classNames({
                              "p-invalid": isFormFieldValid(meta),
                              "create-product-form__input": true,
                            })}
                            placeholder="Ciudad"
                          />
                        </span>
                        {getFormErrorMessage(meta)}
                      </div>
                    )}
                  />
                  <Field
                    name="neighborhood"
                    render={({ input, meta }) => (
                      <div>
                        <span className="personal-information__form">
                          <label
                            htmlFor="neighborhood"
                            className={classNames({
                              "p-error": isFormFieldValid("neighborhood"),
                              "create-product-form__label": true,
                              "enabled-form": enabledForm,
                            })}
                          >
                            Barrio
                          </label>
                          <InputText
                            id="neighborhood"
                            {...input}
                            disabled={enabledForm}
                            className={classNames({
                              "p-invalid": isFormFieldValid(meta),
                              "create-product-form__input": true,
                              "enabled-form": enabledForm,
                            })}
                            placeholder="Barrio"
                          />
                        </span>
                        {getFormErrorMessage(meta)}
                      </div>
                    )}
                  />
                  <Field
                    name="indications"
                    render={({ input, meta }) => (
                      <div>
                        <span className="personal-information__form">
                          <label
                            htmlFor="indications"
                            className={classNames({
                              "p-error": isFormFieldValid("indications"),
                              "create-product-form__label": true,
                              "enabled-form": enabledForm,
                            })}
                          >
                            Inidicaciones
                          </label>
                          <InputTextarea
                            disabled={enabledForm}
                            id="indications"
                            {...input}
                            className={classNames({
                              "p-invalid": isFormFieldValid(meta),
                              "create-product-form__input": true,
                            })}
                            placeholder="Indicaciones adicionales"
                            rows={5}
                            cols={30}
                          />
                        </span>
                      </div>
                    )}
                  />
                </div>
                <div className="left-buttons">
                  <Button
                    type="submit"
                    label="Siguiente"
                    className="p-button-secondary dc-checkout-shipping__button__next "
                    onClick={() => setEditForms(false)}
                  ></Button>
                </div>
              </form>
            </>
          )}
        />
      </div>
    </>
  );
}
