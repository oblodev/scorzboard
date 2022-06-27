import React from "react";
import { useTheme } from "../../hooks/useTheme";
import Scores from "./Scores/Scores.jsx";

import "./Scoreboard.css";

const matches = [
  {
    id: 1,
    home: "Mexico",
    away: "Canada",
    homeScore: 0,
    awayScore: 5,
    startingScore: 0,
  },
  {
    id: 2,
    home: "Spain",
    away: "Brazil",
    homeScore: 10,
    awayScore: 2,
    startingScore: 0,
  },
  {
    id: 3,
    home: "Germany",
    away: "France",
    homeScore: 2,
    awayScore: 2,
    startingScore: 0,
  },
  {
    id: 4,
    home: "Uruguay",
    away: "Italy",
    homeScore: 6,
    awayScore: 6,
    startingScore: 0,
  },
  {
    id: 4,
    home: "Uruguay",
    away: "Italy",
    homeScore: 6,
    awayScore: 6,
    startingScore: 0,
  },
  {
    id: 5,
    home: "Argentina",
    away: "Australia",
    homeScore: 3,
    awayScore: 1,
    startingScore: 0,
  },
];

console.log(matches.length);

function Scoreboard({ startGame, match, slicedMatch, scores }) {
  const game = matches.find((game) => game.id === match);
  return (
    <div className="scoreboard">
      {startGame && match < matches.length + 1 ? (
        <Scores game={game} scores={scores} />
      ) : (
        <div style={{ padding: "20px", fontSize: "20px" }}>
          Start a new Match
        </div>
      )}
    </div>
  );
}

export default Scoreboard;
