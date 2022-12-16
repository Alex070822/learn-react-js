import { FC } from "react";
import { Link } from "react-router-dom";

const IntroScreen: FC = () => {
  return (
    <main>
      <div className="intro-screen">
        <h1 className="title">Quizzical</h1>
        <h3 className="instructions">
          To start playing click the button below. Answer the questions and then
          click check answers to see your score.
        </h3>
        <Link to="/quiz">
          <button className="start-btn">Start quiz</button>
        </Link>
      </div>
    </main>
  );
};

export default IntroScreen;
