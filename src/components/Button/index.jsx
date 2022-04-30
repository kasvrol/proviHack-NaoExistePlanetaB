import React from "react";
import "../../style/custom.sass";

function Button({ color, title }) {
    return (
        <div className="buttonContainer">
            <button className={color}>{title}</button>
        </div>
    );
}

export default Button;
