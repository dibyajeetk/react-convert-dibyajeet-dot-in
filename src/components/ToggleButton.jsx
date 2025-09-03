import "../css/ToggleButton.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function ToggleButton({ isDark, setIsDark }) {
  const setToggle = () => {
    setIsDark(!isDark);
  };
  return (
    <div className="toggle-mode-btn" onClick={setToggle}>
      <span className={!isDark ? "mode active" : "mode"}>
        <i className={!isDark ? "bi bi-sun-fill icon" : "bi bi-sun icon"}></i>
      </span>
      <span className={isDark ? "mode active" : "mode"}>
        <i className={isDark ? "bi bi-moon-fill icon" : "bi bi-moon icon"}></i>
      </span>
    </div>
  );
}

export default ToggleButton;
