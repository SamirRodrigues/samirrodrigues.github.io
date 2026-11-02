// Página do jogo Brilhante Folclore.
// Feita só com a arte e as cores do próprio jogo (guia de estilo do jogo:
// contorno marrom #42210B, creme #FBECD5, madeira, fonte Darumadrop One).
import React, { useState } from "react";
import { legends } from "./legends";
import ExternalMark from "../../body/ExternalMark";
import "./BrilhanteFolclore.css";

const A = "/assets/brilhante";

const steps = [
  {
    icon: "icon-move",
    title: "Ande, ele atira",
    text: "Mexa o joystick para andar. Parou? O Jesuíno atira sozinho no inimigo mais perto.",
  },
  {
    icon: "icon-ammo",
    title: "Cuide da munição",
    text: "Correr e atirar gasta bala. Parado, a bala volta.",
  },
  {
    icon: "icon-damage",
    title: "Fique mais forte",
    text: "A cada onda vencida, escolha 1 entre 3 cards.",
  },
  {
    icon: "coin",
    title: "Gaste as moedas",
    text: "Compre melhorias no Mercadão e desbloqueie as relíquias do cangaço.",
  },
];

// Cards exatamente como aparecem na tela de escolha do jogo.
const cards = [
  {
    id: "dano",
    bg: "card-yellow",
    icon: "icon-damage",
    effect: "+ 1,2 de dano",
    name: "Espingarda média",
  },
  {
    id: "vida",
    bg: "card-green",
    icon: "icon-health",
    effect: "+ 15 vida máx.",
    name: "Cantil cheio",
  },
  {
    id: "cura",
    bg: "card-green",
    icon: "icon-health",
    effect: "+ 4 de cura",
    name: "Gole fraco",
  },
];

const access = [
  "Fonte opcional mais fácil de ler",
  "Volume de música e de efeitos separados",
  "Três níveis de dificuldade",
  "Joystick ajustável ou botões de direção",
  "Opção “Reduzir efeitos”, que tira tremores e brilhos",
];

// Backgrounds are passed as CSS variables: the CRA CSS loader cannot resolve
// absolute /assets paths inside .css files.
const bgVars = {
  "--bf-img-sky": `url(${A}/sky.webp)`,
  "--bf-img-wood": `url(${A}/wood.webp)`,
  "--bf-img-wood-dark": `url(${A}/wood-dark.webp)`,
};

const Img = ({ name, alt = "", w, h, className, ...rest }) => (
  <img
    src={`${A}/${name}.webp`}
    alt={alt}
    width={w}
    height={h}
    className={className}
    loading="lazy"
    decoding="async"
    {...rest}
  />
);

const BrilhanteFolclore = () => {
  const [picked, setPicked] = useState(null);
  const pickedCard = cards.find((c) => c.id === picked);

  return (
    <div className="bf" style={bgVars}>
      {/* ---------- Abertura ---------- */}
      <section className="bf-hero" aria-labelledby="bf-title">
        <img src={`${A}/cloud-1.webp`} alt="" className="bf-cloud bf-cloud-1" width="420" height="264" />
        <img src={`${A}/cloud-2.webp`} alt="" className="bf-cloud bf-cloud-2" width="340" height="222" />
        <div className="bf-wrap bf-hero-inner">
          <img
            src={`${A}/jesuino-badge.webp`}
            alt="Jesuíno Brilhante, o jogador, de chapéu de couro e lenço vermelho"
            className="bf-badge"
            width="420"
            height="419"
            fetchpriority="high"
          />
          <h1 id="bf-title" className="bf-title">
            Brilhante Folclore
          </h1>
          <p className="bf-hero-text bf-paper">
            Chapéu de couro na cabeça, espingarda na mão e o sertão inteiro de
            olho! Jesuíno Brilhante enfrenta as lendas do Rio Grande do Norte em
            Ceará-Mirim.
          </p>
          <div className="bf-hero-actions">
            <div className="bf-soon" role="note">
              <Img name="plank-yellow" w="480" h="170" className="bf-soon-bg" />
              <span>Download em breve</span>
            </div>
            <a className="bf-sign" href="#lendas">
              <Img name="sign-red" w="600" h="264" className="bf-sign-bg" />
              <span>Ver as lendas</span>
            </a>
          </div>
          <p className="bf-hero-note">
            Versão de teste, só para Android (tablet em retrato).
          </p>
        </div>
      </section>

      {/* ---------- Como se joga ---------- */}
      <section className="bf-wood" aria-labelledby="bf-how">
        <div className="bf-wrap">
          <h2 id="bf-how" className="bf-heading">
            Como se joga
          </h2>
          <ul className="bf-steps">
            {steps.map((s) => (
              <li key={s.title} className="bf-step bf-paper">
                <Img name={s.icon} w="300" h="290" className="bf-step-icon" />
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Cards ---------- */}
      <section className="bf-sand" aria-labelledby="bf-cards">
        <div className="bf-wrap">
          <h2 id="bf-cards" className="bf-heading">
            Acabou a onda? Escolha um card
          </h2>
          <p className="bf-lead">
            A fase tem 20 ondas. Entre uma e outra, o jogo oferece 3 cards e
            você leva um. Toque em um deles para ver como é.
          </p>
          <ul className="bf-cards">
            {cards.map((c) => (
              <li key={c.id}>
                <button
                  type="button"
                  className="bf-card"
                  aria-pressed={picked === c.id}
                  data-dim={picked && picked !== c.id ? "true" : undefined}
                  onClick={() => setPicked(picked === c.id ? null : c.id)}
                >
                  <Img name={c.bg} w="420" h="594" className="bf-card-bg" />
                  <Img name={c.icon} w="300" h="290" className="bf-card-icon" />
                  <span className="bf-card-effect">{c.effect}</span>
                  <span className="bf-card-name">{c.name}</span>
                </button>
              </li>
            ))}
          </ul>
          <p className="bf-cards-caption" aria-live="polite">
            {pickedCard
              ? `Você escolheu ${pickedCard.name}: ${pickedCard.effect.toLowerCase().replace(/\.$/, "")}. Toque de novo para desfazer.`
              : "Acabou a onda! Toca num card pra ficar mais forte."}
          </p>
        </div>
      </section>

      {/* ---------- Fase ---------- */}
      <section className="bf-wood" aria-labelledby="bf-level">
        <div className="bf-wrap bf-level">
          <div className="bf-level-card">
            <Img name="level-card" w="700" h="856" className="bf-level-paper" />
            <Img name="level-map" w="640" h="692" className="bf-level-map" alt="Mapa da fase, com um X vermelho marcando o caminho" />
            <Img name="level-name" w="560" h="214" className="bf-level-name" />
          </div>
          <div className="bf-paper bf-level-text">
            <h2 id="bf-level">Ceará-Mirim, o vale dos engenhos</h2>
            <p>
              A fase é a Casa Grande, o caminho de pedra e as palmeiras de uma
              cidade do Rio Grande do Norte às margens do rio de mesmo nome.
              Depois dos potiguares, o vale prosperou com engenhos de cana,
              movidos pelo trabalho de pessoas escravizadas. Dessa época vieram
              os casarões e as casas-grandes.
            </p>
            <p className="bf-fine">
              No jogo, a fase é vencida depois de 20 ondas.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Caderno de Lendas ---------- */}
      <section className="bf-lendas" id="lendas" aria-labelledby="bf-lendas-title">
        <div className="bf-wrap">
          <h2 id="bf-lendas-title" className="bf-heading">
            Caderno de Lendas
          </h2>
          <p className="bf-lead">
            Derrote as criaturas para liberar as fichas. Estas são as cinco do
            jogo.
          </p>
          <p className="bf-review" role="note">
            <strong>Conteúdo cultural em revisão.</strong> Estes textos ainda
            não foram revisados por historiador ou educador. Quando uma
            informação varia entre as fontes, a ficha diz “segundo a tradição”
            ou “segundo relatos”.
          </p>
          <ul className="bf-legends">
            {legends.map((l) => (
              <li key={l.id} id={`ficha-${l.id}`} className="bf-legend bf-paper">
                <div className="bf-legend-head">
                  <img
                    src={l.icon}
                    alt=""
                    className="bf-legend-icon"
                    width="360"
                    height="360"
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <h3>{l.name}</h3>
                    <p className="bf-legend-sub">{l.subtitle}</p>
                  </div>
                </div>
                <p className="bf-legend-game">
                  <strong>No jogo:</strong> {l.inGame}
                </p>
                <details>
                  <summary>Ler a ficha</summary>
                  <p>{l.text}</p>
                  {l.quote && (
                    <blockquote>
                      “{l.quote}”
                      <cite>{l.credit}</cite>
                    </blockquote>
                  )}
                  <p>
                    <strong>Curiosidade:</strong> {l.curiosity}
                  </p>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Acessibilidade ---------- */}
      <section className="bf-sand" aria-labelledby="bf-access">
        <div className="bf-wrap bf-access">
          <div className="bf-paper bf-access-card">
            <h2 id="bf-access">Pensado para todo mundo</h2>
            <ul>
              {access.map((a) => (
                <li key={a}>
                  <Img name="star" w="200" h="180" className="bf-star" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
            <p className="bf-fine">
              Para estudantes de 11 a 17 anos, professores e curiosos de
              qualquer idade. O jogo tem combate com armas de fogo, em desenho
              cartunesco.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Fechamento ---------- */}
      <section className="bf-closing" aria-labelledby="bf-closing">
        <div className="bf-wrap bf-closing-inner">
          <Img name="hat" w="700" h="343" className="bf-closing-hat" />
          <h2 id="bf-closing" className="bf-heading">
            Em breve no seu tablet
          </h2>
          <p className="bf-lead">
            O download ainda não está disponível. Quando estiver, o aviso sai
            primeiro nas redes do estúdio.
          </p>
          <a
            className="bf-sign"
            href="https://instagram.com/baladeirastudio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img name="sign-red" w="600" h="264" className="bf-sign-bg" />
            <span>
              Siga{" "}
              <span className="bf-nowrap">
                @baladeirastudio
                <ExternalMark />
              </span>
            </span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default BrilhanteFolclore;
