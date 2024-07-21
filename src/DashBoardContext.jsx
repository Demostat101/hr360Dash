import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
import useAxiosFetch from "./useAxiosFetch/UseAxiosFetch";


export const dashBoardContext = createContext();

export const Context = () => {
  return useContext(dashBoardContext);
};

export const ContextProvider = ({ children }) => {
  const { data, fetchError, isLoading } = useAxiosFetch(`http://localhost:4000/data`)
  const [open, setOpen] = useLocalStorage(false);
  const [name, setName] = useState("Esther");

  // const [apiData, setApiData] = useState([]);
  // const [menu, setMenu] = useState(false);

  // const handleMenuChange = () => {
  //   setMenu((m) => !m);
  // };

console.log(data);
  const handleOpenBar = () => {
    const close = !open;
    setOpen(close);
  };

  return (
    <dashBoardContext.Provider value={{ handleOpenBar, open, name , data, fetchError, isLoading/* ,menu,handleMenuChange */ }}>
      {children}
    </dashBoardContext.Provider>
  );
};
