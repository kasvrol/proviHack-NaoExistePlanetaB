import React from "react";
import "../style/card.sass";
import Logo from "../components/Logo";
import Button from "../components/Button";

function Blog() {
    return (
        <main>
            <Logo />
            <h1>Conheça nossas costureiras</h1>
            <Button
                title={"Seja uma costureira parceira, cadastre-se"}
                color={"pink-button tissues-button"}
            />
        </main>
    );
}

export default Blog;
