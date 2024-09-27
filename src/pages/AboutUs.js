import React from "react";
import HeaderGrey from "../components/body/HeaderGrey";
import WhoWeAre from "../components/about/WhoWeAre";
import TeamMembers from "../components/about/TeamMembers"; // Importação do novo componente
import Footer from "../components/body/Footer";

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
