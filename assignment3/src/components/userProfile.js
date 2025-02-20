import React, { useContext } from "react";
import { UserCredContext } from "../ContextApi/userCredContext";

export const UserProfile = () => {
  const { name, password, setIsLoggedIn, setName, setPassword } =
    useContext(UserCredContext);

  const logout = () => {
    setIsLoggedIn(false);
    setName("");
    setPassword("");
  };
  return (
    <>
      <h2>User Profile Page</h2>
      <p>Name: {name}</p>
      <p>Password: {password}</p>
      <button onClick={logout}>Logout</button>
    </>
  );
};
