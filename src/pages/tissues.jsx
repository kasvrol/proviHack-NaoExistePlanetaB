import React from "react";
import "../style/custom.sass";
import Logo from "../components/Logo";
import ImageCard from "../components/Card/image-card";

import instruction01 from "../images/tissue01.svg";
import instruction02 from "../images/tissue02.svg";
import instruction03 from "../images/tissue03.svg";

function outraC() {
    return (
        <main className="whoWeAreContainer">
            <Logo />
            <ImageCard
                imageOne={instruction01}
                imageTwo={instruction02}
                imageThree={instruction03}
                textImageOne={"tecidos de xxx"}
                textImageTwo={"tecidos de xxx"}
                textImageThree={"tecidos de xxx"}
                textOne={"Jeans"}
                textTwo={"Tecido de algodão"}
                textThree={"Tecido de poliester"}
            />
            <ImageCard
                imageOne={instruction01}
                imageTwo={instruction02}
                imageThree={instruction03}
                textImageOne={"tecidos de xxx"}
                textImageTwo={"tecidos de xxx"}
                textImageThree={"tecidos de xxx"}
                textOne={"Jeans"}
                textTwo={"Tecido de algodão"}
                textThree={"Tecido de poliester"}
            />
        </main>
    );
}

export default outraC;
