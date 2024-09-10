import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Header from "../components/Header"; // Importa o Header padrão
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleVerMaisClick = () => {
    navigate("/details"); // Navigate to the details page
  };

  return (
    <div className="homepage">
      <Header /> {/* Adiciona o Header padrão */}
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
              onClick={handleVerMaisClick} // Attach the click handler
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
