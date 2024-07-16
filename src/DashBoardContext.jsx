import { createContext, useContext, useState } from "react";
import useLocalStorage from "use-local-storage";

export const dashBoardContext = createContext();

export const Context = () => {
  return useContext(dashBoardContext);
};

export const ContextProvider = ({ children }) => {
  const [open, setOpen] = useLocalStorage(false);
  const [name, setName] = useState("Esther");

  const handleOpenBar = () => {
    const close = !open;
    setOpen(close);
  };

  return (
    <dashBoardContext.Provider value={{ handleOpenBar, open, name }}>
      {children}
    </dashBoardContext.Provider>
  );
};
