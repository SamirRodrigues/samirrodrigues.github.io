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
              <h3>Características do período escravocrata</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
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
              <h3>Administração na prática</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
