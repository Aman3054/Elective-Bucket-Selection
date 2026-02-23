const QuizStepper = ({ current, total }) => {
  return (
    <div className="quiz-stepper">
      {Array.from({ length: total }).map((_, idx) => {
        const step = idx + 1;
        const status =
          step === current ? "active" : step < current ? "done" : "pending";
        return (
          <div key={step} className={`quiz-step quiz-step-${status}`}>
            <span className="quiz-step-index">{step}</span>
          </div>
        );
      })}
    </div>
  );
};

export default QuizStepper;

