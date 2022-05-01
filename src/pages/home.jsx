import React from "react";
import Logo from "../components/Logo";
import { WhoWeAre, WhatWeDo } from "../components/whoWeAreText";
import Instructions from "../components/instructions";
import Button from "../components/Button";
import { WhyThisCaseIsImpotant, Benefits } from "../components/aboutMore";
import TissuesCard from "../components/tissuesCard";
import Header from "../components/Header";

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
                <Instructions />
                <Button
                    title={"Cadastre-se para receber doações"}
                    color={"pink-button"}
                />
                <WhyThisCaseIsImpotant classNameTitle="WhoWeAreTitle" />
                <Benefits classNameTitle="WhoWeAreTitle" />
                <TissuesCard />
            </main>
        </>
    );
}

export default Home;
