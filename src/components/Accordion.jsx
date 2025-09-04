import "../css/Accordion.css";
import { useState } from "react";

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="accordion" onClick={toggleAccordion}>
      <div className="header">
        <p>{title}</p>
      </div>
    </div>
  );
}

export default Accordion;
