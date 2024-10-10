import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { Person, Envelope, PencilSquare, Send } from "react-bootstrap-icons";
import emailjs from "emailjs-com";
import "./ContactUs.css"; // Importando o CSS personalizado

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [alert, setAlert] = useState({ show: false, message: "", variant: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Preparando os dados do template
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_ghyov34", // Substitua pelo seu service ID do EmailJS
        "template_olzuvwj", // Substitua pelo seu template ID
        templateParams,
        "Am1lQvZa94MJmF-2l" // Substitua pela sua Public Key do EmailJS
      )
      .then(
        (result) => {
          setAlert({
            show: true,
            message: "Email enviado com sucesso!",
            variant: "success",
          });
          setFormData({ name: "", email: "", message: "" }); // Limpa o formulário
        },
        (error) => {
          setAlert({
            show: true,
            message: "Erro ao enviar o email. Tente novamente.",
            variant: "danger",
          });
        }
      );
  };

  return (
    <Container className="contact-us">
      <Row className="justify-content-center align-items-center">
        <Col xs={12} md={5}>
          <div className="contact-info">
            <h3>Contate-nos</h3>
            <p>
              Você ficou com alguma dúvida ou tem uma sugestão a fazer?
              <strong> Entre em contato conosco!</strong>
            </p>
          </div>
        </Col>
        <Col xs={12} md={7}>
          <div className="contact-form">
            {alert.show && (
              <Alert
                variant={alert.variant}
                onClose={() => setAlert({ show: false })}
                dismissible
              >
                {alert.message}
              </Alert>
            )}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicName">
                <Form.Label>Nome</Form.Label>
                <div className="input-container">
                  <Form.Control
                    type="text"
                    placeholder="Digite seu nome"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <Person className="input-icon" />
                </div>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <div className="input-container">
                  <Form.Control
                    type="email"
                    placeholder="Digite seu email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
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
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
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
