import { useState } from "react";

// This component will handle our todo logic
function TodoApp() {
  // State to store input text
  const [input, setInput] = useState("");

  // State to store all todos (array)
  const [todos, setTodos] = useState([]);

  // Function to add todo
  const addTodo = () => {
    // Prevent adding empty todo
    if (input.trim() === "") return;

    // Create new todo object
    const newTodo = {
      id: Date.now(), // unique id
      text: input,
      completed: false,
    };

    // Add new todo to existing array
    setTodos([...todos, newTodo]);

    // Clear input field after adding
    setInput("");
  };
  // Delete Todo
  const deleteTodo = (id) => {
    // Filter out the clicked todo
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    setTodos(updatedTodos);
  };

  // Toggle Complete(strikes the completed todo)
  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, completed: !todo.completed } // flip true/false
        : todo,
    );

    setTodos(updatedTodos);
  };

  return (
    <div>
      <h2>Mini Todo App</h2>

      {/* Controlled input */}
      <input
        type="text"
        placeholder="Enter task..."
        value={input} // input state controls this field
        onChange={(e) => setInput(e.target.value)} //updates state when typing
      />

      {/* Button to add todo */}
      <button onClick={addTodo}>Add</button>

      <hr />

      {/* If no todos */}
      {todos.length === 0 && <p>No tasks yet...</p>}

      {/* Render todos */}
      {todos.map((todo) => (
        <div key={todo.id} style={{ marginBottom: "10px" }}>

          {/* Clicking text toggles completion*/}

          <span
            onClick={() => toggleComplete(todo.id)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
              marginRight: "10px",
            }}
          >
            {todo.text}
          </span>
          {/* Delete button */}
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TodoApp;
