import dibyajeetLogo from "../assets/logo.svg";
import ToggleButton from "./ToggleButton";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "../css/NavBar.css";

function NavBar({ isDark, setIsDark }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="nav-bar">
      <div className="nav-top">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src={dibyajeetLogo} alt="Dibyajeet's Logo" width="42px" />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="navbar-links desktop-only">
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

        {/* Theme toggle (desktop only) */}
        <div className="mode-toggle desktop-only">
          <ToggleButton isDark={isDark} setIsDark={setIsDark} />
        </div>

        {/* Hamburger (mobile only) */}
        <button
          className="hamburger-menu mobile-only"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-list"></i>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="mobile-dropdown mobile-only">
          <ul className="mobile-menu-list">
            <li>
              <Link
                to="/"
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                onClick={closeMenu}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li className="mobile-toggle">
              <ToggleButton isDark={isDark} setIsDark={setIsDark} />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
