import React from "react";

import "./Summary.css";

function Summary({ summaryGame }) {
  return (
    <div className="summary">
      <div className="summary-header">
        <h2>Summary</h2>
      </div>
      {summaryGame.map((game) => (
        <div key={game.id}>
          <div className="summary-head">
            <p>{game.id}.</p>
            <p>{game.home}</p>
            <p> - </p>
            <p>{game.away}</p>
          </div>
          <div className="summary-info">
            <p>{game.homeScore}</p>
            <p>{game.awayScore}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Summary;
