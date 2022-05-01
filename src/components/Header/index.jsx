import React from "react";
import Button from "../Button";
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
