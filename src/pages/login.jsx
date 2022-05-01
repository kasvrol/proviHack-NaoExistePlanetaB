import React from "react";
import Logo from "../components/Logo";

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
                    <button className="LoginButton">Entrar</button>
                </form>
            </div>
            <div className="registrationLogin">
                <p className="registrationLoginParagraph">
                    Ainda não tem uma conta? Cadastre-se!
                </p>
                <button className="registrationLoginButton">
                    Cadastrar-me
                </button>
            </div>
        </main>
    );
}

export default Home;
