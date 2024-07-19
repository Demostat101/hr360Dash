import { createContext, useContext, useState } from "react";
import useLocalStorage from "use-local-storage";

export const dashBoardContext = createContext();

export const Context = () => {
  return useContext(dashBoardContext);
};

export const ContextProvider = ({ children }) => {
  const [open, setOpen] = useLocalStorage(false);
  const [name, setName] = useState("Esther");
  // const [menu, setMenu] = useState(false);

  // const handleMenuChange = () => {
  //   setMenu((m) => !m);
  // };

  const handleOpenBar = () => {
    const close = !open;
    setOpen(close);
  };

  return (
    <dashBoardContext.Provider value={{ handleOpenBar, open, name/* ,menu,handleMenuChange */ }}>
      {children}
    </dashBoardContext.Provider>
  );
};
