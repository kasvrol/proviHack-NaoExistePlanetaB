import React from "react";
import Logo from "../components/Logo";
import { WhoWeAre, WhatWeDo } from "../components/whoWeAreText";
import Button from "../components/Button";
import { WhyThisCaseIsImpotant, Benefits } from "../components/aboutMore";
import TissuesCard from "../components/tissuesCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImageCard from "../components/Card/image-card";

import instruction01 from "../images/image01.svg";
import instruction02 from "../images/image02.svg";
import instruction03 from "../images/image03.svg";
import image05 from "../images/image05.svg";
import image06 from "../images/image06.svg";

import "../style/home.scss";

function Home() {
    return (
        <>
            <Header />
            <main className="homeContainer">
                <Logo />
                <section className="informationsContainer">
                    <WhoWeAre classNameTitle="WhoWeAreTitle" />
                    <img src={image06} alt="ilustração de um monitor" />
                </section>
                <section className="informationsContainer">
                    <img
                        src={image05}
                        alt="ilustração de um fotográfo tirando fot de roupas"
                    />
                    <WhatWeDo classNameTitle="WhatWeDoTitle" />
                </section>
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
                <Button
                    title={"Cadastre-se para receber doações"}
                    color={"pink-button"}
                />
                <WhyThisCaseIsImpotant classNameTitle="WhoWeAreTitle" />
                <Benefits classNameTitle="WhoWeAreTitle" />
                <TissuesCard />
            </main>
            <Footer />
        </>
    );
}

export default Home;
