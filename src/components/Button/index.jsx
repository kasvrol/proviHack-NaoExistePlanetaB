import React from "react";
import "../../style/custom.scss";

function Button({ color, title }) {
    return (
        <div className="buttonContainer">
            <button className={color}>{title}</button>
        </div>
    );
}

export default Button;
