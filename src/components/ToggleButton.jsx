import React, { useState } from "react";
import "../css/ToggleButton.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function ToggleButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className="toggle-mode-btn" onClick={handleToggle}>
      <span className={isDarkMode ? "mode" : "active mode"}>
        <i
          className={isDarkMode ? "bi bi-sun icon" : "bi bi-sun-fill icon"}
        ></i>
      </span>
      <span className={isDarkMode ? "active mode" : "mode"}>
        <i
          className={isDarkMode ? "bi bi-moon-fill icon" : "bi bi-moon icon"}
        ></i>
      </span>
    </div>
  );
}

export default ToggleButton;
