import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
import { apiRequest, useAxiosFetch } from "./useAxiosFetch/UseAxiosFetch";


export const dashBoardContext = createContext();

export const Context = () => {
  return useContext(dashBoardContext);
};

export const ContextProvider = ({ children }) => {
  const API_URL = "http://localhost:4000/data";
  const [error, setError] = useState(null);
  const [searchName, setSearchName] = useState("");
  const [searchEmpID, setSearchEmpID] = useState("");
  const [searchEmpRegion, setSearchEmpRegion] = useState("");
  const [open, setOpen] = useLocalStorage(false);
  const [name, setName] = useState("Esther");
  const [editPersonalDetailsButton, setEditPersonalDetailsButton] = useState(false)
  const { data, fetchError, isLoading, setData } = useAxiosFetch(
    `http://localhost:4000/data`
  );

  const handleOpenBar = () => {
    const close = !open;
    setOpen(close);
  };

  const handleCheckBox = async (id) => {
    const toggleCheckBox = data.map((item) =>
      item.id === id ? { ...item, active: !item.active } : item
    );
      
    setData(toggleCheckBox);

    //to update Status

    const myItem = toggleCheckBox.filter((item) => item.id === id);

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

  // Handle Edit Personal Employee Details

  const [editName, setEditName] = useState("")
  const [editGender, setEditGender] = useState("")
  const [editPhone, setEditPhone] = useState("")
  const [editEmail, setEditEmail] = useState("")
  const [editDateOfBirth, setEditDateOfBirth] = useState("")
  const [editMaritalStatus, setEditMaritalStatus] = useState("")
  const [editReligion, setEditReligion] = useState("")
  const [editAddress, setEditAddress] = useState("")
  const [editEducation, setEditEducation] = useState("")
  const [editNationality, setEditNationality] = useState("")
  const [editLanguage, setEditLanguage] = useState("")
  const [editEmergencyContact, setEditEmergencyContact] = useState("")


  return (
    <dashBoardContext.Provider
      value={{
        handleOpenBar,
        open,
        name,
        data,
        fetchError,
        isLoading,
        searchName,
        setSearchName,
        handleCheckBox,
        searchEmpID, setSearchEmpID,
        searchEmpRegion, setSearchEmpRegion,
        editPersonalDetailsButton, setEditPersonalDetailsButton,
        editName, setEditName,
        editGender, setEditGender,
        editPhone, setEditPhone,
        editEmail, setEditEmail,
        editDateOfBirth, setEditDateOfBirth,
        editMaritalStatus, setEditMaritalStatus,
        editReligion, setEditReligion,
        editAddress, setEditAddress,
        editEducation, setEditEducation,
        editNationality, setEditNationality,
        editLanguage, setEditLanguage,
        editEmergencyContact, setEditEmergencyContact
      }}
    >
      {children}
    </dashBoardContext.Provider>
  );
};
