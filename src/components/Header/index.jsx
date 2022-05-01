import React from "react";
import Button from "../Button";
import image15 from "../../images/image15.svg";
import logo from "../../images/logo.svg";
import "../../style/header.scss";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div className="HeaderContainer">
            <ul className="HeaderListDesktop">
                <li>Home</li>
                <li>
                    <NavLink to={"/whoWeAre"}>Quem somos</NavLink>
                </li>
                <li>
                    <NavLink to={"/tissues"}>Tecidos</NavLink>
                </li>
                <li>
                    <NavLink to={"/blog"}>Blog</NavLink>
                </li>
                <li>
                    <NavLink to={"/login"}>
                        <Button title={"Login"} color={"header-button"} />
                    </NavLink>
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
