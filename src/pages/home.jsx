import React from "react";
import Logo from "../components/Logo";
import { WhoWeAre, WhatWeDo } from "../components/whoWeAreText";

import image05 from "../images/image05.svg";
import image06 from "../images/image06.svg";

import "../style/home.scss";

function Home() {
    return (
        <main>
            <Logo />
            <section className="informationsContainer">
                <WhoWeAre />
                <img src={image06} alt="ilustração de um monitor" />
            </section>
            <section className="informationsContainer">
                <img
                    src={image05}
                    alt="ilustração de um fotográfo tirando fot de roupas"
                />
                <WhatWeDo />
            </section>
        </main>
    );
}

export default Home;
