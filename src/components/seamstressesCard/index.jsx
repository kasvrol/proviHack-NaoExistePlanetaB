import React from "react";
import "../../style/seamstresses.scss";

function seamstressesCard({
    seamstressesImageOne,
    seamstressesImageTwo,
    seamstressesImageThree,
    seamstressesImageFour,
    seamstressesNameFour,
    seamstressesNameThree,
    seamstressesNameTwo,
    seamstressesNameOne,
    seamstressesAltFour,
    seamstressesAltThree,
    seamstressesAltTwo,
    seamstressesAltOne,
    className,
    AboutMore,
}) {
    return (
        <div className="seamstressesContainer">
            <section className="seamstressesCard">
                <img
                    src={seamstressesImageOne}
                    alt={seamstressesAltOne}
                    className={className}
                />
                <section className="seamstressesTexts">
                    <p>{seamstressesNameOne}</p>
                    <p>{AboutMore}</p>
                </section>
            </section>
            <section className="seamstressesCard">
                <img
                    src={seamstressesImageTwo}
                    alt={seamstressesAltTwo}
                    className={className}
                />
                <section className="seamstressesTexts">
                    <p>{seamstressesNameTwo}</p>
                    <p>{AboutMore}</p>
                </section>
            </section>
            <section className="seamstressesCard">
                <img
                    src={seamstressesImageThree}
                    alt={seamstressesAltThree}
                    className={className}
                />
                <section className="seamstressesTexts">
                    <p>{seamstressesNameThree}</p>
                    <p>{AboutMore}</p>
                </section>
            </section>
            <section className="seamstressesCard">
                <img
                    src={seamstressesImageFour}
                    alt={seamstressesAltFour}
                    className={className}
                />
                <section className="seamstressesTexts">
                    <p>{seamstressesNameFour}</p>
                    <p>{AboutMore}</p>
                </section>
            </section>
        </div>
    );
}

export default seamstressesCard;
