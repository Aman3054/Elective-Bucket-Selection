import { useLocation, useNavigate } from "react-router-dom";

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;

  if (!state?.result) {
    return (
      <div className="page">
        <div className="card">
          <p className="muted-text">
            No recent quiz result found. Attempt a quiz to see your result here.
          </p>
          <button
            type="button"
            className="btn-primary"
            onClick={() => navigate("/home")}
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  const { result, passed, remainingAttempts, elective } = state;

  return (
    <div className="page">
      <section className="card result-card">
        <h2>Quiz Result</h2>
        <p className="muted-text">
          Elective: <strong>{elective?.title}</strong>
        </p>

        <div className="result-score">
          <span className="score-value">{result.score}</span>
          <span className="score-label">out of 10</span>
        </div>

        <div
          className={
            passed ? "badge badge-success-large" : "badge badge-danger-large"
          }
        >
          {passed ? "Passed" : "Not Cleared"}
        </div>

        <p className="muted-text">
          Attempt number: <strong>{result.attemptNumber}</strong>
        </p>
        <p className="muted-text">
          Remaining attempts for this elective:{" "}
          <strong>{remainingAttempts}</strong>
        </p>

        {!passed && remainingAttempts > 0 && (
          <div className="alert-info">
            You have one more chance. Review the elective details and try the
            quiz again when you&apos;re ready.
          </div>
        )}

        <div className="result-actions">
          <button
            type="button"
            className="btn-outline"
            onClick={() => navigate("/home")}
          >
            Explore Electives
          </button>
          <button
            type="button"
            className="btn-primary"
            onClick={() => navigate("/dashboard")}
          >
            View Dashboard & Recommendation
          </button>
        </div>
      </section>
    </div>
  );
};

export default ResultPage;

