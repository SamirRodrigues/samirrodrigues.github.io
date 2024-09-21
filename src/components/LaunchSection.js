// src/components/LaunchSection.js
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa";
import "./LaunchSection.css";

const LaunchSection = () => {
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Button variant="dark" className="launch-btn">
                  <FaChevronRight />
                  Ver mais
                </Button>
              </div>
              {/* Logo exibida apenas no desktop */}
              <div className="launch-logo desktop-only">
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
