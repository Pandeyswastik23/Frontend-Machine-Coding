import { useContext, createContext, useState } from "react";

const AccordionContext = createContext();

export const useAccordionContext = () => useContext(AccordionContext);

// eslint-disable-next-line react/prop-types
export const AccordionProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState("section1");

  const value = {
    activeSection,
    setActiveSection,
  };

  return (
    <AccordionContext.Provider value={value}>
      {children}
    </AccordionContext.Provider>
  );
};
