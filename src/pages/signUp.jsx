import React from "react";
import Logo from "../components/Logo";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

import image07 from "../images/image07.svg";

import "../style/signUp.scss";

function Home() {
    return (
        <>
            <main className="signUpContainer">
                <Logo />
                <img
                    src={image07}
                    alt="ilustração de um fotográfo tirando fot de roupas"
                    section
                    className="registrationImage"
                />
                <p className="registrationParagraph">Cadastre-se</p>
                <form className="signUpForm">
                    <section className="registrationTypeContainer">
                        <p>Selecione abaixo qual grupo você pertence</p>
                        <section className="registrationType">
                            <label for="costureira">Costureira</label>
                            <input
                                type="radio"
                                name="costureira"
                                id="costureira"
                                value="costureira"
                                name="registration_type"
                            />
                        </section>
                        <section className="registrationType">
                            <label for="empresaDoadora">
                                Empresa doadora de tecidos
                            </label>
                            <input
                                type="radio"
                                name="empresa-doadora"
                                id="empresaDoadora"
                                value="empresaDoadora"
                                name="registration_type"
                            />
                        </section>
                    </section>

                    <input
                        type="text"
                        placeholder="Nome Completo"
                        className="informationsSection"
                    />
                    <input
                        type="text"
                        placeholder="CPF ou CNPJ"
                        className="informationsSection"
                    />
                    <input
                        type="text"
                        placeholder="CEP"
                        className="informationsSection"
                    />
                    <input
                        type="text"
                        placeholder="Endereço"
                        className="informationsSection"
                    />
                    <section className="informationsAdressSection">
                        <input
                            type="number"
                            placeholder="N:"
                            className="informationsAdressSectionInput"
                        />
                        <input
                            type="text"
                            placeholder="Complemento"
                            className="informationsAdressSectionInput"
                        />
                    </section>
                    <input
                        type="text"
                        placeholder="Senha"
                        className="informationsSection"
                    />
                    <input
                        type="text"
                        placeholder="Confirme sua Senha"
                        className="informationsSection"
                    />
                    <NavLink to={"/"}>
                        <button className="submitButton">Concluir!</button>
                    </NavLink>
                </form>
                <NavLink to={"/"}>
                    <button className="cancelButton">Cancelar</button>
                </NavLink>
            </main>
            <Footer />
        </>
    );
}

export default Home;
