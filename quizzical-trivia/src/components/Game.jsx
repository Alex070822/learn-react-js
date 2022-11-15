import { useEffect, useState } from "react";

function Game() {
  const [newGame, setNewGame] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then((res) => res.json())
      .then((data) => setNewGame(data.results));
  }, []);

  return (
    <>
      <h2 className="question"></h2>
      <p className="answar"></p>
    </>
  );
}

export default Game;
