// src/pages/GamesPage.js
import React from "react";
import HeaderGrey from "../components/HeaderGrey";
import Footer from "../components/Footer";
import Refugio from "../components/Refugio";
import PartnersSection from "../components/PartnersSection";
import FeatureSection from "../components/FeatureSection";
import DownloadSection from "../components/DownloadSection";
import "./GamerPage.css";
const GamesPage = () => {
  return (
    <>
      <HeaderGrey />
      <main className="games-page">
        <Refugio />
        <PartnersSection />
        <FeatureSection />
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
};

export default GamesPage;
