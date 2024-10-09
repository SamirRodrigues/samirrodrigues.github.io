import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import HeaderGrey from "../components/body/HeaderGrey";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleVerMaisClick = () => {
    navigate("/details");
  };

  return (
    <div className="homepage">
      <HeaderGrey />
      <Container fluid className="text-center hero-section">
        <Row>
          <Col>
            <h1 className="mt-4">
              Despertando
              <br />
              Cultura & Diversão <br />
              em <strong>CADA JOGO</strong>
            </h1>
            <Button
              variant="outline-light"
              className="mt-4 btn-hero"
              onClick={handleVerMaisClick}
            >
              <FaChevronDown className="mr-2" /> Ver mais
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
