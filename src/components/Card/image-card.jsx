import React from "react";

function ImageCard({
    imageOne,
    textImageOne,
    imageTwo,
    textImageTwo,
    imageThree,
    textImageThree,
    textOne,
    textTwo,
    texThree,
    cardParagraph,
}) {
    return (
        <div className="cardContainer">
            <section className="card">
                <img src={imageOne} alt={textImageOne} />
                <p className={cardParagraph}>{textOne}</p>
            </section>
            <section className="card">
                <img src={imageTwo} alt={textImageTwo} />
                <p className={cardParagraph}>{textTwo}</p>
            </section>
            <section className="card">
                <img src={imageThree} alt={textImageThree} />
                <p className={cardParagraph}>{texThree}</p>
            </section>
        </div>
    );
}

export default ImageCard;
