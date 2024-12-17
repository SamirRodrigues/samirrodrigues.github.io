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
          alt="Refúgio do Banzé Banner"
          className="refugio-banner-image"
        />
      </div>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6} className="refugio-content">
            <h3>O Refúgio do Banzé</h3>
            <p>
              <strong>Refúgio do Banzé</strong> é um jogo envolvente que resgata
              e celebra a cultura quilombola, destacando sua história, tradições
              e resistência. Desenvolvido pela <strong>Baladeira Studio</strong>
              , o jogo oferece uma experiência educativa e emocionante, onde os
              jogadores são convidados a explorar um universo rico em narrativas
              e desafios.
            </p>
            <p>
              Embarque nesta jornada de conhecimento e aventura, onde cada etapa
              revela a importância da liberdade, união e cultura. Disponível
              agora na <strong>Google Play</strong>!
            </p>
            <img
              src="assets/google-play-badge.png"
              alt="Baixar na Google Play"
              className="google-play-badge"
              onClick={handleImageClick}
              style={{ cursor: "pointer" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Refugio;
