import React from 'react';
 import UsersMenu from "./UsersMenu";

 import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { TableHistory } from "./TableHistory";
export default function Users(){




    return (

        <div>
                    <UsersMenu/> 

                    <div className='container contenedorUsuarios '>
                        <div className='row'>
                                <div className='pt-5'>
                                    <h4 className='text-center'>Historial Compras</h4>
                                </div>
                            
                            <div className="container search-user p-2">
                                <div className="row d-flex flex-row-reverse">
                                    <div className="col-3 ">
                                            <div className="p-inputgroup ">
                                                <InputText placeholder="Buscar Compra"/>
                                                <Button icon="pi pi-search" className="p-button-primary"/>
                                            </div>
                                    </div>
                                </div>
                                
                            </div>
                            
                            <TableHistory className="pt-2" />              
                                        
                                    
                                        
                            </div>
                    </div>
                 </div>
                    


                
    );


}
    

