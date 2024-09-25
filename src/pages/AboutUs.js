import React from "react";
import HeaderGrey from "../components/HeaderGrey";
import WhoWeAre from "../components/WhoWeAre";
import TeamMembers from "../components/TeamMembers"; // Importação do novo componente
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <>
      <HeaderGrey />
      <main className="about-us-page">
        <WhoWeAre />
        <TeamMembers /> {/* Inclusão do novo componente */}
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
