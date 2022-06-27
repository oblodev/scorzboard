import React, { useState } from "react";

import "./Buttons.css";
import { useTheme } from "../../hooks/useTheme";

import { BiFootball } from "react-icons/bi";

function Buttons({ setStartGame, setMatch, match, setScores }) {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const { mode, changeMode, game, gameMode } = useTheme();

  const handleClick = () => {
    if (buttonClicked) {
      return;
    }
    setStartGame(true);
    gameMode(true);
    changeMode("Finish");
    setBtnDisabled(true);
    setMatch(match + 1);
  };

  const handleClickFinish = () => {
    if (buttonClicked) {
      return;
    }
    setStartGame(false);
    gameMode(false);
    changeMode("Start");
    setBtnDisabled(false);
    setMatch(match);
    setScores(false);
  };

  const handleScores = () => {
    if (buttonClicked) {
      return;
    }

    setScores(true);
  };

  console.log(game);
  console.log(match);

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
        <button className="btn-goal" onClick={handleScores}>
          Score Goals <BiFootball className="football" />
        </button>{" "}
        <button className="btn-finish" onClick={handleClickFinish}>
          Finish Game
        </button>
      </div>
    </div>
  );
}

export default Buttons;
