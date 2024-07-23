import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
import useAxiosFetch from "./useAxiosFetch/UseAxiosFetch";


export const dashBoardContext = createContext();

export const Context = () => {
  return useContext(dashBoardContext);
};

export const ContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const { data, fetchError, isLoading } = useAxiosFetch(`http://localhost:4000/data`)
  const [open, setOpen] = useLocalStorage(false);
  const [name, setName] = useState("Esther");
    
  const employeeData = data.filter((employee) => (employee.name.toLowerCase().includes(search.toLowerCase()) || employee.empID.toString().includes(search.toString())));
 

console.log(data);
  const handleOpenBar = () => {
    const close = !open;
    setOpen(close);
  };

  return (
    <dashBoardContext.Provider value={{ handleOpenBar, open, name , data, fetchError, isLoading, employeeData, search, setSearch }}>
      {children}
    </dashBoardContext.Provider>
  );
};
