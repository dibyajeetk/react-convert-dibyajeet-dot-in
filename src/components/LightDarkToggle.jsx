import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

function LightDarkToggle() {
  const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMode = () => {
      setIsDarkMode(!isDarkMode);
    };
  };
  return (
    <div>
      <span>Light</span>
      <span>Dark</span>
    </div>
  );
}

export default LightDarkToggle;
