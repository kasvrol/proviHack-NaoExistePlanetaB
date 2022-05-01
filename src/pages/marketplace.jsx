import React from "react";
import Logo from "../components/Logo";
import Button from "../components/Button";

import image14 from "../images/image14.svg";
import image13 from "../images/image13.svg";

import "../style/marketplace.scss";

function Marketplace() {
    return (
        <main className="marketplaceContainer">
            <div className="marketplaceMerchan">
                <p>Doe tecidos, o meio ambiente agradece!</p>
            </div>
            <Logo />
            <p className="marketplaceMensage">Bem vindo!</p>
            <div className="marketplaceText">
                <p>Olá, ficamos muito felizes com a sua presença por aqui!</p>
                <p>
                    Mas antes de iniciarmos o cadastro dos tecidos a serem
                    doados, preciso te passar algumas informações :
                </p>
                <ul>
                    <li>
                        Nossas voluntárias coletam e distribuem os tecidos em
                        horário comercial, os tecidos deverão estar em caixas ou
                        sacolas possíveis de se carregar.
                    </li>
                    <li>
                        Não coletamos insumos que não possam ser reaproveitados,
                        por este motivo elas revisam os itens antes de serem
                        retirados.
                    </li>
                    <li>
                        Nossa plataforma conta com seu apoio, portanto é
                        necessário que para realizar doações cada
                        empresário/comerciante realize o pagamento de uma taxa
                        anual de R$300. Essa taxa é essencial para que possamos
                        custear nossos profissionais que mantêm esta plataforma
                        em funcionamento.
                    </li>
                </ul>
                <div className="merchanCards">
                    <div className="BusinessCard">
                        <p>Pagamento anual</p>
                        <img src={image14} alt="dois homens fazendo negócio" />
                        <p>
                            Lembre-se a sua contribuição é muito importante para
                            que nós possamos continuar dando um destino
                            sustentavél aos residuos da sua empresa.
                        </p>
                        <p>
                            <span className="BusinessCardSpan">
                                Valor R$300
                            </span>
                        </p>
                        <Button
                            title={"Realizar pagamento"}
                            color={"pink-button marketplace-button"}
                        />
                    </div>
                    <div className="BusinessCard">
                        <p>Doar tecido</p>
                        <img
                            src={image13}
                            alt="um homem feliz com tecido na mão"
                        />
                        <p>Clique abaixo e faça sua doação de tecidos!</p>
                        <p>
                            Importante lembrar que nossas costureiras irão
                            coletar somente tecidos que possam ser
                            reaproveitados.*
                        </p>
                        <Button
                            title={"Realizar doação "}
                            color={"pink-button marketplace-button"}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Marketplace;
