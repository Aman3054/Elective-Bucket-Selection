import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../state/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { token, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="center-screen">
        <div className="loader" />
        <p className="muted-text">Checking your session...</p>
      </div>
    );
  }

  if (!token) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;

