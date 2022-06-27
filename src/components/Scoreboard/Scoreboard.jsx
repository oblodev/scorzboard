import React from "react";
import { useTheme } from "../../hooks/useTheme";
import Scores from "./Scores/Scores.jsx";

import "./Scoreboard.css";

function Scoreboard({ startGame, match, scores, game }) {
  return (
    <div className="scoreboard">
      {startGame && match ? (
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
