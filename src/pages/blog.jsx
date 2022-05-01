import React from "react";
import "../style/blog.scss";
import Logo from "../components/Logo";
import Button from "../components/Button";
import SeamstressesCard from "../components/seamstressesCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImageCard from "../components/Card/image-card";

import seamstresses01 from "../images/seamstresses1.svg";
import seamstresses02 from "../images/seamstresses2.svg";
import seamstresses03 from "../images/seamstresses3.svg";
import seamstresses04 from "../images/seamstresses4.svg";
import seamstresses05 from "../images/seamstresses5.svg";
import seamstresses06 from "../images/seamstresses6.svg";
import seamstresses07 from "../images/seamstresses7.svg";
import seamstresses08 from "../images/seamstresses8.svg";
import instruction01 from "../images/image01.svg";
import instruction02 from "../images/image02.svg";
import instruction03 from "../images/image03.svg";

function Blog() {
    return (
        <>
            <Header />
            <main className="blogContainer">
                <Logo />
                <h1>Conheça nossas costureiras</h1>
                <SeamstressesCard
                    seamstressesImageOne={seamstresses01}
                    seamstressesImageTwo={seamstresses08}
                    seamstressesImageThree={seamstresses07}
                    seamstressesImageFour={seamstresses06}
                    seamstressesNameFour={"Nádia Souza"}
                    seamstressesNameThree={"Suzete Brandão"}
                    seamstressesNameTwo={"Marluce Barbosa"}
                    seamstressesNameOne={"Luciana de Oliveia"}
                    seamstressesAltFour={"Nossa costureira Nádia Souza"}
                    seamstressesAltThree={"Nossa costureira Suzete Brandão"}
                    seamstressesAltTwo={"Nossa costureira Marluce Barbosa"}
                    seamstressesAltOne={"Nossa costureira Luciana de Oliveia"}
                    className={"seamstressesPictures"}
                    AboutMore={"Saiba mais"}
                />
                <SeamstressesCard
                    seamstressesImageOne={seamstresses05}
                    seamstressesImageTwo={seamstresses04}
                    seamstressesImageThree={seamstresses03}
                    seamstressesImageFour={seamstresses02}
                    seamstressesNameFour={"Jessilane Silva"}
                    seamstressesNameThree={"Silvana S. Barbosa"}
                    seamstressesNameTwo={"Camila Delaruca"}
                    seamstressesNameOne={"Helena Silva"}
                    seamstressesAltFour={"Nossa costureira Jessilane Silva"}
                    seamstressesAltThree={"Nossa costureira Silvana S. Barbosa"}
                    seamstressesAltTwo={"Nossa costureira Camila Delaruca"}
                    seamstressesAltOne={"Nossa costureira Helena Silva"}
                    className={"seamstressesPictures"}
                    AboutMore={"Saiba mais"}
                />
                <Button
                    title={"Seja uma costureira parceira, cadastre-se"}
                    color={"pink-button tissues-button"}
                />
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
            </main>
            <Footer />
        </>
    );
}

export default Blog;
