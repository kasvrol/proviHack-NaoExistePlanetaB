import React from "react";
import Logo from "../components/Logo";
import Button from "../components/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";

import image09 from "../images/image09.svg";

import "../style/tissuesDonation.scss";

function tissuesDonation() {
    return (
        <>
            <Header />
            <main className="DonationContainer">
                <Logo />
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
                    <Button
                        color={"pink-button donation-button"}
                        title={"Enviar!"}
                    />
                </form>
            </main>
            <Footer />
        </>
    );
}

export default tissuesDonation;
