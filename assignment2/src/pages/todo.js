import React, { useState } from "react";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState("");

  const addTodoToList = () => {
    setTodoList([...todoList, input]);
    setInput("");
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add Todo"
      />
      <button onClick={addTodoToList}>Add Todo</button>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
