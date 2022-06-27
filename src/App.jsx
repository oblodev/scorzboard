import { useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import Buttons from "./components/Buttons/Buttons";
import Summary from "./components/Summary/Summary";
import Finished from "./components/Finished/Finished";

const matches = [
  {
    id: 1,
    home: "Mexico",
    away: "Canada",
    homeScore: 0,
    awayScore: 5,
    startingScore: 0,
  },
  {
    id: 2,
    home: "Spain",
    away: "Brazil",
    homeScore: 10,
    awayScore: 2,
    startingScore: 0,
  },
  {
    id: 3,
    home: "Germany",
    away: "France",
    homeScore: 2,
    awayScore: 2,
    startingScore: 0,
  },
  {
    id: 4,
    home: "Uruguay",
    away: "Italy",
    homeScore: 6,
    awayScore: 6,
    startingScore: 0,
  },
  {
    id: 5,
    home: "Uruguay",
    away: "Italy",
    homeScore: 6,
    awayScore: 6,
    startingScore: 0,
  },
  {
    id: 6,
    home: "Argentina",
    away: "Australia",
    homeScore: 3,
    awayScore: 1,
    startingScore: 0,
  },
];

function App() {
  const [startGame, setStartGame] = useState(false);
  const [finishGame, setFinishGame] = useState(false);
  const [summaryGame, setSummaryGame] = useState([]);
  const [gamesFinished, setGamesFinished] = useState(true);
  const [match, setMatch] = useState(0);
  const [scores, setScores] = useState(false);
  const [maxMatches, setMAxMatches] = useState(matches.length);

  const game = matches.find((game) => game.id === match);
  console.log(match);
  console.log(maxMatches);

  return (
    <div className="App">
      <Header />
      {gamesFinished ? (
        <>
          <Scoreboard
            startGame={startGame}
            finishGame={finishGame}
            match={match}
            scores={scores}
            game={game}
          />
          <Buttons
            setStartGame={setStartGame}
            setFinishGame={setFinishGame}
            setScores={setScores}
            setMatch={setMatch}
            match={match}
            game={game}
            setSummaryGame={setSummaryGame}
            maxMatches={maxMatches}
            setGamesFinished={setGamesFinished}
          />
          <Summary summaryGame={summaryGame} />
        </>
      ) : (
        <>
          <Finished />
          <Summary summaryGame={summaryGame} />
        </>
      )}
    </div>
  );
}

export default App;
