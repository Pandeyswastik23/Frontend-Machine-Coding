const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");
const todoBtn = document.getElementById("add-todo");

const filterAllbtn = document.getElementById("filter-all");
const filterCompletedBtn = document.getElementById("filter-completed");
const filterPendingBtn = document.getElementById("filter-pending");
const clearFilterBtn = document.getElementById("clear-all");

let todos = [];

const saveTodoLocalStorage = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const loadTodosFromLocalStorage = () => {
  const storedItems = localStorage.getItem("todos");
  if (storedItems) {
    todos = JSON.parse(storedItems);
    console.log("parsed todos", todos);
    renderTodos(todos);
  }
};

function throttle(callback, limit) {
  let lastExecutionTime;

  return function (...args) {
    const now = Date.now();
    if (!lastExecutionTime || now - lastExecutionTime >= limit) {
      callback.apply(this, args);
      lastExecutionTime = now;
    }
  };
}

const addTodo = () => {
  const todoText = todoInput.value.trim();
  if (todoText === "") {
    alert("Please enter a valid item");
    return;
  }
  console.log(todos);

  const todo = {
    id: Math.random(),
    text: todoText,
    completed: false,
  };
  console.log(todo);

  todos.push(todo);
  todoInput.value = "";

  saveTodoLocalStorage();
  renderTodos(todos);
};

const renderTodos = (enteredTodos) => {
  todoList.innerHTML = "";
  enteredTodos.forEach((todo) => {
    const listItem = document.createElement("li");
    listItem.className = "todo-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.className = "todo-checkbox";
    checkbox.addEventListener("change", () => toggleTodo(todo.id));

    const todoText = document.createElement("span");
    todoText.className = "todo-text";
    todoText.textContent = todo.text;

    if (todo.completed) {
      todoText.classList.add("completed-text");
    }

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "🗑️";
    deleteButton.className = "delete-todo";
    deleteButton.addEventListener("click", () => deleteTodo(todo.id));

    listItem.appendChild(checkbox);
    listItem.appendChild(todoText);
    listItem.appendChild(deleteButton);

    todoList.appendChild(listItem);
  });
};

const toggleTodo = (id) => {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        completed: !todo.completed,
      };
    }
    return todo;
  });
  saveTodoLocalStorage();
  renderTodos(todos);
};
const deleteTodo = (id) => {
  todos = todos.filter((todo) => todo.id !== id);
  saveTodoLocalStorage();
  renderTodos(todos);
};

const clearTodos = () => {
  todos = [];
  localStorage.removeItem("todos");
  renderTodos(todos);
};

const searchTodo = () => {
  const searchText = searchInput.value.toLowerCase();
  console.log("Searching for:", searchText);
  const searchedTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(searchText);
  });
  renderTodos(searchedTodos);
};

const filterTodos = (filter) => {
  let filteredTodos;
  switch (filter) {
    case "all":
      filteredTodos = todos;
      break;
    case "pending":
      filteredTodos = todos.filter((todo) => !todo.completed);
      break;
    case "completed":
      filteredTodos = todos.filter((todo) => todo.completed);
      break;
    default:
      filteredTodos = todos;
  }
  renderTodos(filteredTodos);
};

document.addEventListener("DOMContentLoaded", () => {
  loadTodosFromLocalStorage();
});

todoBtn.addEventListener("click", addTodo);
searchBtn.addEventListener("click", searchTodo);
clearFilterBtn.addEventListener("click", clearTodos);
filterAllbtn.addEventListener("click", () => filterTodos("all"));
filterCompletedBtn.addEventListener("click", () => filterTodos("completed"));
filterPendingBtn.addEventListener("click", () => filterTodos("pending"));

todoInput.addEventListener("keypress", (evt) => {
  if (evt.key === "Enter") {
    addTodo();
  }
});

const throttledSearch = throttle(searchTodo, 500);
searchInput.addEventListener("input", throttledSearch);
