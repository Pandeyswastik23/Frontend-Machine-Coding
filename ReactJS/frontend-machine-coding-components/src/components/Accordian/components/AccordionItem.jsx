/* eslint-disable react/prop-types */

import { useAccordionContext } from "../context/Accordion.Context";
import "../css/AccordionItem.css";

const AccordionItem = ({ section, isActive }) => {
  const { setActiveSection } = useAccordionContext();

  return (
    <>
      <div
        className={`accordion-title ${isActive ? "active" : ""}`}
        onClick={() => setActiveSection(section.id)}
      >
        {section.title}
      </div>
      {isActive && (
        <div className="accordion-content active">{section.content}</div>
      )}
    </>
  );
};

export default AccordionItem;
