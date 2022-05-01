import React from "react";
import Logo from "../components/Logo";

import image05 from "../images/image05.svg";

import "../style/home.scss";

function Home() {
    return (
        <main className="signUpContainer">
            <Logo />
            <img
                src={image05}
                alt="ilustração de um fotográfo tirando fot de roupas"
            />
            <form>
                <section>
                    <p>Selecione abaixo qual grupo você pertence</p>
                    <label>Costureira</label>
                    <input type="radio" name="costureira" />
                    <label>Empresa doadora de tecidos</label>
                    <input type="radio" name="empresa-doadora" />
                </section>

                <input type="text" placeholder="Nome Completo" />
                <input type="text" placeholder="CPF ou CNPJ" />
                <input type="text" placeholder="CEP" />
                <input type="text" placeholder="Endereço" />
                <input />
                <input type="text" placeholder="Complemento" />
                <input type="text" placeholder="Senha" />
                <input type="text" placeholder="Confirme sua Senha" />

                <input type="submit" placeholder="Concluir!" />
            </form>
            <button>Cancelar</button>
        </main>
    );
}

export default Home;
