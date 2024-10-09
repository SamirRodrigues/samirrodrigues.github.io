import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // Rola a página para o topo ao mudar de rota
  };

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
        <Row className="logo-rights-row d-flex d-md-none">
          <Col xs={12} className="d-flex justify-content-between">
            <img
              src="/assets/logo-bs.png"
              alt="Baladeira Studio Logo"
              className="footer-logo"
            />
            <p className="footer-rights-text align-self-end">
              Todos os direitos reservados.
            </p>
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
                <Link to="/" onClick={() => handleNavigation("/")}>
                  Início
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => handleNavigation("/about")}>
                  Quem somos
                </Link>
              </li>
              <li>
                <Link to="/jogos" onClick={() => handleNavigation("/jogos")}>
                  Jogos
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  onClick={() => handleNavigation("/contato")}
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  to="/privacypolicy"
                  onClick={() => handleNavigation("/privacypolicy")}
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  to="/termsconditions"
                  onClick={() => handleNavigation("/termsconditions")}
                >
                  Termos e Condições
                </Link>
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

        {/* Direitos Reservados para Desktop */}
        <Row className="footer-rights d-none d-md-flex">
          <Col>
            <p>Todos os direitos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
