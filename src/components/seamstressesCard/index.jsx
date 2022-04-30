import React from "react";
import "../style/card.sass";

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
        <div>
            <section>
                <img
                    src={seamstressesImageOne}
                    alt={seamstressesAltOne}
                    className={className}
                />
                <p>{seamstressesNameOne}</p>
                <p>{AboutMore}</p>
            </section>
            <section>
                <img
                    src={seamstressesImageTwo}
                    alt={seamstressesAltTwo}
                    className={className}
                />
                <p>{seamstressesNameTwo}</p>
                <p>{AboutMore}</p>
            </section>
            <section>
                <img
                    src={seamstressesImageThree}
                    alt={seamstressesAltThree}
                    className={className}
                />
                <p>{seamstressesNameThree}</p>
                <p>{AboutMore}</p>
            </section>
            <section>
                <img
                    src={seamstressesImageFour}
                    alt={seamstressesAltFour}
                    className={className}
                />
                <p>{seamstressesNameFour}</p>
                <p>{AboutMore}</p>
            </section>
        </div>
    );
}

export default seamstressesCard;
