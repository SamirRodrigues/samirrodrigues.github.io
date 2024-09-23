import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import para navegação
import "./FirstSection.css";

// Componente para o botão Saiba Mais
const KnowMoreButton = ({ onClick }) => (
  <Button variant="light" className="btn-know-more" onClick={onClick}>
    <FaChevronRight aria-label="Saiba mais" />
    Saiba mais
  </Button>
);

const FirstSection = () => {
  const navigate = useNavigate(); // Hook para navegação

  const handleKnowMore = () => {
    navigate("/about"); // Redireciona para a página 'Quem Somos'
  };

  return (
    <section className="first-section">
      <Container>
        <Row className="justify-content-center align-items-center text-center">
          <Col lg={10}>
            <Row className="align-items-center">
              <Col xs={12} md={4}>
                <h2 className="first-title">
                  De <strong>Natal</strong> para o<br></br>
                  <strong>MUNDO!</strong>
                </h2>
              </Col>
              <Col xs={12} md={8} className="who-we-are">
                <div className="content-box">
                  <Row className="align-items-center">
                    <Col xs={7} className="box-text">
                      <div className="text-item">
                        <h3>
                          Quem nós <strong>Somos?</strong>
                        </h3>
                      </div>
                      <div className="text-item">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                      </div>
                      <div className="text-item">
                        <KnowMoreButton onClick={handleKnowMore} />
                      </div>
                    </Col>

                    <Col xs={5} className="image-container">
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
