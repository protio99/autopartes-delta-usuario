import React, { useEffect } from "react";
import {AuthService} from './../service/authService'
import config from "../config/config";

const baseDashboardURL = config.adminURL + '/#/'
const baseStoreURL = config.userURL + '/store'
const _authService = new AuthService()

export default function Guard({token}) {
    
    useEffect(() => {
        _authService.getPermissions(token).then((response) =>{
            console.log("response desde el guard", response)
            localStorage.setItem("permissionsClient", JSON.stringify(response));
            window.location.replace(`${baseStoreURL}`)
        }).catch((error) =>{
            console.log("get permissions fallo cuando se llamo desde el admin", error)
        })
    }, [token])

    return (
        <div>
           <p>Entre al guard</p>
        </div>
    );
}