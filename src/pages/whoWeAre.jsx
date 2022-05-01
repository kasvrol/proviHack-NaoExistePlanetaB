import React from "react";
import Instructions from "../components/instructions";
import TissuesCard from "../components/tissuesCard";
import { WhoWeAre, Informations } from "../components/whoWeAreText";
import { AboutMore } from "../components/aboutMore";
import Button from "../components/Button";
import Logo from "../components/Logo";
import Header from "../components/Header";
import "../style/custom.scss";

function whoWeAre() {
    return (
        <>
            <Header />
            <main className="whoWeAreContainer">
                <Logo />
                <WhoWeAre />
                <Informations />
                <Instructions />
                <TissuesCard />
                <AboutMore />
                <Button
                    title={"Quero ser um parceiro doador de tecidos!"}
                    color={"pink-button"}
                />
            </main>
        </>
    );
}

export default whoWeAre;
