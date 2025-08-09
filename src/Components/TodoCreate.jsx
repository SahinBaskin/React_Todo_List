import React, { useState } from "react";
import "../App.css";

function TodoCreate({ onCreateTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const clearInput = () => {
    setNewTodo("");
  };

  const createTodo = () => {
    if (!newTodo.trim()) return;

    const request = {
      id: Date.now() + Math.random(), // Benzersiz ID
      content: newTodo.trim(),
    };

    onCreateTodo(request);
    clearInput();
  };

  return (
    <div className="todo-create">
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        type="text"
        placeholder="Add Todo"
        className="todo-input"
      />
      <button className="todo-create-button" onClick={createTodo}>
        Create
      </button>
    </div>
  );
}

export default TodoCreate;
