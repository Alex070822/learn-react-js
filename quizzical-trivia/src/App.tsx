import "./App.css";
import { FC, useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Quiz from "./components/Quiz";

interface Result {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface QuestionsResponseApi {
  response_code: number;
  results: Result[];
}

interface QuestionItem {
  id: string;
  question: string;
  answers: AnswerItem[];
  correctAnswer: string;
  selectedAnswer?: string;
}

export interface AnswerItem {
  id: string;
  answer: string;
}

const getQuestionsUrl = "https://opentdb.com/api.php?amount=5";

const App: FC = () => {
  const [questions, setQuestions] = useState<QuestionItem[]>([]);
  const [isVerifyingAnswers, setIsVerifyingAnswers] = useState(false);

  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = async () => {
    const response = await fetch(getQuestionsUrl);
    const data: QuestionsResponseApi = await response.json();
    const { results } = data;

    const questionItems = results.map(mapResultToQuestionItem);

    setQuestions(questionItems);
  };

  const setSelectedAnswer = (selectedAnswerId: string) => {
    setQuestions((currentQuestions) => {
      // new state
      const newQuestions: QuestionItem[] = [];

      // iterate every question to find for the answer selected
      currentQuestions.forEach((question) => {
        // find the selected answer
        const answerItemFound = question.answers.find(
          (answer) => answer.id === selectedAnswerId
        );

        // if found
        if (answerItemFound) {
          // update the selected answer for the corresponding question
          newQuestions.push({
            ...question,
            selectedAnswer: answerItemFound.answer,
          });
        } else {
          // if not found
          // leave the previous content as it was in the past
          newQuestions.push(question);
        }
      });

      return newQuestions;
    });
  };

  const getCorrectAnswersCount = () => {
    let count = 0;

    questions.forEach((question) => {
      count =
        question.selectedAnswer === question.correctAnswer ? count + 1 : count;
    });

    return count;
  };

  return (
    <main>
      {questions.map((question) => (
        <Quiz
          key={question.id}
          title={question.question}
          answers={question.answers}
          setSelectedAnswer={setSelectedAnswer}
          selectedAnswer={question.selectedAnswer}
          isVerifyingAnswers={isVerifyingAnswers}
          correctAnswer={question.correctAnswer}
        />
      ))}
      {isVerifyingAnswers && (
        <div className="score">
          You scored {getCorrectAnswersCount()}/{questions.length} correct
          answers
        </div>
      )}

      {isVerifyingAnswers ? (
        <button
          onClick={() => {
            setQuestions([]);
            setIsVerifyingAnswers(false);
            loadQuestions();
          }}
          className="check-answers-btn"
        >
          Play again
        </button>
      ) : (
        <button
          onClick={() => {
            setIsVerifyingAnswers(true);
          }}
          className="check-answers-btn"
        >
          Check answers
        </button>
      )}
    </main>
  );
};

function mapResultToQuestionItem(result: Result): QuestionItem {
  return {
    id: nanoid(),
    question: decodeString(result.question),
    answers: [
      ...result.incorrect_answers.map((answer) => {
        return {
          id: nanoid(),
          answer: decodeString(answer),
        };
      }),
      {
        id: nanoid(),
        answer: decodeString(result.correct_answer),
      },
    ].sort(() => Math.random() - 0.5),
    correctAnswer: decodeString(result.correct_answer),
    selectedAnswer: undefined,
  };
}

function decodeString(str: string): string {
  return str
    .replace(/&#039;/g, "'")
    .replace(/&quot;/g, `"`)
    .replace(/&amp;/g, "&")
    .replace(/&aacute;/g, "á")
    .replace(/&eacute;/g, "é")
    .replace(/&iacute;/g, "í")
    .replace(/&oacute;/g, "ó")
    .replace(/&uacute;/g, "ú")
    .replace(/&deg;/g, "º")
    .replace(/&ldquo;/g, "“")
    .replace(/&rdquo;/g, "”")
    .replace(/&ndash;/g, "–");
}

export default App;
