// src/pages/DetailsPage.js
import React from "react";
import HeaderGrey from "../components/HeaderGrey";
import Footer from "../components/Footer";
import FirstSection from "../components/FirstSection";
import LaunchSection from "../components/LaunchSection";
import PartnersSection from "../components/PartnersSection";
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
