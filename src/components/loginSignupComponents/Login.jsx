

import React from 'react'
import { Context } from '../../contexts/DashBoardContext'

const Login = () => {
    const {loginEmail,loginPassword,setLoginPassword,setLoginEmail, loginErrors,Login,setState, handleForgotPassword} = Context()
  return (
    <>
      <div className="w-[80%] h-fit flex flex-col gap-[20px] bg-white p-[20px]">
              <div className="flex flex-col gap-[20px] text-center">
                <span className="font-[600] text-[20px] leading-[30px] text-[#464646]">
                  Welcome To HR360
                </span>
                <span className="font-[400] text-[20px] leading-[30px] text-[#464646]">
                  Please enter your email and password
                </span>
                <span className="font-[600] text-[20px] leading-[30px] text-red-500">
                  {loginErrors}
                </span>
              </div>

              <form
                className="flex flex-col h-fit gap-[50px] "
                action=""
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex flex-col gap-[20px]">
                  <div className="flex flex-col gap-[10px]">
                    <label
                      className="font-[500] text-[16px] leading-[24px] text-[#464646]"
                      htmlFor="loginemail"
                    >
                      Email
                    </label>
                    <input
                      id="loginemail"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      className="h-[60px] bg-white rounded-[10px] pl-[20px] focus:outline-none border-2"
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <label
                      className="font-[500] text-[16px] leading-[24px] text-[#464646]"
                      htmlFor="loginpassword"
                    >
                      Password
                    </label>
                    <input
                      id="loginpassword"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      className="h-[60px] bg-white rounded-[10px] pl-[20px] focus:outline-none border-2"
                      type="password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                </div>
                <div className="w-full flex flex-col gap-[20px]">
                  <button
                    className="h-[60px] bg-[#176B87] font-[600] text-[24px] leading-[36px] text-white rounded-[10px]"
                    onClick={Login}
                  >
                    Login
                  </button>
                  <div className="w-full flex justify-between font-[500] text-[16px] leading-[24px] text-[#464646]">
                  <span>
                  Dont have an account?{" "}
                    <span
                      className="text-[#176B87] font-[600] cursor-pointer"
                      onClick={() => setState("signUp")}
                    >
                      Sign up
                    </span>
                  </span>
                    <span  className='text-[#176B87] font-[600] cursor-pointer' onClick={handleForgotPassword}>Forgot password?</span>
                  </div>
                </div>
              </form>
            </div>
    </>
  )
}

export default Login
