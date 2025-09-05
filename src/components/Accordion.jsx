import "../css/Accordion.css";
import { useState } from "react";

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="accordion">
      <div className="comp-header" onClick={toggleAccordion}>
        <h3 className="header-title">{title}</h3>
        <i className="bi bi-chevron-down icon"></i>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="p-4 border-t border-gray-200">{children}</div>
      </div>
    </div>
  );
}

export default Accordion;
