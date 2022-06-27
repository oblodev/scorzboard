import React from "react";

function Scores({ game, scores }) {
  return (
    <div>
      <div className="wrapper">
        <div className="home">
          <h2>Home</h2>
          <p>{game.home}</p>
          <p>{scores ? game.homeScore : game.startingScore}</p>
        </div>
        <div className="away">
          <h2>Away</h2>
          <p>{game.away}</p>
          <p>{scores ? game.awayScore : game.startingScore}</p>
        </div>
      </div>
    </div>
  );
}

export default Scores;
