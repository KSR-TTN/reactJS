import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const decrement = () => {
    if (counter === 0) alert("counter can't be negative -ve");
    else {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <div>
        <h2> {counter}</h2>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            decrement();
          }}
        >
          -1
        </button>
      </div>
    </>
  );
};
export default Counter;

// for learning purpose

// const increament = async () => {
//   await setCounter(counter + 1);
//   await setCounter(counter + 1);
//   await setCounter(counter + 1);
// };
// setCounter is async bit it does not return any promise
// const increament = () => {
//   setCounter((prev) => prev + 1);
//   setCounter((prev) => prev + 1);
//   setCounter((prev) => prev + 1);
// };
