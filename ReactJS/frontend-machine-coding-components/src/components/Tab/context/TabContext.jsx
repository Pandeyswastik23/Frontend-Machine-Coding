import React, { createContext, useContext, useState } from "react";

const TabContext = createContext();

export const useTabContext = () => useContext(TabContext);

export const TabProvider = ({ children }) => {
  const [activeTab, setIsActiveTab] = useState("Tab1");

  const value = {
    activeTab,
    setIsActiveTab,
  };

  return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
};
