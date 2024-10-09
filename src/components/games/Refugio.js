// src/components/Refugio.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Refugio.css";

const Refugio = () => {
  const handleImageClick = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.BaladeiraStudio.RefugioDoBanze&hl=en-US&ah=lV-6m4YJj7pD-UzKbO1YxH9voPw",
      "_blank"
    );
  };

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
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <img
              src="assets/google-play-badge.png"
              alt="Baixar na Google Play"
              className="google-play-badge"
              onClick={handleImageClick}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Refugio;
