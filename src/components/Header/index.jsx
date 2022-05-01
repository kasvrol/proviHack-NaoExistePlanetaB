import React from "react";
import Button from "../Button";
import image15 from "../../images/image15.svg";
import logo from "../../images/logo.svg";
import "../../style/header.scss";

function Header() {
    return (
        <div className="HeaderContainer">
            <ul className="HeaderListDesktop">
                <li>Home</li>
                <li>Quem somos</li>
                <li>Tecidos</li>
                <li>Blog</li>
                <li>
                    <Button title={"Login"} color={"header-button"} />
                </li>
            </ul>
        </div>
    );
}

export default Header;

export function HeaderMobile() {
    return (
        <div className="HeaderMobileContainer">
            <div className="HeaderListMobile">
                <img src={logo} alt="logo  do site eConnectTextil" />
                <img src={image15} alt="botão menu" />
            </div>
        </div>
    );
}
