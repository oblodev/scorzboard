import { useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import Buttons from "./components/Buttons/Buttons";

function App() {
  const [startGame, setStartGame] = useState(false);
  const [finishGame, setFinishGame] = useState(false);
  const [match, setMatch] = useState(0);

  const [scores, setScores] = useState(false);

  console.log(match);
  console.log(scores);
  return (
    <div className="App">
      <Header />
      <Scoreboard
        startGame={startGame}
        finishGame={finishGame}
        match={match}
        scores={scores}
      />
      <Buttons
        setStartGame={setStartGame}
        setFinishGame={setFinishGame}
        setScores={setScores}
        setMatch={setMatch}
        match={match}
      />
    </div>
  );
}

export default App;
