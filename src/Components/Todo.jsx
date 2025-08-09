import React, { useState } from "react";
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import "../App.css";

function Todo({ todo, onRemoveTodo, onUpdateTodo }) {
  const [editable, setEditable] = useState(false);
  const [newTodo, setNewTodo] = useState(todo.content);

  const removeTodo = () => {
    onRemoveTodo(todo.id);
  };

  const updateTodo = () => {
    const request = {
      id: todo.id,
      content: newTodo,
    };
    onUpdateTodo(request);
    setEditable(false);
  };

  return (
    <div className="todo-section">
      <div>
        {editable ? (
          <input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            type="text"
            className="todo-input"
            style={{ width: "380px" }}
          />
        ) : (
          todo.content
        )}
      </div>

      <div>
        <IoIosRemoveCircle
          className="todo-icons remove_icon"
          onClick={removeTodo}
        />
        {editable ? (
          <FaCheck className="todo-icons check_icon" onClick={updateTodo} />
        ) : (
          <FaEdit
            className="todo-icons edit_icon"
            onClick={() => setEditable(true)}
          />
        )}
      </div>
    </div>
  );
}

export default Todo;
