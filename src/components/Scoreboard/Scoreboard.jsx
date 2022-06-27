import React from "react";

import Scores from "./Scores/Scores.jsx";

import "./Scoreboard.css";

function Scoreboard({ startGame, scores, game }) {
  return (
    <div className="scoreboard">
      {startGame ? (
        <Scores game={game} scores={scores} />
      ) : (
        <div style={{ padding: "20px", fontSize: "24px", fontWeight: 700 }}>
          Start a new Match
        </div>
      )}
    </div>
  );
}

export default Scoreboard;
