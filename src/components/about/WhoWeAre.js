import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./WhoWeAre.css"; // CSS file for specific styles

const WhoWeAre = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Função para verificar o tamanho da tela e definir se é mobile
  const checkIsMobile = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // Verifica se a tela é mobile ao montar o componente e ao redimensionar
  useEffect(() => {
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <section className="who-we-are-section">
      <Container>
        <div className="who-we-are-container">
          <Row className="align-items-center">
            <Col xs={0} md={1}></Col> {/* Left spacer */}
            {/* Mostrar logo em coluna lateral apenas no desktop */}
            {!isMobile && (
              <Col xs={12} md={3} className="who-we-are-logo">
                <img src="assets/bs-icon-grey.png" alt="Logo" />
              </Col>
            )}
            <Col xs={12} md={7}>
              <div className="who-we-are-text-card">
                {/* Mostrar logo dentro do card apenas no mobile */}
                {isMobile && (
                  <div className="who-we-are-logo-container">
                    <img
                      src="assets/bs-icon-grey.png"
                      alt="Logo"
                      className="who-we-are-logo"
                    />
                  </div>
                )}
                <h3>
                  Quem nós <strong>SOMOS?</strong>
                </h3>
                <p>
                  A <strong>Baladeira Studio</strong> é um estúdio de jogos
                  sérios dedicado a criar experiências educativas e imersivas.
                  Nosso foco está em unir cultura, inovação e entretenimento,
                  abordando temas sociais, históricos e educacionais de forma
                  dinâmica e envolvente.
                </p>
                <p>
                  Com raízes em <strong>Natal</strong> e um olhar global, nossa
                  missão é transformar narrativas importantes em jogos que
                  emocionam, inspiram e ensinam.
                </p>
              </div>
            </Col>
            <Col xs={0} md={1}></Col> {/* Right spacer */}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default WhoWeAre;
