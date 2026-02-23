import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchElectiveById } from "../utils/api";
import { useAuth } from "../state/AuthContext";

const ElectiveDetailPage = () => {
  const { id } = useParams();
  const { token } = useAuth();
  const navigate = useNavigate();
  const [elective, setElective] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchElectiveById(id, token);
        setElective(data);
      } catch (err) {
        const message =
          err.response?.data?.message || "Failed to load elective details.";
        setError(message);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id, token]);

  if (loading) {
    return (
      <div className="page">
        <p className="muted-text">Loading elective details...</p>
      </div>
    );
  }

  if (error || !elective) {
    return (
      <div className="page">
        <div className="alert-error">{error || "Elective not found."}</div>
      </div>
    );
  }

  const overviewCopy = (() => {
    switch (elective.title) {
      case "Full Stack Development":
        return "Full Stack Development combines frontend, backend, and database skills so you can architect and build complete web applications from idea to deployment.";
      case "Artificial Intelligence & Machine Learning":
        return "AI & ML focuses on teaching systems to learn from data, make predictions, and power intelligent features used in products across every industry.";
      case "Cloud Computing":
        return "Cloud Computing is about designing, deploying, and operating applications on platforms like AWS, Azure, and GCP with a strong focus on scalability and reliability.";
      default:
        return "This elective helps you develop practical, industry-ready skills through hands-on projects and modern tooling.";
    }
  })();

  const futureScopePoints = (() => {
    switch (elective.title) {
      case "Full Stack Development":
        return [
          "High demand for engineers who can work across frontend, backend, and DevOps.",
          "Startups and product companies prefer full stack developers for smaller, fast-moving teams.",
          "Plenty of freelance and remote opportunities building SaaS, dashboards, and internal tools.",
        ];
      case "Artificial Intelligence & Machine Learning":
        return [
          "Rapid growth in data-driven roles across healthcare, finance, and consumer apps.",
          "Research and product teams are constantly hiring for ML engineers and data scientists.",
          "New roles emerging in AI safety, AI tooling, and applied machine learning.",
        ];
      case "Cloud Computing":
        return [
          "Most companies are migrating infrastructure to cloud platforms.",
          "Strong need for engineers who understand DevOps, containers, and CI/CD.",
          "Cloud certifications significantly improve placement and promotion chances.",
        ];
      default:
        return [
          "Consistent demand for skilled engineers with strong fundamentals.",
          "Opportunities across startups, product companies, and enterprise organizations.",
        ];
    }
  })();

  const salaryRanges = (() => {
    switch (elective.title) {
      case "Full Stack Development":
        return {
          entry: "₹5–8 LPA (Junior Full Stack Developer)",
          mid: "₹9–16 LPA (Full Stack / Product Engineer)",
          senior: "₹17–30+ LPA (Senior / Tech Lead)",
        };
      case "Artificial Intelligence & Machine Learning":
        return {
          entry: "₹6–10 LPA (ML Engineer / Data Analyst)",
          mid: "₹12–22 LPA (ML Engineer / Data Scientist)",
          senior: "₹23–35+ LPA (Senior ML / Research Engineer)",
        };
      case "Cloud Computing":
        return {
          entry: "₹5–9 LPA (Cloud / DevOps Engineer)",
          mid: "₹10–18 LPA (Platform / SRE / DevOps)",
          senior: "₹19–32+ LPA (Senior DevOps / Cloud Architect)",
        };
      default:
        return {
          entry: "₹5–8 LPA",
          mid: "₹9–16 LPA",
          senior: "₹17–30+ LPA",
        };
    }
  })();

  const trendingReasons = (() => {
    switch (elective.title) {
      case "Full Stack Development":
        return [
          "End-to-end ownership of products and features.",
          "Directly visible impact on user experience.",
          "Core skillset for modern startups and SaaS companies.",
          "Combines creativity (UI) with strong engineering (APIs, databases).",
        ];
      case "Artificial Intelligence & Machine Learning":
        return [
          "AI is shaping search, recommendations, vision, and language tools.",
          "High-impact roles at cutting-edge research and product teams.",
          "Combines math, coding, and problem-solving in a unique way.",
          "Central to automation and intelligent decision-making.",
        ];
      case "Cloud Computing":
        return [
          "Every serious application needs reliable cloud infrastructure.",
          "DevOps and SRE roles are critical in high-scale systems.",
          "Strong overlap with security, scalability, and reliability work.",
          "Cloud-native tools (Docker, Kubernetes) are now standard.",
        ];
      default:
        return [
          "Strong alignment with current industry hiring trends.",
          "Opportunities to work on impactful, real-world systems.",
          "Plenty of room to specialize as you grow.",
        ];
    }
  })();

  return (
    <div className="page">
      {/* 1. Overview / Brief Introduction */}
      <section className="card detail-header">
        <div className="detail-header-top">
          <div>
            <h2>{elective.title}</h2>
            <p className="detail-tagline">Brief Introduction</p>
          </div>
          <p className="detail-salary-chip">{elective.salaryInfo}</p>
        </div>
        <p className="card-body-text">{overviewCopy}</p>
        <p className="card-body-text detail-description">{elective.description}</p>
      </section>

      {/* 2. Future scope */}
      <section className="card detail-section">
        <h3>Future Scope & Opportunities</h3>
        <div className="future-scope-grid">
          <div className="future-scope-card">
            <p className="muted-text">
              This elective opens doors to long-term, high-growth roles across
              product companies, startups, and global tech organizations.
            </p>
            <ul className="future-scope-list">
              {futureScopePoints.map((point) => (
                <li key={point}>
                  <span className="bullet-icon" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Salary trends */}
      <section className="card detail-section">
        <h3>Salary Trends (Indicative)</h3>
        <p className="muted-text">
          Real salaries vary by company, location, and your portfolio, but these
          bands reflect common ranges in the Indian tech market.
        </p>
        <div className="salary-grid">
          <div className="salary-card salary-card-entry">
            <h4>Entry Level</h4>
            <p>{salaryRanges.entry}</p>
          </div>
          <div className="salary-card salary-card-mid">
            <h4>Mid Level</h4>
            <p>{salaryRanges.mid}</p>
          </div>
          <div className="salary-card salary-card-senior">
            <h4>Senior Level</h4>
            <p>{salaryRanges.senior}</p>
          </div>
        </div>
      </section>

      {/* 4. Why this field is trending */}
      <section className="card detail-section">
        <h3>Why This Field Is Trending</h3>
        <div className="trending-grid">
          {trendingReasons.map((reason) => (
            <div key={reason} className="trending-card">
              <p>{reason}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Keep skills */}
      <section className="card detail-section">
        <h3>Key Skills You&apos;ll Build</h3>
        <ul className="pill-list">
          {elective.skills?.map((s) => (
            <li key={s} className="pill">
              {s}
            </li>
          ))}
        </ul>
      </section>

      {/* 6. Quiz CTA */}
      <section className="card detail-section">
        <h3>Ready to test your understanding?</h3>
        <p className="muted-text">
          You will attempt a 10-question quiz for this elective. If you do not
          clear it in the first attempt, you will get only one more chance.
        </p>
        <button
          type="button"
          className="btn-primary"
          onClick={() => navigate(`/quiz/${elective._id}`)}
        >
          Start Quiz
        </button>
      </section>
    </div>
  );
};

export default ElectiveDetailPage;

