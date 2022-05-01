import React from "react";
import logo from "../../images/logo.svg";
import "../../style/custom.scss";

function Logo() {
    return (
        <div className="eConnectTextilLogo">
            <img
                src={logo}
                alt="logo do projeto eConnectTextil"
                className="logo-image"
            />
        </div>
    );
}

export default Logo;
