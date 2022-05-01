import React from "react";
import Logo from "../components/Logo";
import { NavLink } from "react-router-dom";

import image08 from "../images/image08.svg";

import "../style/login.scss";

function Home() {
    return (
        <main className="LoginContainer">
            <Logo />
            <div className="LoginContainerDiv">
                <img
                    src={image08}
                    alt="ilustração de uma mulher fazendo login"
                    section
                    className="LoginImage"
                />
                <form className="LoginForm">
                    <p className="LoginParagraph">Login</p>
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Senha" />
                    <NavLink to={"/login"}>
                        <button className="LoginButton">Entrar</button>
                    </NavLink>
                </form>
            </div>
            <div className="registrationLogin">
                <p className="registrationLoginParagraph">
                    Ainda não tem uma conta? Cadastre-se!
                </p>
                <NavLink to={"/signUp"}>
                    <button className="registrationLoginButton">
                        Cadastrar-me
                    </button>
                </NavLink>
            </div>
        </main>
    );
}

export default Home;
