import "./App.css";
import Header from "./components/Header/Header";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import Buttons from "./components/Buttons/Buttons";

function App() {
  return (
    <div className="App">
      <Header />
      <Scoreboard />
      <Buttons />
    </div>
  );
}

export default App;
