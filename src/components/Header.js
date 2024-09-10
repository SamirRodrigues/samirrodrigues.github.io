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

  // Fecha o menu com atraso de 1 segundo ao selecionar um link
  const handleSelect = (selectedKey) => {
    setActiveKey(selectedKey);
    setTimeout(() => {
      setMenuOpen(false);
    }, 1000); // Adiciona o atraso de 1 segundo
  };

  // Alterna o estado de abrir/fechar o menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Atualiza o estado de mobile e tablet
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
    <Navbar expand="lg" className="main-header">
      <Container fluid>
        <Row className="w-100">
          <Col
            xs={6}
            lg={3}
            className="d-flex align-items-center logo-container"
          >
            <Navbar.Brand href="#inicio">
              <img
                src="assets/logo-bs.png"
                alt="Baladeira Studio Logo"
                className="logo"
              />
            </Navbar.Brand>
          </Col>
          <Col
            xs={6}
            lg={6}
            className="d-flex justify-content-center align-items-center"
          >
            {isMobile || isTablet ? (
              <>
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
                <Navbar.Collapse
                  id="basic-navbar-nav"
                  className={`navbar-collapse ${menuOpen ? "show" : "hidden"}`}
                >
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
                      className={activeKey === "#inicio" ? "active" : ""}
                    >
                      INÍCIO
                    </Nav.Link>
                    <Nav.Link
                      href="#quemsomos"
                      className={activeKey === "#quemsomos" ? "active" : ""}
                    >
                      QUEM SOMOS
                    </Nav.Link>
                    <Nav.Link
                      href="#jogos"
                      className={activeKey === "#jogos" ? "active" : ""}
                    >
                      JOGOS
                    </Nav.Link>
                    <Nav.Link
                      href="#contato"
                      className={activeKey === "#contato" ? "active" : ""}
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
              </>
            ) : (
              <Nav
                className="nav-menu"
                activeKey={activeKey}
                onSelect={handleSelect}
              >
                <Nav.Link
                  href="#inicio"
                  className={activeKey === "#inicio" ? "active" : ""}
                >
                  INÍCIO
                </Nav.Link>
                <Nav.Link
                  href="#quemsomos"
                  className={activeKey === "#quemsomos" ? "active" : ""}
                >
                  QUEM SOMOS
                </Nav.Link>
                <Nav.Link
                  href="#jogos"
                  className={activeKey === "#jogos" ? "active" : ""}
                >
                  JOGOS
                </Nav.Link>
                <Nav.Link
                  href="#contato"
                  className={activeKey === "#contato" ? "active" : ""}
                >
                  CONTATO
                </Nav.Link>
              </Nav>
            )}
          </Col>
          <Col
            xs={6}
            lg={3}
            className="d-flex justify-content-start align-items-center"
          >
            <div className="nav-icons d-none d-lg-flex">
              <img src="assets/x-icon.png" alt="Ícone 1" className="nav-icon" />
              <img
                src="assets/instagram-icon.png"
                alt="Ícone 2"
                className="nav-icon"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Header;
