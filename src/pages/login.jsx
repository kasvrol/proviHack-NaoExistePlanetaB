import React from "react";
import Logo from "../components/Logo";

import image07 from "../images/image07.svg";

import "../style/login.scss";

function Home() {
    return (
        <main className="LoginContainer">
            <Logo />
            <img
                src={image07}
                alt="ilustração de uma mulher fazendo login"
                section
                className="LoginImage"
            />
            <p className="registrationParagraph">Login</p>
            <form className="LoginForm">
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Senha" />
            </form>
            <button className="LoginButton">Entrar</button>
            <p className="registrationLoginParagraph">
                Ainda não tem uma conta? Cadastre-se!
            </p>
            <button className="registrationLoginButton">Cadastrar-me</button>
        </main>
    );
}

export default Home;
