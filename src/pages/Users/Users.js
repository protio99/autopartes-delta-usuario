import React, { useState} from 'react';
 import UsersMenu from "./UsersMenu";
import { InputText } from "primereact/inputtext";
import "./user.css";
import { Calendar } from 'primereact/calendar';
export default function Users(){

    const [date1, setDate1] = useState();
    const [value1, setValue1] = useState('Danilo');
    const [value2, setValue2] = useState('Lora');
    const [value3, setValue3] = useState('danilo@gmail.com');
    const [value4, setValue4] = useState(3005844525);
    const [value5, setValue5] = useState('Colombia');
    const [value6, setValue6] = useState('Antioquia');

    console.log(date1)
    return (

        <div>
                    <UsersMenu/> 

            <div className='container-fluid pt-2'>

                        <div className='row'>
                            <div className='col-12'>
                                <div className='text-center pt-5'>
                                    <h4>
                                        Resumen de Cuenta
                                    </h4>
                                </div>
                                <div className='container'>
                                    <div className='pt-2'>
                                        <h6>Mi perfil</h6>
                                    </div>
                                    <div className='row pt-5'>
                                        <div className='col-sm-4 user-form '>
                                        <span className="p-float-label input-user">
                                            <InputText id="username" value={value1} onChange={(e) => setValue1(e.target.value)} />
                                            <label htmlFor="username">Nombre</label>
                                        </span>
                                        </div>
                                        <div className='col-sm-4 user-form'>
                                            <span className="p-float-label input-user">
                                                <InputText id="lastname" value={value2} onChange={(e) => setValue2(e.target.value)} />
                                                <label htmlFor="lastname">Apellido</label>
                                            </span>
                                        </div>
                                        <div className='col-4 user-form'>
                                            <span className="p-float-label">
                                                <InputText id="lastname input-user" value={value3} onChange={(e) => setValue3(e.target.value)} />
                                                <label htmlFor="lastname">Correo Electronico</label>
                                            </span>
                                        </div>
                                        <div className="col-4 user-form">
                                            <span className="p-float-label">
                                             <Calendar id="icon" value={date1} onChange={(e) => setDate1(e.value)} showIcon />
                                            <label htmlFor="icon">F/N</label>

                                        </span>
                                    </div>
                                    <div className='col-4 user-form'>
                                            <span className="p-float-label">
                                                <InputText id="lastname input-user" value={value4} onChange={(e) => setValue4(e.target.value)} />
                                                <label htmlFor="lastname">Numero Celular</label>
                                            </span>
                                        </div>
                                        <div className='col-4 user-form'>
                                            <span className="p-float-label">
                                                <InputText id="lastname input-user" value={value5} onChange={(e) => setValue5(e.target.value)} />
                                                <label htmlFor="lastname">Pais Residencia</label>
                                            </span>
                                        </div>
                                        <div className='col-4 user-form'>
                                            <span className="p-float-label">
                                                <InputText id="lastname input-user" value={value6} onChange={(e) => setValue6(e.target.value)} />
                                                <label htmlFor="lastname">Departamento</label>
                                            </span>
                                        </div>
                                        
                                        
                                    </div>
                                   
                                </div>
                            </div>
                        </div>

                        {/* <div className='pt-5'>
                        <h4 className="text-center">
                                Resumen de cuenta
                            </h4>
                        </div>
                           
                            <div className="container-flex pt-5">
                                <h5>Mi Perfil</h5>
                                
                                <div className='row'>
                                
                                    <div className="col- pt-5 user-form ">
                                            <span className="p-float-label">
                                            <InputText className="jjj" id="username" value={value1} onChange={(e) => setValue1(e.target.value)} disabled />
                                            <label htmlFor="username">Nombre</label>
                                        </span>
                                    </div>
                                    <div className="col-md-4 pt-5 user-form ">
                                            <span className="p-float-label">
                                            <InputText className="jjj" id="lastname" value={value2} onChange={(e) => setValue2(e.target.value)} disabled />
                                            <label htmlFor="lastname">Apellido</label>
                                        </span>
                                    </div>
                                    <div className="col-md-4 pt-5 user-form text-center">
                                            <span className="p-float-label">
                                             <Calendar id="icon" value={date1} onChange={(e) => setDate1(e.value)} showIcon />
                                            <label htmlFor="icon">F/N</label>

                                        </span>
                                    </div>
                                    <div className="col-md-6 pt-5 user-form">
                                            <span className="p-float-label">
                                            <InputText className="jjj" id="lastname" value={value3} onChange={(e) => setValue3(e.target.value)} disabled />
                                            <label htmlFor="lastname">Correo</label>
                                        </span>
                                    </div>
                                    <div className="col-6  pt-5 user-form">
                                            <span className="p-float-label">
                                            <InputText className="jjj" id="lastname" value={value3} onChange={(e) => setValue3(e.target.value)} disabled />
                                            <label htmlFor="lastname">Correo</label>
                                        </span>
                                    </div>
                                </div>
                                
                            </div>
                            */}


                </div>
                
            </div>
    );


}
    


