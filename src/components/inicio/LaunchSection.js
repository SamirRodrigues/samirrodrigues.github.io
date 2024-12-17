// src/components/LaunchSection.js
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./LaunchSection.css";

const LaunchSection = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/jogos");
    window.scrollTo(0, 0); // Rola a página para o topo
  };

  return (
    <section className="launch-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} className="px-0">
            {/* Logo exibida apenas no mobile, acima do conteúdo */}
            <h2 className="launch-title">
              Conheça nosso <strong>lançamento!</strong>
            </h2>
            <div className="launch-logo mobile-only">
              <img src="/assets/banzé-white.png" alt="Refúgio do Banzé" />
            </div>
            <div className="launch-content">
              <div className="launch-text">
                <h3 className="launch-subtitle">O Refúgio do Banzé</h3>
                <p>
                  "Refúgio do Banzé" é mais do que um jogo. É uma celebração da
                  cultura, história e resistência quilombola. Desenvolvido pela
                  <strong> Baladeira Studio</strong>, o jogo convida você a
                  explorar narrativas imersivas e emocionantes que resgatam a
                  luta pela liberdade e dignidade.
                </p>
                <p>
                  Unimos educação e entretenimento em uma experiência única,
                  onde cada detalhe traz vida à diversidade e riqueza cultural
                  do povo quilombola.
                </p>
                {/* Botão que redireciona para a página de jogos */}
                <Button
                  variant="dark"
                  className="launch-btn"
                  onClick={handleNavigation}
                >
                  <FaChevronRight />
                  Ver mais
                </Button>
              </div>
              {/* Logo exibida apenas no desktop */}
              <div className="launch-logo desktop-only justify-content-center">
                <img src="/assets/banzé.png" alt="Refúgio do Banzé" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LaunchSection;
