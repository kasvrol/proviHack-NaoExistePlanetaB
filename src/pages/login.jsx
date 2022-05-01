import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { setItem, getItem } from "../utils/localStorage";
import api from "../services/api";
import Logo from "../components/Logo";

import image08 from "../images/image08.svg";

import "../style/login.scss";

function Home() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = getItem("token");

        if (token) {
            navigate("/main");
        }
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await api.post("/login", {
                email,
                password,
            });

            const { token, user } = response.data;

            setItem("token", token);
            setItem("userId", user.id);

            setError("");
            if (user.groupcategory === "costureira") {
                navigate("/main");
            } else {
                navigate("/tissuesDonation");
            }
        } catch (error) {
            setError(error.response.data.mensagem);
        }
    }

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
                <form className="LoginForm" onSubmit={handleSubmit}>
                    <p className="LoginParagraph">Login</p>
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="LoginButton">Entrar</button>
                </form>
            </div>
            <div className="registrationLogin">
                <p className="registrationLoginParagraph">
                    Ainda não tem uma conta? Cadastre-se!
                </p>
                <button
                    className="registrationLoginButton"
                    onClick={() => navigate("/signUp")}
                >
                    Cadastrar-me
                </button>
            </div>
        </main>
    );
}

export default Home;
