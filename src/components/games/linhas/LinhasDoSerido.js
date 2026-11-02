// Página do jogo Linhas do Seridó.
// Feita só com a arte e a paleta do próprio jogo: linho cru, pontilhado de
// costura, fios nas cores do Bordado Caicó, madeira clara e bordados em camadas.
import React, { useState } from "react";
import "./LinhasDoSerido.css";

const A = "/assets/linhas-do-serido";

// Ordem de empilhamento das camadas do desenho (a mesma do jogo: conferida
// contra a imagem completa, sem diferença de pixel).
const threads = [
  { id: "azul-escuro", name: "Azul escuro", shape: "losango" },
  { id: "rosa", name: "Rosa", shape: "círculo" },
  { id: "azul-claro", name: "Azul claro", shape: "triângulo" },
  { id: "amarelo", name: "Amarelo", shape: "X" },
  { id: "ouro", name: "Ouro", shape: "estrela" },
];

const steps = [
  {
    img: "passo-1",
    title: "Toque num pino",
    text: "O anel do topo sobe. Só ele pode ser movido.",
  },
  {
    img: "passo-2",
    title: "Toque noutro para soltar",
    text: "Vale se o pino tiver espaço e o anel do topo for da mesma cor, ou se estiver vazio.",
  },
  {
    img: "passo-3",
    title: "Complete uma cor",
    text: "Um pino com quatro anéis da mesma cor fica completo, e o desenho ganha uma camada de fio.",
  },
];

const stitches = [
  {
    id: "ponto-cheio",
    name: "Ponto cheio",
    text: "Preenche as áreas com uma única cor de linha, em hastes finas ou formas cheias. Apresenta a mecânica com formas simples.",
    drawings: [
      ["01", "Folha"],
      ["02", "Haste com folhas"],
      ["03", "Flor de cinco pétalas"],
    ],
  },
  {
    id: "richelieu",
    name: "Richelieu",
    text: "O ponto mais característico do bordado de Caicó: áreas vazadas, preenchidas com uma nova trama.",
    drawings: [
      ["04", "Pétala vazada"],
      ["05", "Ramo de folhas"],
      ["06", "Flor Richelieu"],
    ],
  },
  {
    id: "matiz",
    name: "Matiz",
    text: "Linhas de várias cores combinadas para criar efeito de cor e luz. Pede atenção a tons próximos.",
    drawings: [
      ["07", "Flor matizada"],
      ["08", "Fruta cercada de flores"],
      ["09", "Pássaro entre flores"],
    ],
  },
  {
    id: "rococo",
    name: "Rococó à mão",
    text: "Fio enrolado que forma relevos e detalhes, como o miolo da flor. Fecha o protótipo com o desenho mais completo.",
    drawings: [
      ["10", "Botão de rococó"],
      ["11", "Flor com miolo em rococó"],
      ["12", "Arranjo final"],
    ],
  },
];

const resources = [
  {
    img: "recurso-desfazer",
    name: "Desfazer",
    text: "Volta a última jogada, para experimentar sem medo de errar.",
  },
  {
    img: "recurso-dica",
    name: "Dica",
    text: "Mostra um movimento possível, do pino de origem ao de destino.",
  },
  {
    img: "recurso-pino-extra",
    name: "Pino extra",
    text: "Libera um pino vazio a mais. Vale uma vez por fase.",
  },
];

const process = [
  {
    name: "Riscado",
    text: "O desenho aparece como silhueta tracejada antes de a fase começar.",
  },
  {
    name: "Cobrir",
    text: "Cada cor completada cobre uma parte do desenho com fio.",
  },
  {
    name: "Arremate",
    text: "Na vitória, o bordado ganha brilho e acabamento.",
  },
  {
    name: "Embalar",
    text: "O desenho concluído vira miniatura na trilha e entra na Coleção.",
  },
];

// Backgrounds go through CSS variables: the CRA CSS loader cannot resolve
// absolute /assets paths inside .css files.
const bgVars = {
  "--ls-img-linho": `url(${A}/linho.webp)`,
  "--ls-img-botao": `url(${A}/botao-primario.webp)`,
  "--ls-img-botao-off": `url(${A}/botao-desabilitado.webp)`,
  "--ls-img-botao-sec": `url(${A}/botao-secundario.webp)`,
};

const Img = ({ name, w, h, alt = "", className, ...rest }) => (
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

const LinhasDoSerido = () => {
  const [done, setDone] = useState([]); // thread ids already stitched

  const toggle = (id) =>
    setDone((cur) => (cur.includes(id) ? cur.filter((c) => c !== id) : [...cur, id]));
  const all = done.length === threads.length;

  return (
    <div className="ls" style={bgVars}>
      {/* ---------- Abertura ---------- */}
      <section className="ls-hero" aria-labelledby="ls-title">
        <div className="ls-wrap ls-hero-grid">
          <div className="ls-hero-text">
            <h1 id="ls-title" className="ls-logo">
              <img
                src={`${A}/logo.webp`}
                alt="Linhas do Seridó"
                width="720"
                height="399"
                fetchpriority="high"
              />
            </h1>
            <p className="ls-tagline">Bordando memórias, desatando histórias</p>
            <p className="ls-lead">
              Separe anéis de lã por cor em pinos de madeira. A cada cor
              completada, uma camada do desenho é bordada no tecido, até
              aparecer um padrão inspirado no Bordado Caicó, tradição do Seridó
              potiguar.
            </p>
            <div className="ls-actions">
              <div className="ls-spool ls-spool-off" role="note">
                <span>Download em breve</span>
              </div>
              <a className="ls-spool ls-spool-light" href="#como-se-joga">
                <span>Como se joga</span>
              </a>
            </div>
            <p className="ls-fine">
              Protótipo jogável para Android, em retrato.
            </p>
          </div>
          <div className="ls-hero-art">
            <img
              src={`${A}/bastidor.webp`}
              alt="Bastidor com uma flor Richelieu bordada em fios rosa, amarelo e azul, com o miolo em rococó"
              width="560"
              height="612"
              fetchpriority="high"
            />
          </div>
        </div>
      </section>

      {/* ---------- Como se joga ---------- */}
      <section className="ls-section" id="como-se-joga" aria-labelledby="ls-how">
        <div className="ls-wrap">
          <h2 id="ls-how" className="ls-heading">
            Como se joga
          </h2>
          <ol className="ls-steps">
            {steps.map((s) => (
              <li key={s.img} className="ls-card ls-step">
                <Img name={s.img} w="520" h="380" className="ls-step-img" />
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
          <ul className="ls-rules">
            <li>Cada pino comporta até quatro anéis.</li>
            <li>Na primeira partida, uma fase guiada ensina a jogar e só aceita a jogada certa.</li>
            <li>Sem vidas nem energia: se travar, desfaça, peça uma dica, libere um pino extra ou reinicie a fase.</li>
          </ul>
        </div>
      </section>

      {/* ---------- Demonstração das camadas ---------- */}
      <section className="ls-section ls-section-shade" id="bordar" aria-labelledby="ls-demo">
        <div className="ls-wrap ls-demo">
          <div className="ls-demo-text">
            <h2 id="ls-demo" className="ls-heading">
              Cada cor completa uma camada
            </h2>
            <p className="ls-lead">
              No jogo, cada fio que você completa borda uma parte do desenho.
              Toque nos fios para ver o Arranjo final ganhar forma.
            </p>
            <ul className="ls-threads">
              {threads.map((t) => {
                const on = done.includes(t.id);
                return (
                  <li key={t.id}>
                    <button
                      type="button"
                      className="ls-thread"
                      aria-pressed={on}
                      onClick={() => toggle(t.id)}
                    >
                      <Img name={`marca-${t.id}`} w="120" h="120" className="ls-thread-mark" />
                      <span>{t.name}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <p className="ls-count" aria-live="polite">
              {done.length === 0
                ? "Nenhuma cor completada ainda."
                : all
                ? "As cinco cores estão completas. O bordado está pronto!"
                : `${done.length} de ${threads.length} cores completas.`}
            </p>
            <div className="ls-actions">
              <button
                type="button"
                className="ls-spool"
                onClick={() => setDone(threads.map((t) => t.id))}
                disabled={all}
              >
                <span>Bordar tudo</span>
              </button>
              <button
                type="button"
                className="ls-spool ls-spool-light"
                onClick={() => setDone([])}
                disabled={done.length === 0}
              >
                <span>Recomeçar</span>
              </button>
            </div>
          </div>
          <div
            className="ls-frame"
            role="img"
            aria-label={`Arranjo final: pássaro sobre uma flor de miolo em rococó. ${done.length} de ${threads.length} camadas bordadas.`}
          >
            <img src={`${A}/d12-silhueta.webp`} alt="" width="640" height="640" className="ls-layer ls-layer-base" />
            {threads.map((t) => (
              <img
                key={t.id}
                src={`${A}/d12-${t.id}.webp`}
                alt=""
                width="640"
                height="640"
                className="ls-layer"
                data-on={done.includes(t.id)}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Pontos ---------- */}
      <section className="ls-section" aria-labelledby="ls-pontos">
        <div className="ls-wrap">
          <h2 id="ls-pontos" className="ls-heading">
            Quatro pontos, doze desenhos
          </h2>
          <p className="ls-lead">
            Cada bloco da trilha ensina um ponto do Bordado Caicó, com três
            fases. Ao concluir as três, o jogador ganha o selo do ponto. A
            Indicação de Procedência Caicó reconhece doze pontos: o protótipo
            traz quatro, e os outros oito ficam para versões futuras.
          </p>
          <ul className="ls-stitches">
            {stitches.map((s) => (
              <li key={s.id} className="ls-card ls-stitch">
                <div className="ls-stitch-head">
                  <Img name={`amostra-${s.id}`} w="256" h="256" className="ls-sample" />
                  <Img name={`selo-${s.id}`} w="300" h="375" className="ls-seal" />
                </div>
                <h3>{s.name}</h3>
                <p>{s.text}</p>
                <ul className="ls-drawings">
                  {s.drawings.map(([n, name]) => (
                    <li key={n}>
                      <Img name={`desenho-${n}`} w="320" h="320" />
                      <span>{name}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Pontos de Cultura, Coleção e recursos ---------- */}
      <section className="ls-section ls-section-shade" aria-labelledby="ls-cultura">
        <div className="ls-wrap">
          <h2 id="ls-cultura" className="ls-heading">
            Pontos de Cultura e Coleção
          </h2>
          <p className="ls-lead">
            Cada fase concluída rende Pontos de Cultura. Eles desbloqueiam
            curiosidades sobre o bordado na Coleção, onde também ficam os
            selos de cada ponto, e podem ser trocados na Loja por recursos de
            apoio.
          </p>
          <ul className="ls-resources">
            {resources.map((r) => (
              <li key={r.img} className="ls-card ls-resource">
                <Img name={r.img} w="288" h="312" className="ls-resource-img" />
                <h3>{r.name}</h3>
                <p>{r.text}</p>
              </li>
            ))}
          </ul>
          <p className="ls-fine">
            Os recursos que sobram ficam guardados para as próximas fases.
          </p>
        </div>
      </section>

      {/* ---------- Tradição ---------- */}
      <section className="ls-section" aria-labelledby="ls-tradicao">
        <div className="ls-wrap ls-tradition">
          <div>
            <h2 id="ls-tradicao" className="ls-heading">
              Do riscado ao embalar
            </h2>
            <p className="ls-lead">
              O bordado seridoense é uma tradição passada entre gerações, de
              mães e avós para as mais novas. É produzido em cidades como Caicó
              e Timbaúba dos Batistas, e cada fase do jogo faz referência às
              etapas do ofício.
            </p>
            <ol className="ls-process">
              {process.map((p, i) => (
                <li key={p.name}>
                  <span className="ls-process-n" aria-hidden="true">
                    {i + 1}
                  </span>
                  <div>
                    <h3>{p.name}</h3>
                    <p>{p.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="ls-notice" role="note">
              <strong>Conteúdo cultural em revisão.</strong> As informações
              foram resumidas do site da IG Bordado de Caicó
              (bordadodecaico.com.br) e ainda serão revisadas com as bordadeiras.
            </p>
          </div>
          <div className="ls-medal">
            <Img
              name="desenho-03"
              w="320"
              h="320"
              alt="Flor de cinco pétalas bordada em fios rosa e amarelo, com haste e folhas azuis"
            />
          </div>
        </div>
      </section>

      {/* ---------- Acessibilidade ---------- */}
      <section className="ls-section ls-section-shade" aria-labelledby="ls-acess">
        <div className="ls-wrap">
          <h2 id="ls-acess" className="ls-heading">
            Para jogar sem depender da cor
          </h2>
          <p className="ls-lead">
            Cada cor de fio também tem uma forma marcada no anel, para quem
            confunde tons próximos. As marcas podem ser desligadas em Ajustes.
          </p>
          <ul className="ls-rings">
            {threads.map((t) => (
              <li key={t.id}>
                <Img name={`anel-${t.id}`} w="288" h="162" />
                <span>
                  {t.name}: {t.shape}
                </span>
              </li>
            ))}
          </ul>
          <ul className="ls-access-list">
            <li>Controles só por toque, com um dedo, e alto contraste entre os fios e o fundo.</li>
            <li>Em Ajustes, chaves separadas para música e efeitos sonoros (a dos efeitos também controla a vibração) e para as marcas nos anéis.</li>
            <li>Sem punição por erro: dá para desfazer, pedir dica ou recomeçar a fase.</li>
          </ul>
          <div className="ls-card ls-audience">
            <p>
              Pensado para crianças e jovens de 8 a 16 anos, estudantes,
              educadores e quem se interessa pela cultura popular brasileira.
              As sessões são curtas: uma ou duas fases já fazem a trilha
              avançar.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Fechamento ---------- */}
      <section className="ls-closing" aria-labelledby="ls-closing">
        <img src={`${A}/desenho-05.webp`} alt="" className="ls-corner ls-corner-tl" width="320" height="320" loading="lazy" />
        <img src={`${A}/desenho-03.webp`} alt="" className="ls-corner ls-corner-br" width="320" height="320" loading="lazy" />
        <div className="ls-wrap ls-closing-inner">
          <h2 id="ls-closing" className="ls-heading">
            Em breve no Android
          </h2>
          <p className="ls-lead">
            O download ainda não está disponível. Quando estiver, o aviso sai
            primeiro nas redes do estúdio.
          </p>
          <a
            className="ls-spool"
            href="https://instagram.com/baladeirastudio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Siga @baladeirastudio</span>
          </a>
          <p className="ls-thanks">
            Nosso agradecimento às bordadeiras do Seridó, que transmitem esse
            ofício de geração em geração e mantêm viva a tradição do Bordado
            Caicó.
          </p>
          <p className="ls-fine">
            A música (“Baião lo-fi”) e os efeitos sonoros são originais do
            projeto.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LinhasDoSerido;
