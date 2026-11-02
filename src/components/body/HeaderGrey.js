// src/components/HeaderGrey.js
import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom"; // Importa useNavigate
import ThemeToggle from "../../theme/ThemeToggle";
import { useTheme } from "../../theme/ThemeContext";
import "./HeaderGrey.css";

const HeaderGrey = ({ tone }) => {
  const [activeKey, setActiveKey] = useState("/");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isTablet, setIsTablet] = useState(
    window.innerWidth >= 768 && window.innerWidth <= 991
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const location = useLocation();
  const { theme } = useTheme();
  const forceLight = tone === "linen"; // pages with a light artwork of their own
  const siteDark = theme === "dark"; // the mobile menu always follows the site theme
  const isDark = siteDark && !forceLight;
  // White artwork is needed over the home photo and on the dark theme
  const onWood = tone === "wood"; // game pages with their own artwork
  const onDark = location.pathname === "/" || isDark || onWood;
  const navigate = useNavigate(); // Hook de navegação

  // Definir a rota correta para selecionar o menu
  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/details") {
      setActiveKey("/");
    } else if (location.pathname.startsWith("/games")) {
      setActiveKey("/games");
    } else if (location.pathname === "/contact") {
      setActiveKey("/contact");
    } else {
      // Pode definir uma lógica padrão ou manter uma chave inativa
      setActiveKey(null);
    }
  }, [location.pathname]);

  const handleSelect = (selectedKey, event) => {
    // Os links têm href real (/games etc.); a navegação fica com o React Router
    if (event) event.preventDefault();
    setActiveKey(selectedKey);
    navigate(selectedKey);

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
    setIsTablet(window.innerWidth >= 768 && window.innerWidth <= 991);
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
      } ${onWood ? "header-wood" : ""} ${forceLight ? "header-linen" : ""}`}
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
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            >
              <img
                src={
                  onDark
                    ? "/assets/logo-bs.png"
                    : "/assets/logo-bs-grey.png"
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
                  href="/"
                  className={`header-grey-nav-link ${
                    activeKey === "/" ? "active" : ""
                  }`}
                >
                  INÍCIO
                </Nav.Link>
                <Nav.Link
                  href="/games"
                  className={`header-grey-nav-link ${
                    activeKey === "/games" ? "active" : ""
                  }`}
                >
                  JOGOS
                </Nav.Link>
                <Nav.Link
                  href="/contact"
                  className={`header-grey-nav-link ${
                    activeKey === "/contact" ? "active" : ""
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
              className="d-flex justify-content-right align-items-center"
            >
              <div className="header-grey-nav-icons">
                <a
                  href="https://x.com/baladeirastudio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={
                      onDark
                        ? "/assets/x-icon.png"
                        : "/assets/x-black-icon.png"
                    }
                    alt="Ícone X"
                    className="header-grey-nav-icon"
                  />
                </a>
                <a
                  href="https://instagram.com/baladeirastudio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={
                      onDark
                        ? "/assets/instagram-icon.png"
                        : "/assets/instagram-black-icon.png"
                    }
                    alt="Ícone Instagram"
                    className="header-grey-nav-icon"
                  />
                </a>
                <ThemeToggle
                  className={location.pathname === "/" || onWood ? "on-photo" : ""}
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
                    onDark
                      ? "/assets/sanduich-icon.png"
                      : "/assets/sanduich-icon-grey.png"
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
                  src={siteDark ? "/assets/logo-bs-white.png" : "/assets/bs-icon.png"}
                  alt="Baladeira Studio Logo"
                  className="header-grey-logo"
                />
              </Navbar.Brand>
              <button
                type="button"
                className="header-grey-close-btn"
                aria-label="Fechar menu"
                onClick={toggleMenu}
              >
                <img src="/assets/close.png" alt="Fechar" className="header-grey-close-icon" />
              </button>
            </div>
            <Nav
              className="header-grey-nav-menu"
              activeKey={activeKey}
              onSelect={handleSelect}
            >
              <Nav.Link
                href="/"
                className={`header-grey-nav-link ${
                  activeKey === "/" ? "active" : ""
                }`}
              >
                INÍCIO
              </Nav.Link>
              <Nav.Link
                href="/games"
                className={`header-grey-nav-link ${
                  activeKey === "/games" ? "active" : ""
                }`}
              >
                JOGOS
              </Nav.Link>
              <Nav.Link
                href="/contact"
                className={`header-grey-nav-link ${
                  activeKey === "/contact" ? "active" : ""
                }`}
              >
                CONTATO
              </Nav.Link>
            </Nav>
            <div className="header-grey-nav-icons d-flex justify-content-center mt-4">
              <a
                href="https://x.com/baladeirastudio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={siteDark ? "/assets/x-icon.png" : "/assets/x-black-icon.png"}
                  alt="Ícone X"
                  className="header-grey-nav-icon"
                />
              </a>
              <a
                href="https://instagram.com/baladeirastudio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={siteDark ? "/assets/instagram-icon.png" : "/assets/instagram-black-icon.png"}
                  alt="Ícone Instagram"
                  className="header-grey-nav-icon"
                />
              </a>
              <ThemeToggle />
            </div>
          </Navbar.Collapse>
        )}
      </Container>
    </Navbar>
  );
};

export default HeaderGrey;
