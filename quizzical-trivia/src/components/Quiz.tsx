function Quiz(props) {
  return (
    <div className="quiz">
      {props.quiz.map((question) => {
        return (
          <>
            <h2 className="question">{question.question}</h2>
            <div className="answer-container">
              <button className="answer">{question.correct_answer}</button>
              {question.incorrect_answers.map((options) => {
                return <button className="answer">{options}</button>;
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
