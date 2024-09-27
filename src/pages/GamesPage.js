// src/pages/GamesPage.js
import React from "react";
import HeaderGrey from "../components/body/HeaderGrey";
import Footer from "../components/body/Footer";
import Refugio from "../components/games/Refugio";
import PartnersSection from "../components/inicio/PartnersSection";
import FeatureSection from "../components/games/FeatureSection";
import DownloadSection from "../components/games/DownloadSection";
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
