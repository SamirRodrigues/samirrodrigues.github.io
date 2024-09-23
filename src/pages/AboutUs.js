// src/pages/AboutUs.js
import React from "react";
import HeaderGrey from "../components/HeaderGrey";
import Footer from "../components/Footer";
import "./AboutUs.css"; // Arquivo de estilos personalizado

const AboutUs = () => {
  return (
    <>
      <HeaderGrey />
      <main className="about-us-page">
        <section className="about-us-content">
          <h1>Quem Somos</h1>
          <p>
            Nossa empresa é focada em proporcionar soluções inovadoras que
            impactam o mundo. Desde Natal, expandimos nossos serviços para
            alcançar clientes globais, sempre mantendo nosso compromisso com a
            qualidade e excelência.
          </p>
          <p>
            Com uma equipe dedicada e visão futurista, trabalhamos
            constantemente para entregar os melhores resultados para nossos
            clientes.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
