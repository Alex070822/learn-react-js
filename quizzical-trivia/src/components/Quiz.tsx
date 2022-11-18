import { useState } from "react";

function Quiz(props) {
  const [quizData, setQuizData] = useState({ isSelected: "" });
  return (
    <div className="quiz">
      {props.quiz.map((question) => {
        return (
          <>
            <h2 className="question">{question.question}</h2>
            <div className="answer-container">
              <button className="answer">{question.correct_answer}</button>
              <input type="radio" name="answer" />
              {question.incorrect_answers.map((options) => {
                return (
                  <>
                    <button className="answer">{options}</button>
                    <input type="radio" name="answer" />
                  </>
                );
              })}
            </div>
            <hr className="question-divider" />
          </>
        );
      })}
      <button className="check-answers">Check answers</button>
    </div>
  );
}

export default Quiz;
