import React, { createContext, useState } from "react";

export const CountContext = createContext();
export const SetCountContext = createContext();

const [count, setCount] = useState(0);

export const CountProvider = ({ children }) => {
  return (
    <CountContext.Provider value={count}>{children}</CountContext.Provider>
  );
};

export const SetCountProvider = ({ children }) => {
  return (
    <SetCountContext.Provider value={setCount}>
      {children}
    </SetCountContext.Provider>
  );
};
