import React from "react";
import { TabProvider } from "../context/TabContext";
import "../css/Tabs.css";
import TabPanel from "./TabPanel";

const Tab = () => {
  return (
    <TabProvider>
      <div className="tab-container">
        <TabPanel />
      </div>
    </TabProvider>
  );
};

export default Tab;
