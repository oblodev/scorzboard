import React from "react";

import "./Scoreboard.css";

function Scoreboard() {
  return (
    <div className="scoreboard">
      <div className="wrapper">
        <div className="home">
          <h2>Home</h2>
          <p>Mexico</p>
          <p>0</p>
        </div>
        <div className="away">
          <h2>Away</h2>
          <p>Canada</p>
          <p>5</p>
        </div>
      </div>
    </div>
  );
}

export default Scoreboard;
