import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom"; // Importa useNavigate
import "./HeaderGrey.css";

const HeaderGrey = () => {
  const [activeKey, setActiveKey] = useState("#inicio");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isTablet, setIsTablet] = useState(
    window.innerWidth >= 768 && window.innerWidth <= 1024
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const location = useLocation();
  const navigate = useNavigate(); // Hook de navegação

  // Definir a rota correta para selecionar o menu
  useEffect(() => {
    if (location.pathname === "/about") {
      setActiveKey("#quemsomos");
    } else if (location.pathname === "/") {
      setActiveKey("#inicio");
    }
  }, [location.pathname]);

  const handleSelect = (selectedKey) => {
    setActiveKey(selectedKey);

    // Navegar para as páginas corretas
    if (selectedKey === "#quemsomos") {
      navigate("/about");
    } else if (selectedKey === "#inicio") {
      navigate("/");
    }

    // Fecha o menu ao clicar em um link no mobile/tablet
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
    <Navbar
      expand="lg"
      className={`header-grey ${
        location.pathname === "/" && !isMobile && !isTablet
          ? "header-homepage"
          : ""
      }`}
      expanded={menuOpen}
    >
      <Container fluid>
        <Row className="w-100 align-items-center">
          {/* Espaçamento esquerdo */}
          <Col xs={1} lg={2}></Col>

          {/* Coluna da logo - Clique agora navega para a home */}
          <Col
            xs="auto"
            lg={1}
            className="d-flex align-items-center justify-content-start"
          >
            <Navbar.Brand
              onClick={() => navigate("/")} // Redireciona para a página inicial ao clicar na logo
              style={{ cursor: "pointer" }} // Estilo de cursor para indicar que a logo é clicável
            >
              <img
                src={
                  location.pathname === "/"
                    ? "assets/logo-bs.png"
                    : "assets/logo-bs-grey.png"
                }
                alt="Baladeira Studio Logo"
                className="header-grey-logo"
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

          {/* Ícones do Instagram e X - Apenas no desktop */}
          {!isMobile && !isTablet && (
            <Col
              xs="auto"
              lg={1}
              className="d-flex justify-content-center align-items-center"
            >
              <div className="header-grey-nav-icons">
                <img
                  src={
                    location.pathname === "/"
                      ? "assets/x-icon.png"
                      : "assets/x-black-icon.png"
                  }
                  alt="Ícone X"
                  className="header-grey-nav-icon"
                />
                <img
                  src={
                    location.pathname === "/"
                      ? "assets/instagram-icon.png"
                      : "assets/instagram-black-icon.png"
                  }
                  alt="Ícone Instagram"
                  className="header-grey-nav-icon"
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
                className="header-grey-toggler"
                onClick={toggleMenu}
              >
                <img
                  src={
                    location.pathname === "/"
                      ? "assets/sanduich-icon.png"
                      : "assets/sanduich-icon-grey.png"
                  }
                  alt="Menu"
                  className="header-grey-sanduich-icon"
                />
              </Navbar.Toggle>
            </Col>
          )}

          {/* Espaçamento direito */}
          <Col xs={0} lg={2}></Col>
        </Row>

        {/* Menu colapsável com ícones quando aberto no mobile/tablet */}
        {(isMobile || isTablet) && (
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="header-grey-navbar-collapse"
          >
            <div className="header-grey-header-top">
              <Navbar.Brand
                onClick={() => navigate("/")} // Adiciona navegação à home também no mobile
                style={{ cursor: "pointer" }}
              >
                <img
                  src="assets/bs-icon.png"
                  alt="Baladeira Studio Logo"
                  className="header-grey-logo"
                />
              </Navbar.Brand>
              <button className="header-grey-close-btn" onClick={toggleMenu}>
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
                onClick={() => navigate("/about")} // Garante a navegação
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
        )}
      </Container>
    </Navbar>
  );
};

export default HeaderGrey;
