// src/components/Refugio.js
import React, { useState, useEffect } from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import "./Refugio.css";

const Refugio = () => {
  const [showRedirectScreen, setShowRedirectScreen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isTypingDone, setIsTypingDone] = useState(false); // Controle de término da digitação
  const [isProgressComplete, setIsProgressComplete] = useState(false); // Controle de término da barra

  const message =
    "Obrigado por baixar nosso jogo! Sua participação faz toda a diferença.";

  const handleImageClick = () => {
    setShowRedirectScreen(true);
  };

  useEffect(() => {
    let progressInterval;

    if (showRedirectScreen) {
      const typingSpeed = 70; // Velocidade de digitação em ms por caractere
      const totalTypingTime = message.length * typingSpeed; // Tempo total do efeito de digitação

      // Barra de progresso sincronizada com o efeito de digitação
      const progressUpdateInterval = 70; // Intervalo de atualização da barra de progresso em ms
      const totalProgressUpdates = totalTypingTime / progressUpdateInterval;
      const progressIncrement = 100 / totalProgressUpdates;

      progressInterval = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + progressIncrement;
          if (newProgress >= 100) {
            clearInterval(progressInterval);
            setProgress(100); // Garante que termine exatamente em 100%
            setIsProgressComplete(true); // Marca a barra de progresso como completa
          }
          return newProgress;
        });
      }, progressUpdateInterval);
    }

    return () => {
      clearInterval(progressInterval);
    };
  }, [showRedirectScreen, message]);

  useEffect(() => {
    // Verifica se tanto a digitação quanto a barra de progresso estão concluídas
    if (isTypingDone && isProgressComplete) {
      setTimeout(() => {
        window.open(
          "https://play.google.com/store/apps/details?id=com.BaladeiraStudio.RefugioDoBanze&hl=en-US&ah=lV-6m4YJj7pD-UzKbO1YxH9voPw",
          "_blank"
        );
        setShowRedirectScreen(false);
        setProgress(0);
        setIsTypingDone(false);
        setIsProgressComplete(false);
      }, 1000);
    }
  }, [isTypingDone, isProgressComplete]);

  return (
    <section className="refugio-section">
      <div className="refugio-image-wrapper">
        <img
          src="assets/refugio-banner.png"
          alt="Refúgio Banner"
          className="refugio-banner-image"
        />
      </div>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6} className="refugio-content">
            <h3>O Refúgio de Banzé</h3>
            <p>
              Descubra um mundo de aventuras e aprendizado com o Refúgio de
              Banzé. Nosso jogo sério foi criado para proporcionar diversão e
              conhecimento em uma experiência única.
            </p>
            <img
              src="assets/google-play-badge.png"
              alt="Baixar na Google Play"
              className="google-play-badge"
              onClick={handleImageClick}
            />
          </Col>
        </Row>
      </Container>

      {showRedirectScreen && (
        <div className="redirect-screen">
          <div className="message-container">
            <div className="typing-text">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(message)
                    .callFunction(() => {
                      setIsTypingDone(true); // Marca a digitação como concluída
                    })
                    .start();
                }}
                options={{
                  delay: 50,
                  cursor: "|",
                }}
              />
            </div>
            <ProgressBar
              now={progress}
              variant="info"
              animated
              className="progress-bar-custom"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Refugio;
