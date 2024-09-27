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
              <div className="partner-item">
                <img
                  src="/assets/GOV.png"
                  alt="Logo GOV"
                  className="partner-logo"
                />
              </div>
              <div className="split-container">
                <img
                  src="/assets/split.png"
                  alt="Split"
                  className="split-image"
                />
              </div>
              <div className="partner-item">
                <img
                  src="/assets/natal.png"
                  alt="Logo Natal"
                  className="partner-logo"
                />
              </div>
              <div className="split-container">
                <img
                  src="/assets/split.png"
                  alt="Split"
                  className="split-image"
                />
              </div>
              <div className="partner-item">
                <img
                  src="/assets/capangas.png"
                  alt="Logo Capangas"
                  className="partner-logo"
                />
              </div>
            </div>
            {/* Layout para Mobile */}
            <div className="partners-logos-mobile mobile-only">
              {/* Logo GOV maior no mobile */}
              <div className="partner-item gov-logo-mobile">
                <img
                  src="/assets/GOV.png"
                  alt="Logo GOV"
                  className="partner-logo gov-logo"
                />
              </div>
              {/* Logos Natal e Capangas com split entre elas */}
              <div className="partner-row">
                <div className="partner-item">
                  <img
                    src="/assets/natal.png"
                    alt="Logo Natal"
                    className="partner-logo"
                  />
                </div>
                <div className="split-container">
                  <img
                    src="/assets/split-mobile.png"
                    alt="Split"
                    className="split-image"
                  />
                </div>
                <div className="partner-item">
                  <img
                    src="/assets/capangas.png"
                    alt="Logo Capangas"
                    className="partner-logo"
                  />
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
