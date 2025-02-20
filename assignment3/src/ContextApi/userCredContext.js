import { Children, createContext, useState } from "react";

export const UserCredContext = createContext();

export const UserCredProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <UserCredContext
      value={{
        isLoggedIn,
        name,
        password,
        setName,
        setPassword,
        setIsLoggedIn,
      }}
    >
      {children}
    </UserCredContext>
  );
};
