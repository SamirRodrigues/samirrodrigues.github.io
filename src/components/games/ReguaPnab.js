// Régua de marcas da PNAB (RN): Fundação José Augusto, Secult/RN, Governo do RN,
// SNC, Política Nacional Aldir Blanc, Ministério da Cultura e Governo Federal.
// O arquivo é a versão branca (negativa) do manual de marcas, sem alterações:
// por isso vai sobre um painel escuro liso, sem rotação, moldura ou filtro.
import React from "react";
import "./ReguaPnab.css";

const ReguaPnab = () => (
  <section className="regua-pnab" aria-labelledby="regua-pnab-title">
    <div className="regua-pnab-inner">
      <h2 id="regua-pnab-title" className="regua-pnab-title">
        Realização
      </h2>
      <p className="regua-pnab-text">
        Projeto realizado com recursos da Política Nacional Aldir Blanc de
        Fomento à Cultura.
      </p>
      <img
        className="regua-pnab-img"
        src="/assets/regua-pnab-rn.png"
        width="319"
        height="875"
        loading="lazy"
        decoding="async"
        alt="Fundação José Augusto, Secult RN, Governo do Estado do Rio Grande do Norte, Sistema Nacional de Cultura, Política Nacional Aldir Blanc de Fomento à Cultura, Ministério da Cultura e Governo Federal"
      />
    </div>
  </section>
);

export default ReguaPnab;
