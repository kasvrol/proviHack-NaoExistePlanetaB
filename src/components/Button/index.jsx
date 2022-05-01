import React from "react";
import { useNavigate } from "react-router-dom";
import "../../style/custom.sass";

function Button({ color, title, navigateTo }) {
    const navigate = useNavigate();

    return (
        <div className="buttonContainer" onClick={() => navigate(navigateTo)}>
            <button className={color}>{title}</button>
        </div>
    );
}

export default Button;
