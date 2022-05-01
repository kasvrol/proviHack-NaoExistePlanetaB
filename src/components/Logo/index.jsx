import React from "react";
import logo from "../../images/logo.svg";
import "../../style/logo.scss";

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
