/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, ReactNode, useContext } from "react";

interface BooleanContextType {
  booleanValue: boolean;
  toggleBooleanValue: () => void;
  setBooleanValue: React.Dispatch<React.SetStateAction<boolean>>;
}

const BooleanContext = createContext<BooleanContextType | undefined>(undefined);

interface BooleanProviderProps {
  children: ReactNode;
}

const BooleanProvider: React.FC<BooleanProviderProps> = ({ children }) => {
  const [booleanValue, setBooleanValue] = useState<boolean>(false);

  const toggleBooleanValue = () => {
    setBooleanValue((prevValue) => !prevValue);
  };

  return (
    <BooleanContext.Provider
      value={{ booleanValue, toggleBooleanValue, setBooleanValue }}
    >
      {children}
    </BooleanContext.Provider>
  );
};

const useBooleanContext = () => {
  const context = useContext(BooleanContext);
  if (!context) {
    throw new Error(
      "useBooleanContext debe ser usado dentro de un BooleanProvider"
    );
  }
  return context;
};

export { BooleanProvider, useBooleanContext };
