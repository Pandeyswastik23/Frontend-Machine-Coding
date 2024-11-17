import React from "react";
import { useTabContext } from "../context/TabContext";
import "../css/Tabs.css";

const TabItem = ({ tab, isActive }) => {
  const { setIsActiveTab } = useTabContext();
  return (
    <div
      className={`tab-title ${isActive ? "active" : ""}`}
      onClick={() => setIsActiveTab(tab.id)}
    >
      {tab.title}
    </div>
  );
};

export default TabItem;
