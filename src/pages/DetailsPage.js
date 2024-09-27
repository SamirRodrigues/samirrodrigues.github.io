// src/pages/DetailsPage.js
import React from "react";
import HeaderGrey from "../components/body/HeaderGrey";
import Footer from "../components/body/Footer";
import FirstSection from "../components/inicio/FirstSection";
import LaunchSection from "../components/inicio/LaunchSection";
import PartnersSection from "../components/inicio/PartnersSection";
import "./DetailsPage.css";

const DetailsPage = () => {
  return (
    <>
      <HeaderGrey />
      <main className="details-page">
        <FirstSection />
        <LaunchSection />
        <PartnersSection />
        <Footer />
      </main>
    </>
  );
};

export default DetailsPage;
