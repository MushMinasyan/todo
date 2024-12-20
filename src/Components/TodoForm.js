import React, { useState } from "react";

export default function TodoForm({ onAdd }) {
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim() !== "") {
      onAdd(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button className="add-button" type="submit">
        Add task
      </button>
    </form>
  );
}
