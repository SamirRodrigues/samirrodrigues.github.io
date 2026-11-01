import React from "react";
import { Link } from "react-router-dom";
import "./GameCard.css";

const meta = (game) => [...game.platforms, ...game.topics];

// Poster card used on the games list when there is more than one game.
export const GamePoster = ({ game }) => (
  <Link to={`/games/${game.slug}`} className="game-poster">
    <span className="game-poster-pic">
      <img src={game.poster} alt="" width="840" height="960" loading="lazy" />
    </span>
    <h2>{game.name}</h2>
    <p>{game.summary}</p>
    <ul className="game-meta">
      {game.status && <li className="game-status">{game.status}</li>}
      {meta(game).map((m) => (
        <li key={m}>{m}</li>
      ))}
    </ul>
  </Link>
);

// Large layout used while the studio has a single game.
export const GameFeature = ({ game }) => (
  <div className="game-feature">
    <Link
      to={`/games/${game.slug}`}
      className="game-feature-pic"
      aria-label={`Conhecer ${game.name}`}
      tabIndex={-1}
    >
      <img src={game.poster} alt="" width="840" height="960" />
    </Link>
    <div className="game-feature-text">
      <h2>{game.name}</h2>
      <p>{game.summary}</p>
      <ul className="game-meta">
        {meta(game).map((m) => (
          <li key={m}>{m}</li>
        ))}
      </ul>
      <div className="game-feature-actions">
        <Link to={`/games/${game.slug}`} className="game-btn">
          Conhecer o jogo
        </Link>
        {game.stores.googlePlay && (
          <a
            href={game.stores.googlePlay}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Baixar ${game.name} na Google Play`}
          >
            <img
              src="/assets/google-play-badge.png"
              alt="Disponível no Google Play"
              className="game-store-badge"
              width="148"
              height="44"
            />
          </a>
        )}
      </div>
    </div>
  </div>
);
