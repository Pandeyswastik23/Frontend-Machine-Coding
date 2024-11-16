import { useTodos } from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { toggleTodo, deleteTodo } = useTodos();

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span className={todo.completed ? "completed-text" : ""}>
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>🗑️</button>
    </li>
  );
};

export default TodoItem;
