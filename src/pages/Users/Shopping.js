import React from 'react';
 import UsersMenu from "./UsersMenu";

 import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { TableUsers } from "./TableUsers";
export default function Users(){




    return (

        <div>
                    <UsersMenu/> 

                    <div className='container contenedorUsuarios '>
                        <div className='row'>
                                <div className='pt-5'>
                                    <h4 className='text-center'>Detalle De Compras</h4>
                                </div>
                            
                            <div className="container search-user p-2">
                                <div className="row d-flex flex-row-reverse">
                                    <div className="col-3 ">
                                            <div className="p-inputgroup ">
                                                <InputText placeholder="Buscar Producto"/>
                                                <Button icon="pi pi-search" className="p-button-primary"/>
                                                
                                            </div>
                                    </div>
                                    <div className='col-8'>
                                    <Button label="Descargar" icon="pi pi-download" />

                                    </div>
                                    
                                </div>
                                
                            </div>
                            
                            <TableUsers />              
                                        
                                    
                                        
                            </div>
                    </div>
                 </div>
                    


                
    );


}
    


