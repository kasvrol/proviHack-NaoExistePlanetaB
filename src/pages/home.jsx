import React from "react";
import Logo from "../components/Logo";
import { WhoWeAre, WhatWeDo } from "../components/whoWeAreText";

import image05 from "../images/image05.svg";
import image06 from "../images/image06.svg";

function Home() {
    return (
        <main>
            <Logo />
            <WhoWeAre />
            <img src={image06} alt="ilustração de um monitor" />
            <WhatWeDo />
            <img
                src={image05}
                alt="ilustração de um fotográfo tirando fot de roupas"
            />
        </main>
    );
}

export default Home;
