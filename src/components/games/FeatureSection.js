// src/components/FeatureSection.js
import React from "react";
import "./FeatureSection.css";
import "bootstrap/dist/css/bootstrap.min.css";

const FeatureSection = () => {
  return (
    <section className="feature-section">
      {/* Primeira sessão */}
      <div
        className="feature-item"
        style={{
          backgroundImage: "url('assets/feature1-bg.png')",
          color: "#393645",
        }}
      >
        <div className="feature-inner container">
          <div className="row align-items-center">
            <div className="col-auto text-center">
              <img
                src="assets/feature1-img.png"
                alt="Características do período escravocrata"
                className="feature-image"
              />
            </div>
            <div className="col text-left">
              <h3>Explore o período escravocrata</h3>
              <p>
                Mergulhe em uma jornada histórica que destaca as principais
                características do período escravocrata. Aprenda sobre os
                desafios enfrentados e a resistência do povo quilombola em busca
                de liberdade e dignidade.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Segunda sessão */}
      <div
        className="feature-item second-feature"
        style={{ backgroundColor: "#920304", color: "#ffffff" }}
      >
        <div className="feature-inner container">
          <div className="row align-items-center">
            <div className="col text-left">
              <h3>Administre com estratégia</h3>
              <p>
                Desenvolva suas habilidades de gestão e liderança ao administrar
                recursos, tomar decisões e proteger a comunidade. Coloque a
                teoria em prática e fortaleça o quilombo com escolhas
                estratégicas.
              </p>
            </div>
            <div className="col-auto text-center">
              <img
                src="assets/feature2-img.png"
                alt="Administração na prática"
                className="feature-image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Terceira sessão */}
      <div
        className="feature-item"
        style={{
          backgroundImage: "url('assets/feature3-bg.png')",
          color: "#393645",
        }}
      >
        <div className="feature-inner container">
          <div className="row align-items-center">
            <div className="col-auto text-center">
              <img
                src="assets/feature3-img.png"
                alt="Estruture táticas e proteja o quilombo"
                className="feature-image"
              />
            </div>
            <div className="col text-left">
              <h3>Estruture táticas e proteja o quilombo</h3>
              <p>
                Planeje e implemente táticas defensivas para proteger o
                quilombo. Enfrente desafios, resista às adversidades e garanta a
                sobrevivência e prosperidade da comunidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
