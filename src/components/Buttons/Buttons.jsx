import React from "react";

import "./Buttons.css";

function Buttons() {
  return (
    <div className="buttons">
      <div className="game-info">
        <p>Start Game</p>
      </div>
      <div className="buttons-wrapper">
        <button className="btn-start">Start Game</button>{" "}
        <button className="btn-goal">Next Goal</button>{" "}
        <button className="btn-finish">Finish Game</button>
      </div>
    </div>
  );
}

export default Buttons;
