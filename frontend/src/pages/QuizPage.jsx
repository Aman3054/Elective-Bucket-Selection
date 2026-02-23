import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { fetchElectiveById, fetchQuestions, submitQuiz } from "../utils/api";
import { useAuth } from "../state/AuthContext";
import QuizStepper from "../components/QuizStepper";

const QuizPage = () => {
  const { electiveId } = useParams();
  const { token } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [elective, setElective] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const totalQuestions = questions.length;
  const currentQuestion = questions[currentIndex];

  useEffect(() => {
    const load = async () => {
      try {
        const [e, q] = await Promise.all([
          fetchElectiveById(electiveId, token),
          fetchQuestions(electiveId, token),
        ]);
        setElective(e);
        setQuestions(q);
      } catch (err) {
        const message =
          err.response?.data?.message || "Failed to load quiz questions.";
        setError(message);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [electiveId, token]);

  const answeredCount = useMemo(
    () => Object.keys(answers).length,
    [answers]
  );

  const handleOptionSelect = (questionId, option) => {
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
  };

  const goNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((idx) => idx + 1);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((idx) => idx - 1);
    }
  };

  const handleSubmit = async () => {
    if (answeredCount < totalQuestions) {
      if (
        !window.confirm(
          "You have not answered all questions. Submit anyway?"
        )
      ) {
        return;
      }
    }

    try {
      setSubmitting(true);
      setError("");

      const payload = Object.entries(answers).map(
        ([questionId, selectedOption]) => ({
          questionId,
          selectedOption,
        })
      );

      const data = await submitQuiz(electiveId, payload, token);
      navigate("/results", {
        state: {
          result: data.result,
          passed: data.passed,
          remainingAttempts: data.remainingAttempts,
          elective,
        },
        replace: true,
      });
    } catch (err) {
      const message =
        err.response?.data?.message ||
        err.response?.data?.errors?.[0]?.msg ||
        "Failed to submit quiz.";
      setError(message);
      if (
        err.response?.data?.message &&
        err.response.data.message.includes("Maximum attempts")
      ) {
        setTimeout(() => navigate("/dashboard"), 2000);
      }
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="page">
        <p className="muted-text">Loading quiz...</p>
      </div>
    );
  }

  if (error && !questions.length) {
    return (
      <div className="page">
        <div className="alert-error">{error}</div>
      </div>
    );
  }

  return (
    <div className="page">
      <section className="quiz-header card">
        <h2>{elective?.title} Quiz</h2>
        <p className="muted-text">
          10 MCQs, one question at a time. You have a maximum of two attempts
          for this elective.
        </p>
        <div className="quiz-meta">
          <span>
            Question {currentIndex + 1} of {totalQuestions}
          </span>
          <span>{answeredCount} answered</span>
        </div>
        <QuizStepper current={currentIndex + 1} total={totalQuestions} />
      </section>

      {error && <div className="alert-error">{error}</div>}

      {currentQuestion && (
        <section className="card">
          <h3 className="quiz-question">{currentQuestion.question}</h3>
          <div className="options-list">
            {currentQuestion.options.map((opt) => (
              <label key={opt} className="option-pill">
                <input
                  type="radio"
                  name={currentQuestion._id}
                  value={opt}
                  checked={answers[currentQuestion._id] === opt}
                  onChange={() => handleOptionSelect(currentQuestion._id, opt)}
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </section>
      )}

      <section className="quiz-actions">
        <button
          type="button"
          className="btn-outline"
          onClick={goPrev}
          disabled={currentIndex === 0}
        >
          Previous
        </button>
        {currentIndex < totalQuestions - 1 ? (
          <button type="button" className="btn-primary" onClick={goNext}>
            Next
          </button>
        ) : (
          <button
            type="button"
            className="btn-primary"
            onClick={handleSubmit}
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Submit Quiz"}
          </button>
        )}
      </section>
    </div>
  );
};

export default QuizPage;

