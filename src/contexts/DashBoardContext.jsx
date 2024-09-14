import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
import { useAxiosFetch, apiRequest } from "../hooks/UseAxiosFetch";
import axios from "axios";

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
  // const navigate = useNavigate()
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
 const [isSignedIn,setIsSignedIn] = useState(sessionStorage.getItem("logged"));
 const [userName, setUserName] = useState(sessionStorage.getItem("user"))
 const [isSignupLoading, setIsSignupLoading] = useState(false);
 const [isLoginLoading, setIsLoginLoading] = useState(false);



 const Login = async() => {
  const signupFormData = {
    email:loginEmail,
    password:loginPassword
  }

  setIsLoginLoading(true)
    try {
      const response =await axios.post("http://localhost:4501/login",signupFormData)
      const signUpData = await response.data

      
      
      
      if (signUpData.success) {
        sessionStorage.setItem("auth-token",signUpData.token);
        sessionStorage.setItem("logged",signUpData.success)
        sessionStorage.setItem("user",signUpData.user.name)
        setIsSignedIn(signUpData.success)
        window.location.replace("layout/dashboard")
        setUserName(signUpData.user.name)
        
      }  else {
      
        setLoginErrors(signUpData.errors);
        setTimeout(() => {
          setLoginErrors("")

        }, 3000);
        
      }
    } catch (error) {
    
      setLoginErrors(error.message);
      
      setTimeout(() => {
        setLoginErrors("")

      }, 3000)
      
    } finally {
      
      setIsLoginLoading(false)
    }
 }

 
 

 const Signup = async () => {
  const signupFormData = {
    name:name,
    surname:surname,
    email:signupEmail,
    password:signupPassword
  }
  setIsSignupLoading(true)
  if (name === "" || signupEmail === "" || signupPassword === "" || surname === "") {
    setIsSignupLoading(false)
    return;
  }
    try {
      const response =await axios.post("http://localhost:4501/signup",signupFormData)
      const signUpData = await response.data
      console.log(signUpData.errors);
      

      if (signUpData.success) {
        sessionStorage.setItem("auth-token",signUpData.token);
        setName("")
      setSurname("")
      setSignupEmail("")
      setSignupPassword("")
        setState("login");
      } 
    } catch (error) {
      console.log(error);
      
      setSignupErrors(error.response.data.errors);

      setTimeout(() => {
        setSignupErrors("")
      }, 3000);
      
    } finally{
      
      setIsSignupLoading(false)
    }
 }


 // forgot password logic
const [emailOtp, setEmailOtp] = useState()

 const handleForgotPassword = async(Email)=>{
  // const signupFormData = {
  //   email:signupEmail,
  // }
  if (loginEmail === "") {
    setLoginErrors("Please enter your registered email below")
    setTimeout(() => {
      setLoginErrors("")
    }, 3000);
    return;
  }

    // API CALL
    try {
      const res =await axios.post("http://localhost:4501/login", loginEmail)
      const signUpData = await res.data

      // const compData = signUpData.map(({email})=> email)

      console.log(signUpData);
      const /* {data,status} */ response =await axios.get("http://localhost:4501/generateOTP")

      


      console.log(response.data.code);
      console.log(response.status);
      console.log(loginEmail);
      // console.log(response.config.email);
      // console.log(signupFormData);
      console.log(response);
      
      
      
      

      if (response.status === 201 && loginEmail === response.config.email) {
        console.log("Good");
        // let {data:{email}} =await Login({Email})
        
        let text = `Your Password Recovery OTP is  ${response.data.code}. Verify and recover your password`;
        await axios.post("http://localhost:4501/sendOtp", {name,email,text,subject:"Password Recovery OTP"})
        setState("otp")
      }

      return Promise.resolve(code);


    } catch (error) {
      console.log(error);
      
    }
    
 }

 const handleOtpSubmit = (otp)=> {




    console.log("Login successful",otp);
    
 }




// const logOut = ()=>{
//   sessionStorage.removeItem("logged")
//   window.location.replace("/")
//   setState("login")
// }


 
  

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
        loginErrors,
        userName,
        handleForgotPassword,
        handleOtpSubmit,
        isSignupLoading,
        isLoginLoading
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
