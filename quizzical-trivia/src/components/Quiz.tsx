import { FC } from "react";
import { AnswerItem } from "../App";

interface QuestionProps {
  key: string;
  title: string;
  answers: AnswerItem[];
  correctAnswer: string;
  isVerifyingAnswers: boolean;
}

const Quiz: FC<QuestionProps> = ({
  title,
  answers,
  correctAnswer,
  isVerifyingAnswers,
}) => {
  return (
    <div className="quiz">
      <div className="question">{title}</div>
      <div className="answers">
        {answers.map(({ id: answerId, answer }) => {
          return (
            <div className="radio-btn" key={answerId}>
              <input
                className={
                  isVerifyingAnswers && answer === correctAnswer
                    ? "correct-answer-style"
                    : isVerifyingAnswers && answer !== correctAnswer
                    ? "incorrect-answer-style"
                    : "default-answer-style"
                }
                type="radio"
                id="answer"
                name={title}
              />
              <label
                className={
                  isVerifyingAnswers && answer === correctAnswer
                    ? "correct-answer-style"
                    : "default-answer-style"
                }
                htmlFor="answer"
              >
                {answer}
              </label>
            </div>
          );
        })}
      </div>
      <hr className="question-divider" />
    </div>
  );
};

export default Quiz;
