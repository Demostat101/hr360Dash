import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
import  { apiRequest, useAxiosFetch } from "./useAxiosFetch/UseAxiosFetch";


export const dashBoardContext = createContext();

export const Context = () => {
  return useContext(dashBoardContext);
};

export const ContextProvider = ({ children }) => {
  const API_URL = "http://localhost:4000/data";
  // const [activeData, setActiveData] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const { data, fetchError, isLoading,setData } = useAxiosFetch(`http://localhost:4000/data`)
  const [open, setOpen] = useLocalStorage(false);
  const [name, setName] = useState("Esther");

  const restApi = async () => {
    try {
      const data = await fetch(API_URL);
      if (!data.ok) {
        throw new Error("Did not receive the correct data");
      } 
      const response = await data.json();
      setActiveData(response);
      setError(null);

      return response;
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    restApi();
  }, []);
    
  const handleOpenBar = () => {
    const close = !open;
    setOpen(close);
  };

  // console.log(activeData);
  

// data.map((val)=> console.log(val.active))
const handleCheckBox = async (id) => {
  const toggleCheckBox = data.map((item) =>
    (item.id) === id ? { ...item, active: !item.active } : item
  );

  setData(toggleCheckBox);

  //to update task

  const myItem = toggleCheckBox.filter((item) => (item.id) === id);

  const updateOptions = {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ active: myItem[0].active }),
  };

  const reqUrl = `${API_URL}/${id}`;
  const result = await apiRequest(reqUrl, updateOptions);
  if (result) {
    setError(result);
  }
};


  return (
    <dashBoardContext.Provider value={{ handleOpenBar, open, name , data, fetchError, isLoading, search, setSearch, handleCheckBox}}>
      {children}
    </dashBoardContext.Provider>
  );
};
