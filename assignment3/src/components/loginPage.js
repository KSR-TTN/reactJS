import React from "react";
import { useContext, useState } from "react";
import { UserCredContext } from "../ContextApi/userCredContext";
export const LoginPage = () => {
  const { setName, setPassword, setIsLoggedIn } = useContext(UserCredContext);
  const [formName, setFormName] = useState("");
  const [formPassword, setFormPassword] = useState("");

  const setCredentials = () => {
    setName(formName);
    setPassword(formPassword);
    setIsLoggedIn(true);
  };

  return (
    <>
      <h2>Login Page Form</h2>
      <input
        type="text"
        placeholder="Enter name here"
        onChange={(e) => setFormName(e.target.value.trim())}
      ></input>
      <input
        type="text"
        placeholder="enter password here"
        onChange={(e) => setFormPassword(e.target.value.trim())}
      ></input>

      <button onClick={setCredentials}>Login</button>
    </>
  );
};
