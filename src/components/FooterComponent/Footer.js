import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <div className="dc-footer-margin">
        <div className="dc-footer">
          <div className="dc-footer__upper">
            <img
              src="/images/icons/logoNegro.svg"
              className="dc-footer__img"
              alt="logo"
            ></img>
            <div className="dc-footer__social">
              <p>Siguenos</p>
              <div className="dc-footer__social__icons">
                <i
                  className="pi pi-facebook"
                  style={{ fontSize: "1.5rem" }}
                ></i>
                <i
                  className="pi pi-instagram"
                  style={{ fontSize: "1.5rem" }}
                ></i>
                <i
                  className="pi pi-envelope"
                  style={{ fontSize: "1.5rem" }}
                ></i>
              </div>
            </div>
          </div>
        </div>
        <span className="dc-footer__footer">
          Made with <strong>&lt;3</strong>
        </span>
      </div>
    </>
  );
}
