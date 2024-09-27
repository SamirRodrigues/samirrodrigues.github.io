import React from "react";
import HeaderGrey from "../components/body/HeaderGrey";
import Footer from "../components/body/Footer";
import ContactUs from "../components/contact/ContactUs";
import "./ContactPage.css"; // Importando os estilos CSS para esta página

const ContactPage = () => {
  return (
    <>
      <HeaderGrey />
      <main className="contact-page">
        <ContactUs />
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
