import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ElectiveCard from "../components/ElectiveCard";
import { useAuth } from "../state/AuthContext";
import { fetchElectives } from "../utils/api";

const HomeDashboard = () => {
  const { token, user } = useAuth();
  const [electives, setElectives] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // ⭐ VERY IMPORTANT: wait until token exists
    if (!token) return;

    const load = async () => {
      try {
        console.log("[HomeDashboard] fetching electives with token", {
          hasToken: !!token,
        });

        setLoading(true); // ensure loading starts when token arrives

        const data = await fetchElectives(token);
        console.log("ELECTIVES DATA =", data);
        setElectives(data);
        setError("");
      } catch (err) {
        console.error("[HomeDashboard] failed to load electives", {
          status: err.response?.status,
          data: err.response?.data,
        });

        const message =
          err.response?.data?.message || "Failed to load electives.";
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [token]);

  return (
    <div className="page">
      <section className="hero">
        <div>
          <h2>
            Welcome, {user?.username}!{" "}
            <span className="hero-highlight">Plan your future elective.</span>
          </h2>
          <p className="muted-text">
            Explore each specialization, attempt short quizzes, and let the
            system recommend the best fit based on your understanding.
          </p>
        </div>
      </section>

      <section className="cards-grid">
        {loading && <p className="muted-text">Loading electives...</p>}
        {error && <div className="alert-error">{error}</div>}
        {!loading &&
          !error &&
          electives.map((e) => (
            <ElectiveCard
              key={e._id}
              title={e.title}
              description={e.description}
              salaryInfo={e.salaryInfo}
              onSelect={() => navigate(`/electives/${e._id}`)}
            />
          ))}
      </section>
    </div>
  );
};

export default HomeDashboard;
