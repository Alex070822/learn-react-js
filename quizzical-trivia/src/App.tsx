import "./App.css";
import Game from "./components/Game";

function App() {
  return (
    <main>
      <Game />
      <div className="new-game">
        <h1>Quizzical</h1>
        <h3>
          To play answer the questions and then click the check answers button
        </h3>
        <button className="start-new-game">Start quiz</button>
      </div>
    </main>
  );
}
export default App;
