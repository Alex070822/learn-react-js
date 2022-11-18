import "./App.css";
import IntroScreen from "./components/IntroScreen";
import Quiz from "./components/Quiz";
import { useEffect, useState } from "react";

const endpointUrl = "https://opentdb.com/api.php?amount=5";

interface ItemApi {
  id: string;
  question: string;
  correct_answer: string;
  incorrect_answers: Option[];
}

interface Option {
  id: string;
  option: string;
}

interface Item {
  id: string;
  question: string;
  correctAnswer: string;
  incorrectAnswers: Option[];
}

interface AppState {
  items: Item[];
}

function App() {
  const [startGame, setStartGame] = useState(false);
  const startButton = () => setStartGame(true);

  const [quiz, setQuiz] = useState<AppState>({
    items: [],
  });

  useEffect(() => {
    fetch(endpointUrl)
      .then((res) => res.json())
      .then((data) => setQuiz(data.results));
  }, [setQuiz]);

  console.log(setQuiz);
  return (
    <main>
      {startGame ? (
        <Quiz quiz={quiz} />
      ) : (
        <IntroScreen handleClick={startButton} />
      )}
    </main>
  );
}
export default App;
