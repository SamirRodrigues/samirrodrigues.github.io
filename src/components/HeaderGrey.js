import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import "./HeaderGrey.css";

const HeaderGrey = () => {
  const [activeKey, setActiveKey] = useState("#inicio");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isTablet, setIsTablet] = useState(
    window.innerWidth >= 768 && window.innerWidth <= 1024
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleSelect = (selectedKey) => {
    setActiveKey(selectedKey);

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
    <Navbar expand="lg" className="header-grey">
      <Container fluid>
        <Row className="w-100 justify-content-start">
          {/* Coluna vazia para garantir que a seção centralize */}
          <Col xs={2} lg={2}></Col>

          {/* Coluna principal com 8 grids */}
          <Col xs={8} lg={8}>
            <Row className="align-items-center">
              <Col
                xs={6}
                lg={3}
                className="d-flex align-items-center header-grey-logo-container"
              >
                <Navbar.Brand href="#inicio">
                  <img
                    src="assets/logo-bs-grey.png"
                    alt="Baladeira Studio Logo"
                    className="header-grey-logo"
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
                      className="header-grey-toggler"
                      onClick={toggleMenu}
                    >
                      <img
                        src="assets/sanduich-icon-grey.png"
                        alt="Menu"
                        className="header-grey-sanduich-icon"
                      />
                    </Navbar.Toggle>
                    <Navbar.Collapse
                      id="basic-navbar-nav"
                      className={`header-grey-navbar-collapse ${
                        menuOpen ? "show" : "hidden"
                      }`}
                    >
                      <div className="header-grey-header-top">
                        <Navbar.Brand href="#inicio">
                          <img
                            src="assets/bs-icon.png"
                            alt="Baladeira Studio Logo"
                            className="header-grey-logo"
                          />
                        </Navbar.Brand>
                        <button
                          className="header-grey-close-btn"
                          onClick={toggleMenu}
                        >
                          <img src="assets/close.png" alt="Fechar" />
                        </button>
                      </div>
                      <Nav
                        className="header-grey-nav-menu"
                        activeKey={activeKey}
                        onSelect={handleSelect}
                      >
                        <Nav.Link
                          href="#inicio"
                          className={`header-grey-nav-link ${
                            activeKey === "#inicio" ? "active" : ""
                          }`}
                        >
                          INÍCIO
                        </Nav.Link>
                        <Nav.Link
                          href="#quemsomos"
                          className={`header-grey-nav-link ${
                            activeKey === "#quemsomos" ? "active" : ""
                          }`}
                        >
                          QUEM SOMOS
                        </Nav.Link>
                        <Nav.Link
                          href="#jogos"
                          className={`header-grey-nav-link ${
                            activeKey === "#jogos" ? "active" : ""
                          }`}
                        >
                          JOGOS
                        </Nav.Link>
                        <Nav.Link
                          href="#contato"
                          className={`header-grey-nav-link ${
                            activeKey === "#contato" ? "active" : ""
                          }`}
                        >
                          CONTATO
                        </Nav.Link>
                      </Nav>
                      <div className="header-grey-nav-icons d-flex justify-content-center mt-4">
                        <img
                          src="assets/x-black-icon.png"
                          alt="Ícone X"
                          className="header-grey-nav-icon"
                        />
                        <img
                          src="assets/instagram-black-icon.png"
                          alt="Ícone Instagram"
                          className="header-grey-nav-icon"
                        />
                      </div>
                    </Navbar.Collapse>
                  </>
                ) : (
                  <Nav
                    className="header-grey-nav-menu"
                    activeKey={activeKey}
                    onSelect={handleSelect}
                  >
                    <Nav.Link
                      href="#inicio"
                      className={`header-grey-nav-link ${
                        activeKey === "#inicio" ? "active" : ""
                      }`}
                    >
                      INÍCIO
                    </Nav.Link>
                    <Nav.Link
                      href="#quemsomos"
                      className={`header-grey-nav-link ${
                        activeKey === "#quemsomos" ? "active" : ""
                      }`}
                    >
                      QUEM SOMOS
                    </Nav.Link>
                    <Nav.Link
                      href="#jogos"
                      className={`header-grey-nav-link ${
                        activeKey === "#jogos" ? "active" : ""
                      }`}
                    >
                      JOGOS
                    </Nav.Link>
                    <Nav.Link
                      href="#contato"
                      className={`header-grey-nav-link ${
                        activeKey === "#contato" ? "active" : ""
                      }`}
                    >
                      CONTATO
                    </Nav.Link>
                  </Nav>
                )}
              </Col>
              <Col
                xs={6}
                lg={3}
                className="d-flex justify-content-center align-items-center"
              >
                <div className="header-grey-nav-icons d-none d-lg-flex">
                  <img
                    src="assets/x-black-icon.png"
                    alt="Ícone 1"
                    className="header-grey-nav-icon"
                  />
                  <img
                    src="assets/instagram-black-icon.png"
                    alt="Ícone 2"
                    className="header-grey-nav-icon"
                  />
                </div>
              </Col>
            </Row>
          </Col>

          {/* Coluna vazia para garantir que a seção centralize */}
          <Col xs={2} lg={2}></Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default HeaderGrey;
