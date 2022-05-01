import React from "react";
import "../style/card.scss";
import "../style/tissuesPage.sass";
import Logo from "../components/Logo";
import ImageCard from "../components/Card/image-card";
import Button from "../components/Button";

import tissues01 from "../images/tissue01.svg";
import tissues02 from "../images/tissue02.svg";
import tissues03 from "../images/tissue03.svg";
import tissues04 from "../images/tissues04.svg";
import tissues05 from "../images/tissues05.svg";
import tissues06 from "../images/tissues06.svg";

function outraC() {
    return (
        <main className="tissuesContainer">
            <Logo />
            <h1 className="titleTissues">Tecidos disponíveis</h1>
            <ImageCard
                title={"Até 30 cm"}
                classTitle={"titleBlack"}
                imageOne={tissues06}
                imageTwo={tissues02}
                imageThree={tissues03}
                textImageOne={"tecidos de xxx"}
                textImageTwo={"tecidos de xxx"}
                textImageThree={"tecidos de xxx"}
                textOne={"Jeans"}
                textTwo={"Tecido de algodão"}
                textThree={"Tecido de poliester"}
                cardParagraph={"card-paragraph tissue-lenght"}
            />
            <ImageCard
                title={"Até 50 cm"}
                classTitle={"titleBlack"}
                imageOne={tissues01}
                imageTwo={tissues05}
                imageThree={tissues04}
                textImageOne={"tecidos de xxx"}
                textImageTwo={"tecidos de xxx"}
                textImageThree={"tecidos de xxx"}
                textOne={"Jeans"}
                textTwo={"Tecido de algodão"}
                textThree={"Tecido de poliester"}
                cardParagraph={"card-paragraph tissue-lenght"}
            />
            <h2 className="titleTissuesTwo">
                Digite seu cep e encontre o polo de retira mais próximo de você!
            </h2>
            <input type="text" placeholder="CEP" className="inputTissues" />
            <span className="spanTissues"></span>
            <Button
                title={"Seja uma costureira parceira, cadastre-se"}
                color={"pink-button tissues-button"}
            />
        </main>
    );
}

export default outraC;
