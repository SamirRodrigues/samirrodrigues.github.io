import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./WhoWeAre.css"; // CSS file for specific styles

const WhoWeAre = () => {
  return (
    <section className="who-we-are-section">
      <Container>
        <div className="who-we-are-container">
          <Row className="align-items-center">
            <Col xs={0} md={1}></Col> {/* Left spacer */}
            <Col xs={12} md={3} className="who-we-are-logo">
              <img src="assets/bs-icon-grey.png" alt="Logo" />
            </Col>
            <Col xs={12} md={7}>
              <div className="who-we-are-text-card">
                <h3>
                  Quem nós <strong>SOMOS?</strong>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </Col>
            <Col xs={0} md={1}></Col> {/* Right spacer */}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default WhoWeAre;
