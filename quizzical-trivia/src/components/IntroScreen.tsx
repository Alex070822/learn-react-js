function IntroScreen(props) {
  return (
    <div className="intro-screen">
      <h1 className="title">Quizzical</h1>
      <h3 className="instructions">
        To start playing click the button below. Answer the questions and then
        click check answers to see your score.
      </h3>
      <button className="start-quiz" onClick={props.handleClick}>
        Start quiz
      </button>
    </div>
  );
}

export default IntroScreen;
