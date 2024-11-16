import React, { createContext, useContext, useState, useEffect } from "react";

const TodoContext = createContext();

export const useTodos = () => useContext(TodoContext);

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  const saveTodos = (updatedTodos) => {
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  const addTodo = (text) => {
    const newTodo = {
      id: Math.random(),
      text,
      completed: false,
    };
    console.log("new array", newTodo);
    saveTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    saveTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    saveTodos(updatedTodos);
  };

  const clearTodo = () => {
    saveTodos([]);
  };

  const filterTodos = () => {
    switch (filter) {
      case "completed":
        return todos.filter((todo) => todo.completed);
      case "pending":
        return todos.filter((todo) => !todo.completed);
      case "all":
      default:
        return todos;
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleTodo,
        deleteTodo,
        clearTodo,
        filterTodos,
        setFilter,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
