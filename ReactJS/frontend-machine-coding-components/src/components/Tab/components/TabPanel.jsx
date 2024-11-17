import React from "react";
import { useTabContext } from "../context/TabContext";
import "../css/Tabs.css";
import TabItem from "./TabItem";

const tabData = [
  { id: "Tab1", title: "First Tab", content: "This is the content of Tab 1" },
  { id: "Tab2", title: "Second Tab", content: "This is the content of Tab 2" },
  { id: "Tab3", title: "Third Tab", content: "This is the content of Tab 3" },
  { id: "Tab4", title: "Fourth Tab", content: "This is the content of Tab 4" },
  { id: "Tab5", title: "Fifth Tab", content: "This is the content of Tab 5" },
  { id: "Tab6", title: "Sixth Tab", content: "This is the content of Tab 6" },
];

const TabPanel = () => {
  const { activeTab } = useTabContext();

  const activeTabContent = tabData.find((tab) => tab.id === activeTab)?.content;
  console.log(activeTab);
  return (
    <div>
      <div className="tab-list">
        {tabData.map((tab) => (
          <TabItem key={tab.id} tab={tab} isActive={activeTab === tab.id} />
        ))}
      </div>
      <div className="tab-content">
        <p>{activeTabContent}</p>
      </div>
    </div>
  );
};

export default TabPanel;
