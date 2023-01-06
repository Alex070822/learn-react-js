import { FC } from "react";
import { AnswerItem } from "../App";

interface QuestionProps {
  title: string;
  answers: AnswerItem[];
  setSelectedAnswer: (answerId: string) => void;
  selectedAnswer?: string;
  isVerifyingAnswers: boolean;
  correctAnswer: string;
}

const Quiz: FC<QuestionProps> = ({
  title,
  answers,
  setSelectedAnswer,
  selectedAnswer,
  isVerifyingAnswers,
  correctAnswer,
}) => {
  const selectionAnswerStyle = !isVerifyingAnswers ? "answer-selection" : "";

  return (
    <div className="quiz">
      <div className="question">{title}</div>
      <div className="answers">
        {answers.map(({ id: answerId, answer }) => {
          const correctAnswerStyle =
            isVerifyingAnswers && answer === correctAnswer
              ? "correct-answer"
              : "";

          return (
            <button
              key={answerId}
              className={
                selectedAnswer === answer
                  ? `answer-btn selected-answer ${correctAnswerStyle} ${selectionAnswerStyle}`
                  : `answer-btn ${correctAnswerStyle} ${selectionAnswerStyle}`
              }
              onClick={() => {
                if (!isVerifyingAnswers) {
                  setSelectedAnswer(answerId);
                }
              }}
            >
              {answer}
            </button>
          );
        })}
      </div>
      {isVerifyingAnswers && selectedAnswer === correctAnswer && (
        <p className="correct-answer-msg">Your answer was correct</p>
      )}

      {isVerifyingAnswers && selectedAnswer !== correctAnswer && (
        <p className="incorrect-answer-msg">Your answer was incorrect</p>
      )}
      <hr className="question-divider" />
    </div>
  );
};

export default Quiz;
