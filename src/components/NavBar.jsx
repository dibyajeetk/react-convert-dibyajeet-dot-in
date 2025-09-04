import dibyajeetLogo from "../assets/logo.svg";
import ToggleButton from "./ToggleButton";
import { Link, useLocation } from "react-router-dom";
import "../css/NavBar.css";

function NavBar({ isDark, setIsDark }) {
  const location = useLocation();
  return (
    <nav className="nav-bar">
      <div className="logo">
        <Link to="/">
          <img src={dibyajeetLogo} alt="Dibyajeet's Logo" width="42px" />
        </Link>
      </div>
      <div className="navbar-links">
        <Link
          to="/"
          className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
        >
          Work
        </Link>
        <Link
          to="/about"
          className={`nav-link ${
            location.pathname === "/about" ? "active" : ""
          }`}
        >
          About
        </Link>
      </div>
      <div className="mode-toggle">
        <ToggleButton isDark={isDark} setIsDark={setIsDark} />
      </div>
    </nav>
  );
}

export default NavBar;
