import { useEffect, useState } from "react";
import { fetchMyResults, fetchRecommendation } from "../utils/api";
import { useAuth } from "../state/AuthContext";

const DashboardPage = () => {
  const { token, user } = useAuth();
  const [results, setResults] = useState([]);
  const [recommendation, setRecommendation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const [resHistory, rec] = await Promise.all([
          fetchMyResults(token),
          fetchRecommendation(token).catch((err) => {
            if (err.response?.status === 404) return null;
            throw err;
          }),
        ]);
        setResults(resHistory);
        setRecommendation(rec);
      } catch (err) {
        const message =
          err.response?.data?.message || "Failed to load dashboard data.";
        setError(message);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [token]);

  return (
    <div className="page">
      <section className="card">
        <h2>Dashboard</h2>
        <p className="muted-text">
          Track all your quiz attempts and see your personalized elective
          recommendation.
        </p>
      </section>

      {loading && <p className="muted-text">Loading your attempts...</p>}
      {error && <div className="alert-error">{error}</div>}

      {!loading && !error && (
        <section className="dashboard-grid">
          <div className="card">
            <h3>Attempt History</h3>
            {results.length === 0 ? (
              <p className="muted-text">
                You have not attempted any quizzes yet.
              </p>
            ) : (
              <table className="table">
                <thead>
                  <tr>
                    <th>Elective</th>
                    <th>Score</th>
                    <th>Attempt</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((r) => (
                    <tr key={r._id}>
                      <td>{r.electiveId?.title}</td>
                      <td>{r.score}/10</td>
                      <td>{r.attemptNumber}</td>
                      <td>{new Date(r.createdAt).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          <div className="card recommendation-card">
            <h3>Recommended Elective</h3>
            {!recommendation ? (
              <p className="muted-text">
                Once you attempt at least one quiz, the system will recommend an
                elective based on your performance.
              </p>
            ) : (
              <>
                <p className="muted-text">
                  Based on your quiz performance, we recommend:
                </p>
                <h2>{recommendation.elective.title}</h2>
                <p className="card-body-text">
                  {recommendation.elective.description}
                </p>
                <p className="card-salary">
                  {recommendation.elective.salaryInfo}
                </p>
                <p className="muted-text">
                  Best score: <strong>{recommendation.score}/10</strong> in{" "}
                  <strong>{recommendation.attemptNumber}</strong> attempt(s).
                </p>
                <h4>Key Skills</h4>
                <ul className="pill-list">
                  {recommendation.elective.skills?.map((s) => (
                    <li key={s} className="pill">
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="badge badge-success-large">
                  Great fit for your strengths, {user?.username}.
                </div>
              </>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default DashboardPage;

