import React from "react";
import { NavLink } from "react-router-dom";
import "../../style/custom.scss";

function Footer() {
    return (
        <ul className="footerContainer">
            <li>
                <NavLink to={"/whoWeAre"}>Quem somos</NavLink>
            </li>
            <li>
                <NavLink to={"/whoWeAre"}>O que fazemos</NavLink>
            </li>
            <li>
                <NavLink to={"/marketplace"}>Como funciona</NavLink>
            </li>
            <li>
                <NavLink to={"/signUp"}>Cadastre-se</NavLink>
            </li>
            <li>
                <NavLink to={"/login"}>Login</NavLink>
            </li>
        </ul>
    );
}

export default Footer;
