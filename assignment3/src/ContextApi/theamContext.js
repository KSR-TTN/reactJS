import { createContext, useState } from "react";

export const TheamContext = createContext();

export const TheamProvider = ({ children }) => {
  const [theam, setTheam] = useState("light");

  const toggleTheam = () => {
    if (theam === "light") setTheam("dark");
    else {
      setTheam("light");
    }
  };

  return (
    <TheamContext.Provider value={{ theam, toggleTheam }}>
      {children}
    </TheamContext.Provider>
  );
};
