import React from "react";
import "../../style/card.scss";

function ImageCard({
    title,
    classTitle,
    imageOne,
    textImageOne,
    imageTwo,
    textImageTwo,
    imageThree,
    textImageThree,
    textOne,
    textTwo,
    textThree,
    cardParagraph,
}) {
    return (
        <div className="cardContainer">
            <p className={classTitle}>{title}</p>
            <section className="cards">
                <section className="card">
                    <img
                        src={imageOne}
                        alt={textImageOne}
                        className="image-card"
                    />
                    <p className={cardParagraph}>{textOne}</p>
                </section>
                <section className="card">
                    <img
                        src={imageTwo}
                        alt={textImageTwo}
                        className="image-card"
                    />
                    <p className={cardParagraph}>{textTwo}</p>
                </section>
                <section className="card">
                    <img
                        src={imageThree}
                        alt={textImageThree}
                        className="image-card"
                    />
                    <p className={cardParagraph}>{textThree}</p>
                </section>
            </section>
        </div>
    );
}

export default ImageCard;
