// src/components/Refugio.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap"; // Bootstrap para responsividade
import "./Refugio.css"; // Arquivo CSS específico

const Refugio = () => {
  return (
    <section className="refugio-section">
      <div className="refugio-image-wrapper">
        <img
          src="assets/refugio-banner.png"
          alt="Refúgio Banner"
          className="refugio-banner-image"
        />
      </div>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6} className="refugio-content">
            <h3>O Refúgio de Banzé</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Refugio;
