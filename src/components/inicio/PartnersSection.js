// src/components/PartnersSection.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./PartnersSection.css";

const PartnersSection = () => {
  return (
    <section className="partners-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            {/* Layout para Desktop */}
            <div className="partners-logos desktop-only">
              <div className="partner-item gov-item">
                <a
                  href="https://www.gov.br/secom/pt-br/acesso-a-informacao/comunicabr/lista-de-acoes-e-programas/lei-paulo-gustavo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/GOV.png"
                    alt="Logo GOV"
                    className="partner-logo gov-logo"
                  />
                </a>
              </div>
              <div className="split-container">
                <img
                  src="/assets/split.png"
                  alt="Split"
                  className="split-image"
                />
              </div>
              <div className="partner-item natal-item">
                <a
                  href="https://www.natal.rn.gov.br/secult"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/natal.png"
                    alt="Logo Natal"
                    className="partner-logo natal-logo"
                  />
                </a>
              </div>
              <div className="split-container">
                <img
                  src="/assets/split.png"
                  alt="Split"
                  className="split-image"
                />
              </div>
              <div className="partner-item capangas-item">
                <a
                  href="https://www.instagram.com/capangasrn/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/capangas.png"
                    alt="Logo Capangas"
                    className="partner-logo capangas-logo"
                  />
                </a>
              </div>
            </div>
            {/* Layout para Mobile */}
            <div className="partners-logos-mobile mobile-only">
              {/* Logo GOV maior no mobile */}
              <div className="partner-item gov-item gov-logo-mobile">
                <a
                  href="https://www.gov.br/secom/pt-br/acesso-a-informacao/comunicabr/lista-de-acoes-e-programas/lei-paulo-gustavo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/GOV.png"
                    alt="Logo GOV"
                    className="partner-logo gov-logo"
                  />
                </a>
              </div>
              {/* Logos Natal e Capangas com split entre elas */}
              <div className="partner-row">
                <div className="partner-item natal-item">
                  <a
                    href="https://www.natal.rn.gov.br/secult"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/assets/natal.png"
                      alt="Logo Natal"
                      className="partner-logo natal-logo"
                    />
                  </a>
                </div>
                <div className="split-container">
                  <img
                    src="/assets/split-mobile.png"
                    alt="Split"
                    className="split-image"
                  />
                </div>
                <div className="partner-item capangas-item">
                  <a
                    href="https://www.instagram.com/capangasrn/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/assets/capangas.png"
                      alt="Logo Capangas"
                      className="partner-logo capangas-logo"
                    />
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PartnersSection;
