import { useAccordionContext } from "../context/Accordion.Context";

import AccordionItem from "./AccordionItem";

import "../css/AccordianList.css";

const sectionData = [
  {
    id: "section1",
    title: "Section 1",
    content: "Content for section1",
  },
  {
    id: "section2",
    title: "Section 2",
    content: "Content for section2",
  },
  {
    id: "section3",
    title: "Section 3",
    content: "Content for section3",
  },
  {
    id: "section4",
    title: "Section 4",
    content: "Content for section4",
  },
  {
    id: "section5",
    title: "Section 5",
    content: "Content for section5",
  },
];
const AccordionList = () => {
  const { activeSection } = useAccordionContext();

  return (
    <div className="accordion-container">
      <div className="accordion-list">
        {sectionData.map((section) => (
          <AccordionItem
            key={section.id}
            section={section}
            isActive={activeSection === section.id}
          />
        ))}
      </div>
    </div>
  );
};

export default AccordionList;
