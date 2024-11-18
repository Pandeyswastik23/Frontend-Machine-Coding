/* eslint-disable react/prop-types */
import { useTabContext } from "../context/TabContext";
import "../css/Tabs.css";

const TabItem = ({ tab, isActive }) => {
  const { setIsActiveTab } = useTabContext();
  return (
    <div>
      <div
        className={`tab-title ${isActive ? "active" : ""}`}
        onClick={() => setIsActiveTab(tab.id)}
      >
        {tab.title}
      </div>
      {isActive && (
        <div className={`tab-content ${isActive ? "active" : ""}`}>
          {tab.content}
        </div>
      )}
    </div>
  );
};

export default TabItem;
