import { useState } from "react";
import "./App.css";
import Todo from "./Components/Todo";
import TodoForm from "./Components/TodoForm";

function App() {
  const [todos, setTodos] = useState([
    { id: Math.random(), text: "Welcome to my app", isCompleted: false },
  ]);
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="App">
      <h1>To Do List</h1>
      <TodoForm
        onAdd={(text) => {
          setTodos([
            ...todos,
            { id: Math.random(), text: text, isCompleted: false },
          ]);
        }}
      />
      <Todo todos={todos} onDelete={handleDelete} />
    </div>
  );
}

export default App;
