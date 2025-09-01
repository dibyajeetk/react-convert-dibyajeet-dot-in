import dibyajeetLogo from "../assets/logo.svg";
import LightDarkToggle from "./LightDarkToggle";
import { Link } from "react-router-dom";
import "../css/NavBar.css";

function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <Link to="/">
          <img src={dibyajeetLogo} alt="Dibyajeet's Logo" width="42px" />
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Work
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </div>
      <div className="mode-toggle">
        <LightDarkToggle />
      </div>
    </nav>
  );
}

export default NavBar;
