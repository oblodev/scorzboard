import React, { useState } from "react";

import "./Buttons.css";

import { BiFootball } from "react-icons/bi";

function Buttons({
  setStartGame,
  setMatch,
  match,
  setScores,
  game,
  setSummaryGame,

  setGamesFinished,
  maxMatches,
}) {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [btnClickFinishDisabled, setBtnClickFinishDisabled] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    if (buttonClicked) {
      return;
    }
    setStartGame(true);
    setBtnDisabled(true);
    setMatch(match + 1);
  };

  const handleClickFinish = () => {
    if (buttonClicked) {
      return;
    }

    setBtnDisabled(false);
    setMatch(match);
    setScores(false);
    setBtnClickFinishDisabled(false);
    setSummaryGame((summaryGame) => [...summaryGame, game]);

    setStartGame(false);
  };

  const handleScores = () => {
    if (buttonClicked) {
      return;
    }

    setScores(true);
    setBtnDisabled(true);
    setBtnClickFinishDisabled(true);
  };

  const handleLastGame = () => {
    setGamesFinished(false);
  };

  return (
    <div className="buttons">
      <div className="game-info"></div>
      <div className="buttons-wrapper">
        <button
          className={btnDisabled ? "btn-start disabled" : "btn-start"}
          onClick={match >= maxMatches ? handleLastGame : handleClick}
        >
          Start Match
        </button>{" "}
        <button
          className={!btnDisabled ? "btn-goal disabled" : "btn-goal"}
          onClick={handleScores}
        >
          Score Goals <BiFootball className="football" />
        </button>{" "}
        <button
          className={
            !btnClickFinishDisabled ? "btn-finish disabled" : "btn-finish"
          }
          onClick={match > maxMatches ? handleLastGame : handleClickFinish}
        >
          Finish Match
        </button>
      </div>
    </div>
  );
}

export default Buttons;
