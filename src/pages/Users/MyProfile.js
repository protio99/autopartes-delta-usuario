import React, { useState, useEffect, useRef } from "react";
import { InputText } from "primereact/inputtext";
import "./user.css";
import { NavLink } from "react-router-dom";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { UserService } from "../../service/UserService";
import { Form, Field } from "react-final-form";
import { classNames } from "primereact/utils";
import { Password } from "primereact/password";
import { ConfirmDialog,confirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";


const _userService = new UserService();

export default function MyProfile() {
  const toast = useRef(null);
  const [displayDialogStatusPassword, setDisplayDialogStatusPassword] = useState(false);
  const [displayBasic2, setDisplayBasic2] = useState(false);
  const [users, setUsers] = useState([]);
  const [allUser, setAllUser] = useState([]);

  const [userEdit, setUsersEdit] = useState([]);
  const [setPosition] = useState("center");
  const [visibleTrue, setVisibleTrue] = useState(false);
  const [visibleFalse, setVisibleFalse] = useState(false);

  // const [userConfirmPassword, setUserConfirmPassword] = useState();
  // const [confirmationPassword, setConfirmationPassword] = useState();
  const dialogFuncMap = {
    displayBasic2: setDisplayBasic2,
  };
  const refreshPage2 = ()=>{
    setDisplayDialogStatusPassword(false);
    setUsersEdit(users);
  }
  const refreshPage3 = ()=>{
    setDisplayBasic2(true)
    setUsersEdit(users);
  }
const onHideDialogEdit = () => {
      setVisibleFalse(false); 
      setVisibleTrue(false);
      setUsersEdit(users)
};
const loadUser = () => {
  _userService.getUser(users.id).then((response) => {
      setUsers(response);
  });
};

  const onClick = (name, position) => {
    dialogFuncMap[`${name}`](true);

    if (position) {
      setPosition(position);
    }
  };
  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };
  useEffect(() => {
    _userService.getUsers().then((response) => {
        setAllUser(response);
    });
}, []);
  useEffect(() => {
    const token = localStorage.getItem("tokenUser");
    _userService
      .getPreviousUser(token)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
//   const loadConfirmation = () => {
//     _userService.getRealPassword(userConfirmPassword).then((response) => {
//         setUsers(response);
//     });
// };
// const loadStatusPassword = () => {
//   _userService
//   .getRealPassword(userConfirmPassword,users.password)
//   .then((response) => {
//     setConfirmationPassword(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// };
    function EditUser() {
      _userService
          .updateUser(userEdit)
          .then(() => {
              setUsersEdit(users);
              loadUser();
              toast.current.show({ severity: "success", summary: "Confirmación", detail: "Has editado tus datos exitosamente", life: 3000 });
          })
          .catch((e) => {
            console.log(userEdit);
            allUser.forEach((element) => {
                  const userMail = element.email;

                  if (userEdit.email === userMail) {
                    toast.current.show({ severity: "warn", summary: "Correo incorrecto", detail: "El correo ya existe intente editarlo con otro", life: 3000 });
                  }
              });
          });
    }
  useEffect(() => {
    setUsersEdit(users);
  }, [setUsersEdit, users]);
  //----------------------EDIT VALIDATION --------------------
  const validateEdit = (data) => {
    let errors = {};

    if (!data.name) {
      errors.name = "El nombre es requerido";
    }

    if (!data.lastname) {
      errors.lastname = "El apellido es requerido";
    }


    return errors;
  };

  const initialValuesEdit = {
    name: userEdit.name,
    lastname: userEdit.lastname,
    // confirmPassword: "",
  };
  const onSubmitEdit = () => {

    setDisplayDialogStatusPassword(true);
    setDisplayBasic2(false);

  };
      const validateStatusPassword = (data) => {
        let errors = {};

        if (!data.confirmPassword){
          errors.confirmPassword = "Debes confirmar contraseña";
        }

        
        return errors;
    };
    const onHideDialogStatusPasswordX = () => {
      setDisplayDialogStatusPassword(false);
      setDisplayBasic2(true);
  };
    const onHideDialogCancelStatusPassword = () => {
      setDisplayDialogStatusPassword(false);
      setDisplayBasic2(true);


  };
    const initialValuesStatusPassword = {

        confirmPassword: " ",
        // confirmPassword: "",
        
    };
    const onSubmitStatusPassword = (data) => {
      // editUserAlert();
      console.log(users);
      console.log(userEdit);
      console.log("entro");
      _userService
      .getRealPassword(data.confirmPassword,users.password)
      .then((response) => {
        if(response.data){
          setDisplayDialogStatusPassword(false);
          setVisibleTrue(true);
        }
      })
      .catch((error) => {
        setDisplayDialogStatusPassword(false);
        setVisibleFalse(true);

      });
    };

  const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
  const getFormErrorMessage = (meta) => {
    return (
      isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>
    );
  };
  const onEditUserSelected = (e) => {
    const userUpdated = {
      ...userEdit,
      [e.target.name]: e.target.value,
    };
    
    setUsersEdit(userUpdated);
  };

  return (
    <div>
      <Toast ref={toast} />
      <div className="containerUsers">
        <h4 className="user__title">Resumen de cuenta</h4>
        <div className="form__users d-flex pt-5">
          <label htmlFor=""></label>
          <div className="form__first">
            <span className="p-float-label">
              <InputText id="inputtext" 
              value={users.name || ''}
               disabled />
              <label htmlFor="inputtext">Nombre</label>
            </span>
            <span className="p-float-label">
              <InputText
                className=" "
                id="inputtext"
                value={users.lastname || ''}
                disabled
              />
              <label htmlFor="inputtext">Apellido</label>
            </span>
          </div>
          <div className="form__second">
            <span className="p-float-label">
              <InputText id="inputtext" 
              value={users.email || ''}
               disabled />
              <label htmlFor="inputtext">Email</label>
            </span>
            <span className="p-float-label">
              <InputText
                id="inputtext"
                value={users.createdAt || ''}
                className="form__padding"
                disabled
              />
              <label htmlFor="inputtext">Fecha de Registro</label>
            </span>
          </div>
        </div>
        <div className="buttons__users">
          <Button
            label="Editar Datos"
            className="btn__users__edit"
            icon="pi pi-external-link"
            onClick={() => onClick("displayBasic2")}
          />
          <NavLink to={"/UserResetPassword"} className="navlink-style">
            <Button
              label="Cambiar Contraseña"
              aria-label="Submit"
              className="btn__users__password"
            />
          </NavLink>
          <Dialog
            header="Edita Tus Datos"
            visible={displayBasic2}
            style={{ width: "80vw" }}
            onHide={() => onHide("displayBasic2",setUsersEdit(users))}
          >
            <Form
              onSubmit={onSubmitEdit}
              initialValues={initialValuesEdit}
              validate={validateEdit}
              render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <div className="form__edit d-flex pt-5">
                    <label htmlFor=""></label>
                    <Field
                      name="email"
                      render={({ input, meta }) => (
                        <div className="field">
                          <span>
                            <label
                              htmlFor="email"
                              className={classNames({
                                "p-error": isFormFieldValid("email"),
                              })}
                            >
                              Correo Electrónico
                            </label>
                            <br />
                            <InputText
                              id="email"
                              disabled
                              onChange={onEditUserSelected}
                              placeholder="Correo Electrónico"
                              className={classNames({
                                "p-invalid": isFormFieldValid(meta),
                                inputUsers: true,
                              })}
                            />
                          </span>
                          <br />
                          {getFormErrorMessage(meta)}
                        </div>
                      )}
                    />
                    <Field
                      name="name"
                      render={({ input, meta }) => (
                        <div className="field">
                          <span>
                            <label
                              htmlFor="name"
                              className={classNames({
                                "p-error": isFormFieldValid("name"),
                              })}
                            >
                              Nombre
                            </label>
                            <br />
                            <InputText
                              id="name"
                              {...input}
                              onChange={onEditUserSelected}
                              placeholder="Digite el Nombre"
                              className={classNames({
                                "p-invalid": isFormFieldValid(meta),
                                inputUsers: true,
                              })}
                            />
                          </span>
                          <br />
                          {getFormErrorMessage(meta)}
                        </div>
                      )}
                    />
                    <Field
                      name="lastname"
                      render={({ input, meta }) => (
                        <div className="field">
                          <span>
                            <label
                              htmlFor="lastname"
                              className={classNames({
                                "p-error": isFormFieldValid("lastmane"),
                              })}
                            >
                              Apellido
                            </label>
                            <br />
                            <InputText
                              id="lastname"
                              {...input}
                              onChange={onEditUserSelected}
                              placeholder="Digite el apellido"
                              className={classNames({
                                "p-invalid": isFormFieldValid(meta),
                                inputUsers: true,
                              })}
                            />
                          </span>
                          <br />
                          {getFormErrorMessage(meta)}
                        </div>
                      )}
                    />
                    <Field
                      name="createdAt"
                      render={({ input, meta }) => (
                        <div className="field">
                          <span>
                            <label
                              htmlFor="createdAt"
                              className={classNames({
                                "p-error": isFormFieldValid("createdAt"),
                              })}
                            >
                              Fecha de Registro
                            </label>
                            <br />
                            <InputText
                              value={users.createdAt}
                              id="createdAt"
                              disabled
                              className={classNames({
                                "p-invalid": isFormFieldValid(meta),
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
                  <div className="form__buttons_edit">
                        <Button
                          label="Cancelar"
                          icon="pi pi-times"
                          onClick={() => onHide("displayBasic2",setUsersEdit(users))}
                          className="p-button-text"
                          type="button"
                        />
                        <Button
                          label="Editar"
                          icon="pi pi-check"
                          type="submit"
                          autoFocus
                        />
                    </div>
                </form>
              )}
            />
          </Dialog>
          <Dialog header="Verificación Contraseña" visible={displayDialogStatusPassword} onHide={() => onHideDialogStatusPasswordX()} breakpoints={{ "960px": "75vw" }} style={{ width: "50vw" }}>
                <Form
                    onSubmit={onSubmitStatusPassword}
                    initialValues={initialValuesStatusPassword}
                    validate={validateStatusPassword}
                    render={({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <div className="edit-user-form_edit">
                                <h5>Digite tu contraseña para continuar </h5>
                            </div>
                            <Field
                                    name="confirmPassword"
                                    render={({ input, meta }) => (
                                        <div className="field passwordUserConfirmation">
                                            <span>
                                                <label htmlFor="confirmPassword" className={classNames({ "p-error": isFormFieldValid("confirmPassword"),passwordUserConfirmation2: true})}>Confirmar Contraseña</label>
                                                <br />
                                                <Password id="confirmPassword" {...input} placeholder="Confirmar Contraseña" className={classNames({ "p-invalid": isFormFieldValid(meta), })} feedback={false} />
                                            </span>
                                            <br />
                                            {getFormErrorMessage(meta)}
                                        </div>
                                    )}
                                />
                            <div className="submit-edit-user">
                                <Button label="Cancelar" icon="pi pi-times" type="button"  className="p-button-text" onClick={() => onHideDialogCancelStatusPassword()} />
                                <Button label="Confirmar" icon="pi pi-check" autoFocus type="submit" />
                            </div>
                        </form>
                    )}
                />
            </Dialog>
            <ConfirmDialog visible={visibleTrue} 
            onHide={() => onHideDialogEdit(true)} 
            header="Acceso concedido"
            message= "¿Desea editar sus datos?"
            icon= "pi pi-exclamation-triangle"
            acceptLabel= "Editar"
            rejectLabel= "Cancelar"
            accept={EditUser}
            reject={refreshPage2} 
             />
            <ConfirmDialog visible={visibleFalse} 
            onHide={() => onHideDialogEdit(true)} 
            message= "La contraseña no coincide"
            header="Acceso denegado"
            icon= "pi pi-exclamation-triangle"
            acceptLabel= "Cerrar"
            rejectLabel= "Volver"
            accept= {refreshPage2}
            reject={refreshPage3}
             />
        </div>
      </div>
    </div>
  );
}
