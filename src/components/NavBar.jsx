import dibyajeetLogo from "../assets/logo.svg";
import ToggleButton from "./ToggleButton";
import { Link } from "react-router-dom";
import "../css/NavBar.css";
import React, { useState } from "react";

function NavBar() {
  const [isActive, setActive] = useState(false);
  const handleActiveState = () => {
    setActive(!isActive);
  };
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
        <ToggleButton />
      </div>
    </nav>
  );
}

export default NavBar;
