import React from "react";
import TissuesCard from "../components/tissuesCard";
import { WhoWeAre, Informations } from "../components/whoWeAreText";
import { AboutMore } from "../components/aboutMore";
import Button from "../components/Button";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImageCard from "../components/Card/image-card";

import instruction01 from "../images/image01.svg";
import instruction02 from "../images/image02.svg";
import instruction03 from "../images/image03.svg";
import "../style/custom.scss";

function whoWeAre() {
    return (
        <>
            <Header />
            <main className="whoWeAreContainer">
                <Logo />
                <WhoWeAre classNameTitle="WhoWeAreTitle" />
                <Informations />
                <ImageCard
                    title={"Como nosso projeto funciona?"}
                    classTitle={"titlePink"}
                    imageOne={instruction01}
                    imageTwo={instruction02}
                    imageThree={instruction03}
                    textImageOne={
                        "1 -Empresas doam residúdos de tecidos (recortes)."
                    }
                    textImageTwo={
                        "2 -Costureiras se cadastram para receber doações."
                    }
                    textImageThree={
                        "3 -Costureiras retiram no polo mais próximo de suas casas."
                    }
                    textOne={
                        "1 -Empresas doam residúdos de tecidos (recortes)."
                    }
                    textTwo={
                        "2 -Costureiras se cadastram para receber doações."
                    }
                    textThree={
                        "3 -Costureiras retiram no polo mais próximo de suas casas."
                    }
                    cardParagraph={"card-paragraph"}
                />
                <TissuesCard />
                <AboutMore classNameTitle="WhoWeAreTitle" />
                <Button
                    title={"Quero ser um parceiro doador de tecidos!"}
                    color={"pink-button"}
                />
            </main>
            <Footer />
        </>
    );
}

export default whoWeAre;
