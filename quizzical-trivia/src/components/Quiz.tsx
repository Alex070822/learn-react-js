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
              <input
                type="radio"
                id="correct-answer"
                name="answer"
                className="answer-button"
              />
              <label htmlFor="correct-answer" className="answer-label">
                {question.correct_answer}
              </label>
              {question.incorrect_answers.map((options) => {
                return (
                  <>
                    <input
                      type="radio"
                      id="incorrect-answer"
                      name="answer"
                      className="answer-button"
                    />
                    <label htmlFor="incorrect-answer" className="answer-label">
                      {options}
                    </label>
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
