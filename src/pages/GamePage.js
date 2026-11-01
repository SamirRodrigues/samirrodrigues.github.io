// src/pages/GamePage.js – one page per game, resolved from /games/:slug
import React from "react";
import { Navigate, useParams } from "react-router-dom";
import HeaderGrey from "../components/body/HeaderGrey";
import Footer from "../components/body/Footer";
import Refugio from "../components/games/Refugio";
import PartnersSection from "../components/inicio/PartnersSection";
import FeatureSection from "../components/games/FeatureSection";
import DownloadSection from "../components/games/DownloadSection";
import { getGame } from "../data/games";
import "./GamerPage.css";

// Page content for each game. Add one entry per new game.
const GAME_PAGES = {
  banze: ({ game }) => (
    <>
      <Refugio game={game} />
      <PartnersSection />
      <FeatureSection />
      <DownloadSection />
    </>
  ),
};

const GamePage = () => {
  const { slug } = useParams();
  const game = getGame(slug);
  const Content = GAME_PAGES[slug];

  if (!game || !Content) return <Navigate to="/games" replace />;

  return (
    <>
      <HeaderGrey />
      <main className="games-page">
        <Content game={game} />
      </main>
      <Footer />
    </>
  );
};

export default GamePage;
