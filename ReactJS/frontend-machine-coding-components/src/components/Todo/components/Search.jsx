import { useState } from "react";
import { useTodos } from "../context/TodoContext";
import "../css/Search.css";

const Search = () => {
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const { todos } = useTodos();

  const handleSearch = () => {
    const filteredTodos = todos.filter((todo) =>
      todo.text.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredResults(filteredTodos);
  };

  return (
    <div className="search-container">
      <input
        id="search-input"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button id="searchBtn" onClick={handleSearch}>
        🔍
      </button>
    </div>
  );
};

export default Search;
