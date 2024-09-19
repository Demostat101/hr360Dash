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

 //get user details

 const getUser = async () => {
  

  try {
      const { data } = await axios.get(`http://localhost:4501/user/${loginEmail}`);
      console.log(data);
      
      return data; // Return data directly
  } catch (error) {
      console.error(error);
      return null; // Return null or an error object to indicate failure
  }
};




//  const getUser = async ({email}) => {
//   console.log(email);
  
//     try {
//       const {data} = await axios.get(`http://localhost:4501/user/${email}`)
//       return {data}
//     } catch (error) {
//       console.log(error);
      
//     }
//  }


 // forgot password logic
const [emailOtp, setEmailOtp] = useState()

const handleForgotPassword = async () => {
  if (!loginEmail) {
      setLoginErrors("Please enter your registered email below");
      setTimeout(() => {
          setLoginErrors("");
      }, 3000);
      return;
  }

  // API CALL
  try {
      const { data: { code }, status } = await axios.get("http://localhost:4501/generateOTP", loginEmail);
      console.log(status);
      console.log(code);
      
      

      if (status === 200 || status === 201) {
          const data = await getUser(loginEmail);
          console.log(data);
          
          console.log(data.email);
          
          const text = `Your password recovery OTP is ${code}. Verify and recover your password.`;
          await axios.post("http://localhost:4501/sendOtp", {
              name:data.name,
              email:data.email,
              text,
              subject: "Password Recovery OTP"
          });
          setState("otp")
          return code;  // Simply return code
      } else {
          setLoginErrors("Failed to generate OTP. Please try again.");
      }
  } catch (error) {
      setLoginErrors("An error occured, please check your email and try again");
      setTimeout(() => {
        setLoginErrors("");
    }, 3000);
  }
};


const [otpMessage, setOtpMessage] = useState("")


 const handleOtpSubmit = async ({loginEmail, code})=> {

      try {
        const {data, status} = await axios.get("http://localhost:4501/verifyOTP",{ params:{loginEmail, code}})

        console.log(data);
        console.log(status);

        if (status === 201) {
          setState("passwordReset")
        }

      
        

        return {data, status}
      } catch (error) {
        console.log(error);
        setOtpMessage("Wrong OTP!, confirm OTP and try again")
        setTimeout(() => {
          setOtpMessage("");
      }, 3000);
        
      }
    
 }


 // reset password

 const resetPassword = async ({name,password})=>{

      try {
        const {data, status} = await axios.put("http://localhost:4501/resetPassword",{name,password})
        return Promise.resolve({data,status})
      } catch (error) {
        console.log(error);
        
      }
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
        isLoginLoading,
        otpMessage,
        getUser
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
