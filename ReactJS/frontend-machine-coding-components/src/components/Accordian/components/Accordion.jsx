import { AccordionProvider } from "../context/Accordion.Context";
import AccordionList from "./AccordionList";
import "../css/Accordion.css";

const Accordion = () => {
  return (
    <div>
      <AccordionProvider>
        <AccordionList />
      </AccordionProvider>
    </div>
  );
};

export default Accordion;
