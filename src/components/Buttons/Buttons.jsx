import React, { useState } from "react";

import "./Buttons.css";
import { useTheme } from "../../hooks/useTheme";

import { BiFootball } from "react-icons/bi";

function Buttons({
  setStartGame,
  setMatch,
  match,
  setScores,
  game,
  setSummaryGame,
}) {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [btnClickFinishDisabled, setBtnClickFinishDisabled] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const { mode, changeMode } = useTheme();

  const handleClick = () => {
    if (buttonClicked) {
      return;
    }
    setStartGame(true);

    changeMode("Finish");
    setBtnDisabled(true);
    setMatch(match + 1);
  };

  const handleClickFinish = () => {
    if (buttonClicked) {
      return;
    }
    setStartGame(false);

    changeMode("Start");
    setBtnDisabled(false);
    setMatch(match);
    setScores(false);
    setBtnClickFinishDisabled(false);
    setSummaryGame((summaryGame) => [...summaryGame, game]);
  };

  const handleScores = () => {
    if (buttonClicked) {
      return;
    }

    setScores(true);
    setBtnDisabled(true);
    setBtnClickFinishDisabled(true);
  };

  return (
    <div className="buttons">
      <div className="game-info"></div>
      <div className="buttons-wrapper">
        <button
          className={btnDisabled ? "btn-start disabled" : "btn-start"}
          onClick={handleClick}
        >
          Start Game
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
          onClick={handleClickFinish}
        >
          Finish Game
        </button>
      </div>
    </div>
  );
}

export default Buttons;
