import React from "react";
import image04 from "../../images/image04.svg";
import "../../style/text.sass";

export function WhoWeAre() {
    return (
        <div className="whoWeAreTextContainer">
            <p>Quem somos</p>
            <section className="whoAreText">
                <p>
                    A <span>Econnectextil</span> nasceu com o intuito de
                    diminuir o impacto ambiental causado pelo descarte de
                    tecidos pela indústria têxtil de forma precária.
                </p>
            </section>
        </div>
    );
}

export function Informations() {
    return (
        <div className="whoWeAreTextContainer">
            <section className="whoAreText">
                <p>
                    Juntos, os bairros do Brás, Bom Retiro e Vila Mariana
                    produzem cerca de 63 toneladas por dia de lixo de tecidos.
                    Somente o Bom Retiro, onde estão cerca de 1,2 mil
                    confecções, produz cerca de 12 toneladas de sobras da
                    indústria têxtil por dia. As perdas de tecido podem chegar a
                    20% de todo o material usado nas fábricas.
                </p>
            </section>
            <section className="whoAreImage">
                <img src={image04} alt={image04} />
            </section>
        </div>
    );
}
