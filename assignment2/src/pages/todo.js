import React, { useState } from "react";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState("");

  const addTodoToList = () => {
    setTodoList([...todoList, input]);
    setInput("");
  };

  // ************** slower because itrate over all the elements
  // const removeTodo = (index) => {
  //   setTodoList(todoList.filter((item, i) => i !== index));
  // };

  //************/ a good approch but not best (bruthforce approach)
  // const removeTodo = (index) => {
  //   setTodoList((prevList) => {
  //     const newList = [...prevList];

  //     for (let i = index; i < newList.length - 1; i++) {
  //       newList[i] = newList[i + 1];
  //     }

  //     newList.pop();
  //     return newList;
  //   });
  // };

  //**********/ best approach

  // Instead of manually shifting each item like a for loop, .splice() uses internal memory optimizations to move elements efficiently.
  // The engine may use bulk memory operations (memmove or memcpy in C++), which are much faster than manual iteration.
  const removeTodo = (index) => {
    setTodoList((prevList) => {
      const newList = [...prevList];
      newList.splice(index, 1);
      return newList;
    });
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
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
