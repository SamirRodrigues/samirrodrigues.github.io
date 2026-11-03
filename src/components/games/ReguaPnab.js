// Régua de marcas da PNAB (RN), conforme o "Manual de Aplicação das Marcas
// PNAB - RN" (Ciclo 2): versão colorida sobre fundo branco, horizontal por
// padrão e vertical quando a horizontal não cabe (celular). Os arquivos são os
// do manual, sem alteração; a ordem e o espaçamento vêm prontos na imagem.
import React from "react";
import "./ReguaPnab.css";

const ALT =
  "Secult RN, Governo do Estado do Rio Grande do Norte, Sistema Nacional de Cultura, Política Nacional Aldir Blanc de Fomento à Cultura, Ministério da Cultura e Governo Federal";

const ReguaPnab = () => (
  <section className="regua-pnab" aria-labelledby="regua-pnab-title">
    <div className="regua-pnab-inner">
      <h2 id="regua-pnab-title" className="regua-pnab-title">
        Realização
      </h2>
      <p className="regua-pnab-text">
        Secretaria de Estado da Cultura, Governo do Estado do Rio Grande do
        Norte, Sistema Nacional de Cultura, Política Nacional Aldir Blanc de
        Fomento à Cultura, Ministério da Cultura e Governo Federal.
      </p>
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet="/assets/regua-pnab-rn-horizontal.png"
          width="1920"
          height="200"
        />
        <img
          className="regua-pnab-img"
          src="/assets/regua-pnab-rn-vertical.png"
          width="600"
          height="1800"
          loading="lazy"
          decoding="async"
          alt={ALT}
        />
      </picture>
    </div>
  </section>
);

export default ReguaPnab;
