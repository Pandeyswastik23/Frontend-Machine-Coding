import { useTodos } from "../context/TodoContext";

import "../css/Filter.css";

const Filter = () => {
  const { clearTodo, setFilter } = useTodos();

  return (
    <div className="filter-container">
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
      <button onClick={() => setFilter("pending")}>Pending</button>
      <button onClick={clearTodo} id="clear-all">
        Clear All
      </button>
    </div>
  );
};

export default Filter;
