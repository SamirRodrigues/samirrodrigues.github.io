// src/components/Footer.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid className="footer-container">
        {/* Logo para Desktop */}
        <Row className="align-items-start d-none d-md-flex">
          <Col xs={12} md={12} lg={12} className="logo-container">
            <img
              src="/assets/logo-bs.png"
              alt="Baladeira Studio Logo"
              className="footer-logo"
            />
          </Col>
        </Row>

        {/* Logo e Direitos Reservados para Mobile */}
        <Row className="align-items-center logo-rights-row d-flex d-md-none">
          <Col xs={12} className="logo-container-mobile">
            <img
              src="/assets/logo-bs.png"
              alt="Baladeira Studio Logo"
              className="footer-logo"
            />
          </Col>
        </Row>

        {/* Linha de separação para Mobile */}
        <hr className="footer-split d-md-none" />

        {/* Links de navegação, redes sociais e contato */}
        <Row className="footer-links">
          <Col xs={12} md={4}>
            <h5>SIGA-NOS NAS REDES SOCIAIS</h5>
            <div className="social-icons">
              <a
                href="https://x.com/baladeirastudio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/x-icon.png" alt="X" className="social-icon" />
                @baladeirastudio
              </a>
              <a
                href="https://instagram.com/baladeirastudio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/instagram-icon.png"
                  alt="Instagram"
                  className="social-icon"
                />
                @baladeirastudio
              </a>
            </div>
          </Col>

          <Col xs={12} md={3}>
            <h5>INSTITUCIONAL</h5>
            <ul className="footer-menu">
              <li>
                <a href="#inicio">Início</a>
              </li>
              <li>
                <a href="#quemsomos">Quem somos</a>
              </li>
              <li>
                <a href="#jogos">Jogos</a>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
              <li>
                <a href="/privacypolicy">Política de Privacidade</a>
              </li>
              <li>
                <a href="/termsconditions">Termos e Condições</a>
              </li>
            </ul>
          </Col>

          <Col xs={12} md={4}>
            <h5>CONTATO</h5>
            <p>
              <img
                src="/assets/icon-email.png"
                alt="Email"
                className="social-icon"
              />
              baladeirastudio@gmail.com
            </p>
          </Col>
        </Row>

        {/* Direitos reservados para Desktop */}
        <Row className="footer-rights d-none d-md-flex">
          <Col>
            <p>Todos os direitos reservados.</p>
          </Col>
        </Row>

        {/* Direitos reservados para Mobile, à direita */}
        <Row className="footer-rights-row d-flex d-md-none">
          <Col xs={12} className="footer-rights-mobile">
            <p className="footer-rights-text">Todos os direitos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
