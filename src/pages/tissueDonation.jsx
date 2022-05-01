import React from "react";
import Logo from "../components/Logo";

import image09 from "../images/image09.svg";

import "../style/login.scss";

function tissuesDonation() {
    return (
        <main className="DonationContainer">
            <Logo />
            <div className="DonationContainerDiv">
                <img
                    src={image09}
                    alt="ilustração de um home fazendo doação pelo notebook"
                    className="DonationImage"
                />
                <form className="DonationForm">
                    <p className="DonationParagraph">
                        Cadastre-se o tecido a ser doado:
                    </p>
                    <input
                        type="text"
                        placeholder="O que você está doando? (Jeans, viscolinho e etc..)"
                    />
                    <input type="text" placeholder="Qual o volume?" />
                    <input
                        type="text"
                        placeholder="Até quando pode ser retirado?"
                    />
                    <input type="text" placeholder="Qual o endereço?" />
                    <button className="LoginButton">Enviar!</button>
                </form>
            </div>
        </main>
    );
}

export default tissuesDonation;
