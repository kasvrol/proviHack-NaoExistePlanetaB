import React from "react";
import "../../style/text.sass";

function AboutMore() {
    return (
        <div className="AboutMoreContainer">
            <p>Saiba mais</p>
            <section className="AboutMoreText">
                <p>
                    Nosso projeto nasce com o intuito de conscientizar
                    empresários e profissionais, principalmente da região do
                    Brás, em São Paulo, a fim de dar um novo destino à boa tarde
                    de tecidos retalhos descartados diariamente de forma
                    irregular. Tanto confecções, quanto pequenos galpões são os
                    maiores produtores de resíduos têxteis desta região.
                </p>
                <p>
                    Esses empresários em muitos dos casos não tem poder
                    aquisitivo ou não tem políticas que trabalhem a favor do
                    descarte correto desses tecidos. Além de evitar que esses
                    tecidos vão para lixões em São Paulo, conseguimos gerar uma
                    nova fonte de renda para mulheres da periferia em situações
                    de vulnerabilidade social.
                </p>
                <p>
                    Coletamos os tecidos, recortes e rolos de tecidos que seriam
                    descartados pela indústria como lixo comum e entregamos para
                    costureiras em situação de vulnerabilidade social, a fim de
                    minimizar o impacto ambiental causado por esse descarte
                    irregular.
                </p>
            </section>
        </div>
    );
}

export default AboutMore;
