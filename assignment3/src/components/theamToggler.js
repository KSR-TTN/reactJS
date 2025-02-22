import React, { useContext } from "react";
import { TheamContext } from "../ContextApi/theamContext";
export const TheamToggler = () => {
  let { theam, toggleTheam } = useContext(TheamContext);

  return (
    <>
      <div>
        <span className="theamText">Theam : {theam}</span>
        <button onClick={toggleTheam}>Toggle Theam</button>
        <p>
          theam---------------------------------------------------------------------------------------
        </p>
      </div>
    </>
  );
};
