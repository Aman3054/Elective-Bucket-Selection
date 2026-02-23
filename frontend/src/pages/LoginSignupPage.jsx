import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { login, signup } from "../utils/api";
import { useAuth } from "../state/AuthContext";

const LoginSignupPage = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [signupForm, setSignupForm] = useState({
    username: "",
    rollNo: "",
    branch: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loginForm, setLoginForm] = useState({
    emailOrRoll: "",
    password: "",
  });

  const { login: setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (signupForm.password !== signupForm.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      const payload = {
        username: signupForm.username,
        rollNo: signupForm.rollNo,
        branch: signupForm.branch,
        email: signupForm.email,
        password: signupForm.password,
      };
      const data = await signup(payload);
      setAuth(data.token, data.user);
      navigate("/home");
    } catch (err) {
      const message =
        err.response?.data?.message ||
        err.response?.data?.errors?.[0]?.msg ||
        "Unable to sign up. Please try again.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      setLoading(true);
      const data = await login(loginForm);
      setAuth(data.token, data.user);
      const from = location.state?.from?.pathname || "/home";
      navigate(from, { replace: true });
    } catch (err) {
      const message =
        err.response?.data?.message ||
        err.response?.data?.errors?.[0]?.msg ||
        "Invalid credentials. Please try again.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Elective Bucket Selection</h1>
          <p>NIET portal to discover your ideal elective.</p>
        </div>

        <div className="tab-switcher">
          <button
            type="button"
            className={activeTab === "login" ? "tab active" : "tab"}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>
          <button
            type="button"
            className={activeTab === "signup" ? "tab active" : "tab"}
            onClick={() => setActiveTab("signup")}
          >
            Sign Up
          </button>
        </div>

        {error && <div className="alert-error">{error}</div>}

        {activeTab === "login" ? (
          <form className="form" onSubmit={handleLoginSubmit}>
            <div className="form-row">
              <label>Email or Roll Number</label>
              <input
                name="emailOrRoll"
                type="text"
                placeholder="student@niets.ac.in or 22CS123"
                value={loginForm.emailOrRoll}
                onChange={handleLoginChange}
                required
              />
            </div>
            <div className="form-row">
              <label>Password</label>
              <input
                name="password"
                type="password"
                placeholder="Enter password"
                value={loginForm.password}
                onChange={handleLoginChange}
                required
              />
            </div>
            <button
              type="submit"
              className="btn-primary w-100"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        ) : (
          <form className="form grid-2" onSubmit={handleSignupSubmit}>
            <div className="form-row">
              <label>Username</label>
              <input
                name="username"
                type="text"
                placeholder="Full name"
                value={signupForm.username}
                onChange={handleSignupChange}
                required
              />
            </div>
            <div className="form-row">
              <label>Roll Number</label>
              <input
                name="rollNo"
                type="text"
                placeholder="e.g., 22CS123"
                value={signupForm.rollNo}
                onChange={handleSignupChange}
                required
              />
            </div>
            <div className="form-row">
              <label>Branch</label>
              <input
                name="branch"
                type="text"
                placeholder="CSE / IT / AIML..."
                value={signupForm.branch}
                onChange={handleSignupChange}
                required
              />
            </div>
            <div className="form-row">
              <label>Email</label>
              <input
                name="email"
                type="email"
                placeholder="college email"
                value={signupForm.email}
                onChange={handleSignupChange}
                required
              />
            </div>
            <div className="form-row">
              <label>Password</label>
              <input
                name="password"
                type="password"
                placeholder="Min 6 characters"
                value={signupForm.password}
                onChange={handleSignupChange}
                required
              />
            </div>
            <div className="form-row">
              <label>Confirm Password</label>
              <input
                name="confirmPassword"
                type="password"
                placeholder="Re-enter password"
                value={signupForm.confirmPassword}
                onChange={handleSignupChange}
                required
              />
            </div>
            <button
              type="submit"
              className="btn-primary w-100 grid-span-2"
              disabled={loading}
            >
              {loading ? "Creating account..." : "Create Account"}
            </button>
          </form>
        )}
      </div>
      <div className="auth-gradient-bg" />
    </div>
  );
};

export default LoginSignupPage;

