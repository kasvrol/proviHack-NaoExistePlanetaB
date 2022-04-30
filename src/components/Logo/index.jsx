import React from "react";
import logo from "../../images/logo.svg";
import "../../style/custom.sass";

function Logo() {
    return (
        <img
            src={logo}
            alt="logo do projeto eConnectTextil"
            className="logo-image"
        />
    );
}

export default Logo;
