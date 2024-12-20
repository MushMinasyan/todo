import React from "react";

export default function TodoItem({ todo, onDelete }) {
  return (
    <div className="todo-item">
      <label className="todo-content">
        <input type="checkbox" />
        {todo.text}
      </label>
      <button className="delete-button" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </div>
  );
}
