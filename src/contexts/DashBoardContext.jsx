import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
import { useAxiosFetch, apiRequest } from "../hooks/UseAxiosFetch";
// import useSessionStorageState from "use-session-storage-state";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate()
  // const [name, setName] = useState("Esther");
  const { data, fetchError, isLoading, setData } = useAxiosFetch(
    `http://localhost:4000/data`
  );

  const handleOpenBar = () => {
    const close = !open;
    setOpen(close);
  };

  const handleCheckBox = async (id) => {
    const toggleCheckBox = data.map((item) =>
      item.id.toString() === id.toString()
        ? { ...item, active: !item.active }
        : item
    );

    setData(toggleCheckBox);

    //to update Status

    const myItem = toggleCheckBox.filter(
      (item) => item.id.toString() === id.toString()
    );

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


 // LOGIN AND SIGNUP PAGE LOGIC

 const [state,setState] = useState("login");
 const [loginEmail,setLoginEmail] = useState("")
 const [loginPassword, setLoginPassword] = useState("")
 const [signupEmail,setSignupEmail] = useState("")
 const [signupPassword, setSignupPassword] = useState("")
 const [name, setName] = useState("")
 const [surname, setSurname] = useState("")
 const [signupErrors,setSignupErrors] = useState("") 
 const [loginErrors,setLoginErrors] = useState("") 
 const [isSignedIn,setIsSignedIn] = useState(false);

 const Login = async() => {
  const signupFormData = {
    email:loginEmail,
    password:loginPassword
  }
    try {
      const response =await axios.post("http://localhost:4501/login",signupFormData)
      const signUpData = await response.data
      if (signUpData.success) {
        sessionStorage.setItem("auth-token",signUpData.token);
        setIsSignedIn(true)
        navigate("layout/dashboard")
      } 
    } catch (error) {
    
      setLoginErrors(error.response.data.errors);

      setTimeout(() => {
        setLoginErrors("")
      }, 5000);
      
    }
 }


 const Signup = async () => {
  const signupFormData = {
    name:name,
    surname:surname,
    email:signupEmail,
    password:signupPassword
  }
    try {
      const response =await axios.post("http://localhost:4501/signup",signupFormData)
      const signUpData = await response.data
      console.log(signUpData.errors);
      

      if (signUpData.success) {
        sessionStorage.setItem("auth-token",signUpData.token);
        setState("login");
      } 
    } catch (error) {
    
      setSignupErrors(error.response.data.errors);

      setTimeout(() => {
        setSignupErrors("")
      }, 5000);
      
    }
 }





 
  

  return (
    <dashBoardContext.Provider
      value={{
        handleOpenBar,
        open,
        name,
        setName,
        setSurname,
        surname,
        data,
        fetchError,
        isLoading,
        searchName,
        setSearchName,
        handleCheckBox,
        searchEmpID,
        setSearchEmpID,
        searchEmpRegion,
        setSearchEmpRegion,
        openModal,
        setOpenModal,
        
        setIsSignedIn,
        isSignedIn,
        loginEmail,
        loginPassword,
        signupEmail,
        signupPassword,
        setState,
        setLoginPassword,
        setLoginEmail,
        setSignupPassword,
        setSignupEmail,
        state,
        Signup,
        Login,
        signupErrors,
        loginErrors
      }}
    >
      {children}
    </dashBoardContext.Provider>
  );
};


  // Auth Logic

 
  // export const useAuth = () => {
  //   const context =  useContext(dashBoardContext);

  //   if (context === undefined) {
  //     throw new Error("UseAuth must be used within an Authprovider")
  //   }

  //   return context
  // }
