import React from "react";

export const imageBodyTemplate = (rowData) => {
    return <img src={`images/products/${rowData.img}`} onError={(e) => (e.target.src = "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")} alt={rowData.image} className="product-image" />;
};

export const buttonBodyTemplate = (rowData) => {
    return (
        <div className="button-column">
            <div className="row">
               
            </div>
           
                    
        </div>
    );
};

