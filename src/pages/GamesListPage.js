// src/pages/GamesListPage.js
import React from "react";
import HeaderGrey from "../components/body/HeaderGrey";
import Footer from "../components/body/Footer";
import { GameFeature, GamePoster } from "../components/games/GameCard";
import { games } from "../data/games";
import "./GamesListPage.css";

const GamesListPage = () => (
  <>
    <HeaderGrey />
    <main className="games-list-page">
      <div className="games-list-wrap">
        <h1 className="games-list-title">
          Nossos <strong>jogos</strong>
        </h1>
        <p className="games-list-lead">
          Jogos sérios que ensinam história e cultura brasileira.
        </p>

        {games.length === 1 ? (
          <GameFeature game={games[0]} />
        ) : (
          <div className="games-list-grid">
            {games.map((game) => (
              <GamePoster key={game.slug} game={game} />
            ))}
          </div>
        )}

        <p className="games-list-soon">
          Novos jogos a caminho.{" "}
          <a
            href="https://instagram.com/baladeirastudio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Siga @baladeirastudio
          </a>
        </p>
      </div>
    </main>
    <Footer />
  </>
);

export default GamesListPage;
