// Régua de marcas da PNAB (RN), conforme o "Manual de Aplicação das Marcas
// PNAB - RN" (Ciclo 2, página 6, "Adição de marcas"): a marca do projeto vem
// à esquerda da régua horizontal (ou acima da vertical), depois APOIO (Secult
// RN e Governo do RN) e REALIZAÇÃO (SNC, Política Nacional Aldir Blanc,
// Ministério da Cultura e Governo Federal). As imagens são recortes da régua
// colorida do manual, sem alteração; a horizontal serve do desktop em diante e
// a vertical, no celular. Fundo branco, como o manual pede.
import React from "react";
import "./ReguaPnab.css";

const APOIO_ALT = "Secult RN e Governo do Estado do Rio Grande do Norte";
const REALIZACAO_ALT =
  "Sistema Nacional de Cultura, Política Nacional Aldir Blanc de Fomento à Cultura, Ministério da Cultura e Governo Federal";
const A = "/assets";

const Brand = () => (
  <img
    className="regua-brand"
    src={`${A}/logo-bs-grey.png`}
    width="400"
    height="180"
    alt="Baladeira Studio"
    loading="lazy"
    decoding="async"
  />
);

const ReguaPnab = () => (
  <section className="regua-pnab" aria-label="Apoio e realização">
    {/* desktop: horizontal */}
    <div className="regua-h">
      <Brand />
      <div className="regua-group">
        <p className="regua-label">Apoio:</p>
        <img
          className="regua-h-apoio"
          src={`${A}/regua-pnab-h-apoio.png`}
          width="555"
          height="110"
          alt={APOIO_ALT}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="regua-group">
        <p className="regua-label">Realização:</p>
        <img
          className="regua-h-realizacao"
          src={`${A}/regua-pnab-h-realizacao.png`}
          width="1240"
          height="151"
          alt={REALIZACAO_ALT}
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>

    {/* celular: vertical */}
    <div className="regua-v">
      <Brand />
      <div className="regua-group">
        <p className="regua-label">Apoio:</p>
        <img
          className="regua-v-apoio"
          src={`${A}/regua-pnab-v-apoio.png`}
          width="325"
          height="407"
          alt={APOIO_ALT}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="regua-group">
        <p className="regua-label">Realização:</p>
        <img
          className="regua-v-realizacao"
          src={`${A}/regua-pnab-v-realizacao.png`}
          width="495"
          height="960"
          alt={REALIZACAO_ALT}
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  </section>
);

export default ReguaPnab;
