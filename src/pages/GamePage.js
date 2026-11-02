// src/pages/GamePage.js – one page per game, resolved from /games/:slug
import React from "react";
import { Navigate, useParams } from "react-router-dom";
import HeaderGrey from "../components/body/HeaderGrey";
import Footer from "../components/body/Footer";
import Refugio from "../components/games/Refugio";
import PartnersSection from "../components/inicio/PartnersSection";
import FeatureSection from "../components/games/FeatureSection";
import DownloadSection from "../components/games/DownloadSection";
import BrilhanteFolclore from "../components/games/brilhante/BrilhanteFolclore";
import LinhasDoSerido from "../components/games/linhas/LinhasDoSerido";
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
  "brilhante-folclore": () => <BrilhanteFolclore />,
  "linhas-do-serido": () => <LinhasDoSerido />,
};

// Games with their own artwork use a header tuned for it.
const HEADER_TONE = { "brilhante-folclore": "wood", "linhas-do-serido": "linen" };

const GamePage = () => {
  const { slug } = useParams();
  const game = getGame(slug);
  const Content = GAME_PAGES[slug];

  if (!game || !Content) return <Navigate to="/games" replace />;

  return (
    <>
      <HeaderGrey tone={HEADER_TONE[slug]} />
      <main className="games-page">
        <Content game={game} />
      </main>
      <Footer />
    </>
  );
};

export default GamePage;
