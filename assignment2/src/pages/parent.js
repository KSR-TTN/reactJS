import React, { useState } from "react";

const Parent = () => {
  const [message, setMessage] = useState("Initial msg 😎");

  const handleChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  return (
    <>
      <div>{message}</div>
      <input
        type="text"
        placeholder="write here to change message"
        onChange={handleChange}
      />
    </>
  );
};
export default Parent;
