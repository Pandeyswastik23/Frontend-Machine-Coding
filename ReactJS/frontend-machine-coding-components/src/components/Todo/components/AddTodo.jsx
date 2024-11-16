import { useState } from "react";
import { useTodos } from "../context/TodoContext";

import "../css/AddTodo.css";

const AddTodo = () => {
  const [text, setText] = useState("");
  const { addTodo } = useTodos();

  const handleAddTodo = () => {
    if (text.trim() === "") return;
    addTodo(text);
    setText("");
  };

  return (
    <div className="todo-input-container">
      <input
        type="text"
        className="todo-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new todo"
      />
      <button onClick={handleAddTodo}>➕ Add Todo</button>
    </div>
  );
};

export default AddTodo;
