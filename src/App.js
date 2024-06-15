import React, { useState, useEffect } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all"); // 'all', 'active', 'completed'
  const [newDueDate, setNewDueDate] = useState("");
  const [sortBy, setSortBy] = useState("created"); // 'created', 'dueDate'

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    // Convert dueDate strings back to Date objects
    const todosWithDates = storedTodos.map((todo) => ({
      ...todo,
      dueDate: todo.dueDate ? new Date(todo.dueDate) : null,
    }));
    setTodos(todosWithDates);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTask = () => {
    if (newTask.trim() === "") {
      alert("Please enter a task description.");
      return;
    }

    if (!newDueDate) {
      alert("Please select a due date.");
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: newTask,
      completed: false,
      createdAt: new Date(),
      dueDate: newDueDate ? new Date(newDueDate) : null, // Store due date as Date object
    };
    setTodos([...todos, newTodo]);
    setNewTask("");
    setNewDueDate("");
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true; // Default to show all
  });

  const sortedTodos = filteredTodos.sort((a, b) => {
    if (sortBy === "created") {
      return a.createdAt - b.createdAt; // Ascending
    } else if (sortBy === "dueDate") {
      if (a.dueDate && b.dueDate) {
        return a.dueDate - b.dueDate;
      } else if (a.dueDate) {
        return -1; // Tasks with due dates come first
      } else if (b.dueDate) {
        return 1; // Tasks with due dates come first
      } else {
        return 0; // Both tasks don't have due dates
      }
    }
    return 0;
  });

  return (
    <div className="App">
      <h2>Get Things Done!</h2>
      <div className="input-container">
        <div className="Task">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add the task you want to add....."
            className="task-input"
          />
          <input
            type="date"
            value={newDueDate}
            onChange={(e) => setNewDueDate(e.target.value)}
            className="task-input"
          />
        </div>
        <div className="AddButton">
          <button onClick={addTask}>Add Task</button>
        </div>
      </div>
      <ul>
        {sortedTodos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            <span className="task-text">{todo.text}</span>
            {todo.dueDate && (
              <span className="due-date">
                Due: {todo.dueDate.toLocaleDateString()}
              </span>
            )}
            <button
              className="remove-button"
              onClick={() => removeTask(todo.id)}
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </li>
        ))}
      </ul>
      <div className="filter-sort-controls">
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="created">Created Date</option>
          <option value="dueDate">Due Date</option>
        </select>
      </div>
    </div>
  );
}

export default TodoList;
