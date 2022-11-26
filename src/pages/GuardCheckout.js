import React, { useEffect } from "react";
import { AuthService } from "../service/authService";
import config from "../config/config";

const baseDashboardURL = config.adminURL + "/#/";
const baseStoreURL = config.userURL + "/store";
const baseCheckoutURL = config.userURL + "/Checkout";
const _authService = new AuthService();

export default function GuardCheckoout({ token }) {
  useEffect(() => {
    const redirectFlag = localStorage.getItem("redirectFlag");
    _authService
      .getPermissions(token)
      .then((response) => {
        localStorage.setItem("permissionsClient", JSON.stringify(response));
        if (redirectFlag === "true") {
          window.location.replace(`${baseCheckoutURL}`);
        } else {
          window.location.replace(`${baseStoreURL}`);
        }
      })
      .catch((error) => {
        console.log(
          "get permissions fallo cuando se llamo desde el admin",
          error
        );
      });
  }, [token]);

  return <div></div>;
}
