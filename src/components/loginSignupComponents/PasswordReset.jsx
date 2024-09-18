import { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";


const PasswordReset = () => {

    let PassWordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#?!@$%^&*-.]).{8,}$/
    const [validPwd, setValidPwd] = useState(false);
  const [passwordFocus, setPassWordFocus] = useState(false)
  const [resetPassword, setResetPassword] = useState("")
  const [visible, setVisible] = useState(false);

  useEffect(()=>{
    const result = PassWordRegex.test(resetPassword);
    console.log(result);
    console.log(resetPassword);
    setValidPwd(result)
  },[resetPassword])

  
  const handleChangeVisibility = () => {
    setVisible((prev) => !prev);
  };


  return (
    <>

<form
        className="w-full flex flex-col place-items-center"
          action=""
          onSubmit={(e) => e.preventDefault()}
        >
    
              
           <div className="w-[80%] flex flex-col gap-[20px]">
           <div className="flex flex-col gap-[10px] w-full">
              <label
                className="font-[700] text-[20px] leading-[24px] text-[#464646]"
                htmlFor="loginpassword"
              >
                Password Reset
              </label>
              <div className="border-2 rounded-[10px] flex place-items-center pr-[20px] gap-[10px] bg-white">
                <input
                  id="loginpassword"
                  autoComplete="off"
                  value={resetPassword}
                  onChange={(e) => setResetPassword(e.target.value)}
                  className="h-[50px] bg-white rounded-[10px] pl-[20px] focus:outline-none  w-full"
                  type={visible ? "text" : "password"}
                  placeholder="Enter your password"
                  onFocus={() => setPassWordFocus(true)}
                  onBlur={() => setPassWordFocus(false)}
                  aria-invalid={validPwd ? "false" : "true"}
                  required
                />
                <div onClick={handleChangeVisibility} className=" cursor-pointer text-[#176B87]">{visible ? <FaRegEye size={24}/>  : <FaRegEyeSlash size={24}/>}</div>
              </div>
              <p className={!validPwd && passwordFocus ? "text-wrap text-red-500" : "hidden"}>Atleast 8 characters. Must include uppercase and lowercase letters, a number and a special character(#?!@$%^&*-.)</p>
            </div>
          
          <button
            className={!validPwd ? " w-full h-[50px] bg-[#176B87] font-[600] text-[18px] leading-[36px] text-white rounded-[10px] opacity-30 flex justify-center place-items-center" : "w-full h-[50px] bg-[#176B87] font-[600] text-[18px] leading-[36px] text-white rounded-[10px] flex justify-center place-items-center"}
            disabled={!validPwd}
          >
           Continue {/* {!isSignupLoading ?"Continue": <div className="isSignupLoader"></div> } */}
          </button>
           </div>
        </form>
      
    </>
  )
}

export default PasswordReset
