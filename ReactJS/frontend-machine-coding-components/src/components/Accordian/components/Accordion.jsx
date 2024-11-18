import { AccordionProvider } from "../context/Accordion.Context";
import AccordionList from "./AccordionList";

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
