// src/components/FirstSection.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./FirstSection.css";

const FirstSection = () => {
  return (
    <section className="first-section">
      <Container>
        <Row className="justify-content-center align-items-center text-center">
          <Col lg={10}>
            <Row className="align-items-center">
              <Col xs={12} md={4}>
                <h2 className="first-title">
                  De <strong>Natal</strong> para o<br />
                  <strong>MUNDO!</strong>
                </h2>
              </Col>
              <Col xs={12} md={8} className="who-we-are">
                <div className="content-box">
                  <Row className="align-items-center">
                    <Col xs={8} className="box-text">
                      <div className="text-item">
                        <h3>
                          Quem nós <strong>somos?</strong>
                        </h3>
                      </div>
                      <div className="text-item">
                        <p>
                          A <strong>Baladeira Studio</strong> é um estúdio de
                          jogos sérios que transforma ideias criativas em
                          experiências educacionais e culturais únicas. Com
                          raízes em <strong>Natal</strong>, nosso foco é levar
                          narrativas impactantes para o mundo, valorizando a
                          cultura, a educação e a diversão.
                        </p>
                      </div>
                      <div className="text-item">
                        <p>
                          Nossa missão é criar jogos que inspiram, ensinam e
                          emocionam, sempre com uma abordagem inovadora e
                          inclusiva.
                        </p>
                      </div>
                    </Col>

                    <Col xs={4} className="image-container">
                      <img
                        src="/assets/logo-bs-white.png"
                        alt="Baladeira Studio Logo"
                        className="bs-logo"
                      />
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FirstSection;
