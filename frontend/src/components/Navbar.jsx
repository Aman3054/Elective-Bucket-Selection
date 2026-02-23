import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../state/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-logo">Elective Bucket Selection</span>
        <span className="navbar-subtitle">NIET Student Portal</span>
      </div>
      <div className="navbar-center">
        <NavLink to="/home" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
        <NavLink to="/dashboard" className="nav-link">
          Dashboard
        </NavLink>
      </div>
      <div className="navbar-right">
        {user && (
          <span className="navbar-user">
            {user.username} ({user.rollNo})
          </span>
        )}
        <button type="button" className="btn-outline" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

