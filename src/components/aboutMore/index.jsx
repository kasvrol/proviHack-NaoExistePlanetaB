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

export function WhyThisCaseIsImpotant() {
    return (
        <div className="AboutMoreContainer">
            <p>Porque essa causa é importante?</p>
            <section className="AboutMoreText">
                <p>
                    Não serão raras as críticas à indústria da moda acerca de
                    questões sociais e ambientais. Por exemplo, mais e mais
                    pessoas estão se perguntando sobre quanto este setor polui.
                    Com mais acesso à informação, o público está mais
                    consciente, exigindo a sustentabilidade das marcas.
                </p>
                <p>
                    Vale dizer que os impactos dos negócios da moda são
                    relevantes e fazem parte de uma agenda pública global.
                    Estima-se que a indústria da moda seja o segundo maior
                    consumidor de água, segundo a Global Fashion Agenda (1,5
                    trilhão de litros por ano), por exemplo.
                </p>
                <p>
                    Mas como pensar quem produz e de qual forma é feita a cadeia
                    produtiva? Quão conectados estamos realmente com o
                    desenvolvimento socioambiental no que diz respeito às
                    roupas? Quais impactos a indústria da moda causa? E como a
                    moda pode também propor soluções para um sociedade mais
                    sustentável? São algumas das perguntas nos guiam.
                </p>
                <p>
                    “Do total, 45 toneladas desses resíduos texteis produzidos
                    no Brasil são da região do Brás, 8 toneladas do Bom Retiro e
                    10 toneladas da Vila Maria”
                </p>
            </section>
        </div>
    );
}

export function Benefits() {
    return (
        <div className="AboutMoreContainer">
            <p>Quais os benefícos para quem doa?</p>
            <section className="AboutMoreText">
                <p>
                    Empresas que realizam doações para fins sociais podem
                    receber benefícios fiscais do governo.
                </p>
                <p>
                    As leis de incentivo são mecanismos que permitem a renúncia
                    fiscal, por parte do Poder Executivo, de recursos que
                    deveriam ser arrecadados de pessoas e empresas. Ou seja, o
                    governo abre mão de receber parte dos impostos para
                    incentivar projetos nas áreas cultural, esportiva e social.
                </p>
                <p>
                    Incentivos fiscais para empresas que investem em projetos
                    ambientais:
                </p>
                <p>
                    Em 2015, a Comissão de Meio Ambiente e Desenvolvimento
                    Sustentável da Câmara dos Deputados aprovou um projeto que,
                    durante 20 anos, dará incentivos fiscais as empresas que
                    adotarem processos produtivos e de descarte que não poluam o
                    meio ambiente.
                </p>
                <p>
                    Entre os benefícios concedidos, estão a redução do Imposto
                    sobre os Produtos Industrializados (IPI), alíquotas de
                    Cofins e PIS/Pasep com taxa zero e crédito presumido de IPI
                    até 2025.
                </p>
            </section>
        </div>
    );
}
