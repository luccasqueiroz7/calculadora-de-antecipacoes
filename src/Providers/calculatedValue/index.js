import { createContext, useState } from "react";

export const CalculatedValueContext = createContext({});

export const CalculatedValueProvider = ({ children }) => {
  const [calculatedValue, setCalculatedValue] = useState({});

  return (
    <CalculatedValueContext.Provider
      value={{ calculatedValue, setCalculatedValue }}
    >
      {children}
    </CalculatedValueContext.Provider>
  );
};
