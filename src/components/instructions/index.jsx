import React from "react";
import instruction01 from "../../images/image01.svg";
import instruction02 from "../../images/image02.svg";
import instruction03 from "../../images/image03.svg";
import "../../style/card.scss";

function Card() {
    return (
        <section className="intructions">
            <p>Como nosso projeto funciona?</p>
            <section className="intructions-cards">
                <section className="card">
                    <img
                        src={instruction01}
                        alt="{image01} "
                        className="image-card"
                    />
                    <p className="card-paragraph">
                        <span className="card-number">1 -</span>
                        Empresas doam residúdos de tecidos (recortes).
                    </p>
                </section>
                <section className="card">
                    <img
                        src={instruction02}
                        alt="{image02} "
                        className="image-card"
                    />
                    <p className="card-paragraph">
                        <span className="card-number">2 -</span>
                        Costureiras se cadastram para receber doações.
                    </p>
                </section>
                <section className="card">
                    <img
                        src={instruction03}
                        alt="{image03} "
                        className="image-card"
                    />
                    <p className="card-paragraph">
                        <span className="card-number">3 -</span>
                        Costureiras retiram no polo mais próximo de suas casas.
                    </p>
                </section>
            </section>
        </section>
    );
}

export default Card;
