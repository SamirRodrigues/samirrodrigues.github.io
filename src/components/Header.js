import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  const [activeKey, setActiveKey] = useState("#inicio");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isTablet, setIsTablet] = useState(
    window.innerWidth >= 768 && window.innerWidth <= 1024
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleSelect = (selectedKey) => {
    setActiveKey(selectedKey);

    // Fecha o menu após 300ms no mobile/tablet
    if (isMobile || isTablet) {
      setTimeout(() => {
        setMenuOpen(false);
      }, 300); // Ajuste para coincidir com o tempo de transição
    }
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const updateViewPort = () => {
    setIsMobile(window.innerWidth < 768);
    setIsTablet(window.innerWidth >= 768 && window.innerWidth <= 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", updateViewPort);
    return () => {
      window.removeEventListener("resize", updateViewPort);
    };
  }, []);

  return (
    <Navbar expand="lg" className="main-header" expanded={menuOpen}>
      <Container fluid>
        <Row className="w-100 align-items-center">
          {/* Espaçamento esquerdo */}
          <Col xs={1} lg={2}></Col>

          {/* Coluna da logo */}
          <Col
            xs="auto"
            lg={1}
            className="d-flex align-items-center justify-content-start"
          >
            <Navbar.Brand href="#inicio">
              <img
                src="assets/logo-bs.png"
                alt="Baladeira Studio Logo"
                className="logo"
              />
            </Navbar.Brand>
          </Col>

          {/* Navbar central */}
          <Col
            xs="auto"
            lg={6}
            className="d-flex justify-content-center align-items-center flex-grow-1"
          >
            {!isMobile && !isTablet && (
              <Nav
                className="nav-menu"
                activeKey={activeKey}
                onSelect={handleSelect}
              >
                <Nav.Link
                  href="#inicio"
                  className={`nav-link ${
                    activeKey === "#inicio" ? "active" : ""
                  }`}
                >
                  INÍCIO
                </Nav.Link>
                <Nav.Link
                  href="#quemsomos"
                  className={`nav-link ${
                    activeKey === "#quemsomos" ? "active" : ""
                  }`}
                >
                  QUEM SOMOS
                </Nav.Link>
                <Nav.Link
                  href="#jogos"
                  className={`nav-link ${
                    activeKey === "#jogos" ? "active" : ""
                  }`}
                >
                  JOGOS
                </Nav.Link>
                <Nav.Link
                  href="#contato"
                  className={`nav-link ${
                    activeKey === "#contato" ? "active" : ""
                  }`}
                >
                  CONTATO
                </Nav.Link>
              </Nav>
            )}
          </Col>

          {/* Ícones do Instagram e X - Apenas no desktop */}
          {!isMobile && !isTablet && (
            <Col
              xs="auto"
              lg={1}
              className="d-flex justify-content-center align-items-center"
            >
              <div className="nav-icons">
                <img
                  src="assets/x-icon.png"
                  alt="Ícone X"
                  className="nav-icon"
                />
                <img
                  src="assets/instagram-icon.png"
                  alt="Ícone Instagram"
                  className="nav-icon"
                />
              </div>
            </Col>
          )}

          {/* Menu Hambúrguer no Mobile/Tablet */}
          {(isMobile || isTablet) && (
            <Col
              xs="auto"
              lg={1}
              className="d-flex align-items-center justify-content-end pr-0"
            >
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                className="custom-toggler"
                onClick={toggleMenu}
              >
                <img
                  src="assets/sanduich-icon.png"
                  alt="Menu"
                  className="sanduich-icon"
                />
              </Navbar.Toggle>
            </Col>
          )}

          {/* Espaçamento direito */}
          <Col xs={0} lg={2}></Col>
        </Row>

        {/* Menu colapsável com ícones quando aberto no mobile/tablet */}
        {(isMobile || isTablet) && (
          <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse">
            <div className="header-top">
              <Navbar.Brand href="#inicio">
                <img
                  src="assets/bs-icon.png"
                  alt="Baladeira Studio Logo"
                  className="logo"
                />
              </Navbar.Brand>
              <button className="close-btn" onClick={toggleMenu}>
                <img src="assets/close.png" alt="Fechar" />
              </button>
            </div>
            <Nav
              className="nav-menu"
              activeKey={activeKey}
              onSelect={handleSelect}
            >
              <Nav.Link
                href="#inicio"
                className={`nav-link ${
                  activeKey === "#inicio" ? "active" : ""
                }`}
              >
                INÍCIO
              </Nav.Link>
              <Nav.Link
                href="#quemsomos"
                className={`nav-link ${
                  activeKey === "#quemsomos" ? "active" : ""
                }`}
              >
                QUEM SOMOS
              </Nav.Link>
              <Nav.Link
                href="#jogos"
                className={`nav-link ${activeKey === "#jogos" ? "active" : ""}`}
              >
                JOGOS
              </Nav.Link>
              <Nav.Link
                href="#contato"
                className={`nav-link ${
                  activeKey === "#contato" ? "active" : ""
                }`}
              >
                CONTATO
              </Nav.Link>
            </Nav>
            <div className="nav-icons d-flex justify-content-center mt-4">
              <img
                src="assets/x-black-icon.png"
                alt="Ícone X"
                className="nav-icon"
              />
              <img
                src="assets/instagram-black-icon.png"
                alt="Ícone Instagram"
                className="nav-icon"
              />
            </div>
          </Navbar.Collapse>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
