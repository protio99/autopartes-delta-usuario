import React from "react";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";



export const buttonBodyTemplate = (rowData) => {
    return (
        <div className="button-column">
            <div className="row">
                <div className="col-4">
                    <Button icon=" pi pi-print" className="p-button-info " />
                </div>
                <div className="col-2">
                <Link to={"/Shopping"}>
                    <Button icon=" pi pi-eye" className="p-button-info" />
                    </Link>
                </div>
            </div>
           
                    
        </div>
    );
};

