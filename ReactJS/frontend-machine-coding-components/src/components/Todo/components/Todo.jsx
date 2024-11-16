import Search from "./Search";
import TodoProvider from "../context/TodoContext";
import AddTodo from "./AddTodo";
import Filter from "./Filters";
import "../css/Todo.css";
import TodoList from "./TodoList";

const Todo = () => {
  return (
    <TodoProvider>
      <div className="todo-app-container">
        <header>
          <h3>Todo List</h3>
        </header>
        <Search />
        <Filter />
        <TodoList />
        <AddTodo />
      </div>
    </TodoProvider>
  );
};

export default Todo;
