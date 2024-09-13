import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa"; // Ícone de seta apropriado
import HeaderGrey from "../components/HeaderGrey"; // Importa o HeaderGrey
import Footer from "../components/Footer"; // Importa o Footer
import "./DetailsPage.css";

const DetailsPage = () => {
  return (
    <>
      <HeaderGrey /> {/* Utiliza o HeaderGrey */}
      <div className="details-page">
        {/* Primeira Seção - Quem nós Somos */}
        <Container fluid className="first-section">
          <Row className="justify-content-between align-items-center text-center">
            <Col xs={2} lg={2}></Col> {/* Espaço à esquerda */}
            <Col xs={8} lg={8}>
              <Row className="align-items-center text-left">
                <Col md={4} className="text-left">
                  <h2 className="first-title">
                    De <strong>Natal</strong> para
                    <br /> o <strong>MUNDO!</strong>
                  </h2>
                </Col>
                <Col md={8} className="who-we-are">
                  <div className="content-box d-flex flex-column flex-md-row align-items-center">
                    <Col md={7} className="text-left">
                      <h3>
                        Quem nós <br /> <strong>Somos?</strong>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <Button variant="light" className="btn-know-more">
                        <FaChevronRight className="icon-left" />
                        Saiba mais
                      </Button>
                    </Col>
                    <Col
                      md={5}
                      className="d-flex align-items-center justify-content-center"
                    >
                      <img
                        src="/assets/logo-bs-white.png"
                        alt="Baladeira Studio Logo"
                        className="bs-logo"
                      />
                    </Col>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={2} lg={2}></Col> {/* Espaço à direita */}
          </Row>
        </Container>

        {/* Segunda Seção - Lançamento */}
        <Container fluid className="launch-section">
          <Row className="justify-content-between text-start">
            <Col xs={2} lg={2}></Col> {/* Espaço à esquerda */}
            <Col xs={8} lg={8} className="launch-title-div">
              <h2 className="launch-title">
                Conheça nosso <strong>lançamento!</strong>
              </h2>
            </Col>
            <Col xs={2} lg={2}></Col> {/* Espaço à direita */}
          </Row>

          <Row className="justify-content-between text-center align-items-center">
            <Col xs={2} lg={2}></Col> {/* Espaço à esquerda */}
            <Col xs={8} lg={8}>
              <div className="launch-content d-flex align-items-center justify-content-between">
                <div className="launch-text">
                  <h3 className="launch-subtitle">O Refúgio do Banzé</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <Button variant="dark" className="launch-btn">
                    <FaChevronRight className="icon-left" />
                    Ver mais
                  </Button>
                </div>
                <div className="launch-logo">
                  <img src="/assets/banzé.png" alt="Refúgio do Banzé" />
                </div>
              </div>
            </Col>
            <Col xs={2} lg={2}></Col> {/* Espaço à direita */}
          </Row>
        </Container>

        {/* Seção de Patrocinadores */}
        <Container fluid className="partners-section">
          <Row className="justify-content-between text-center">
            <Col xs={2} lg={2}></Col> {/* Espaço à esquerda */}
            <Col xs={8} lg={8}>
              <h4 className="partners-title">Parceiros e Apoiadores</h4>
              <div className="partners-logos d-flex justify-content-around">
                <img
                  src="/assets/logo1.png"
                  alt="Logo 1"
                  className="partner-logo"
                />
                <img
                  src="/assets/logo2.png"
                  alt="Logo 2"
                  className="partner-logo"
                />
                <img
                  src="/assets/logo3.png"
                  alt="Logo 3"
                  className="partner-logo"
                />
              </div>
            </Col>
            <Col xs={2} lg={2}></Col> {/* Espaço à direita */}
          </Row>
        </Container>

        {/* Adiciona o componente Footer */}
        <Footer />
      </div>
    </>
  );
};

export default DetailsPage;
