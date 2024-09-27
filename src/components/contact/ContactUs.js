import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Person, Envelope, PencilSquare, Send } from "react-bootstrap-icons";
import "./ContactUs.css"; // Importando o CSS personalizado

const ContactUs = () => {
  return (
    <Container className="contact-us">
      <Row className="justify-content-center align-items-center">
        {/* Divisão para o texto de contato */}
        <Col xs={12} md={5}>
          <div className="contact-info">
            <h3>Contate-nos</h3>
            <p>
              Você ficou com alguma dúvida ou tem uma sugestão a fazer?
              <strong> Entre em contato conosco!</strong>
            </p>
          </div>
        </Col>
        {/* Divisão para o formulário */}
        <Col xs={12} md={7}>
          <div className="contact-form">
            <Form>
              <Form.Group controlId="formBasicName">
                <Form.Label>Nome</Form.Label>
                <div className="input-container">
                  <Form.Control type="text" placeholder="Digite seu nome" />
                  <Person className="input-icon" />
                </div>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <div className="input-container">
                  <Form.Control type="email" placeholder="Digite seu email" />
                  <Envelope className="input-icon" />
                </div>
              </Form.Group>

              <Form.Group controlId="formBasicMessage">
                <Form.Label>Mensagem</Form.Label>
                <div className="input-container">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Digite sua mensagem"
                  />
                  <PencilSquare className="input-icon textarea-icon" />
                </div>
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="submit-btn w-100 mt-4"
              >
                <Send /> Enviar
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
