
import React from 'react'
import { Context } from '../../contexts/DashBoardContext'

const SignUp = () => {
    const {  signupEmail,signupPassword,setSignupPassword,setSignupEmail, setState,name,setName,surname,setSurname,Signup,signupErrors} = Context()
  return (
    <>
      <div className="w-[60%] h-[750px] flex flex-col gap-5 bg-white p-[20px]">
              <div className="flex flex-col gap-[10px] text-center">
                <span className="font-[600] text-[20px] leading-[30px] text-[#464646]">
                  Welcome To HR360
                </span>
                <span className="font-[400] text-[20px] leading-[30px] text-[#464646]">
                  Please sign up for an account{" "}
                </span>
                <span className="font-[600] text-[20px] leading-[30px] text-red-500">
                  {signupErrors}
                </span>
              </div>

              <form
                className="flex flex-col h-[600px] justify-between"
                action=""
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex flex-col gap-[20px]">
                  <div className="flex flex-col gap-[10px]">
                    <label
                      className="font-[500] text-[16px] leading-[24px] text-[#464646]"
                      htmlFor="name"
                    >
                      First Name
                    </label>
                    <input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="h-[70px] bg-white rounded-[10px] pl-[20px] focus:outline-none border-2"
                      type="text"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <label
                      className="font-[500] text-[16px] leading-[24px] text-[#464646]"
                      htmlFor="surname"
                    >
                      Surname
                    </label>
                    <input
                      id="surname"
                      className="h-[70px] bg-white rounded-[10px] pl-[20px] focus:outline-none border-2"
                      type="text"
                      placeholder="Enter your surname"
                      value={surname}
                      onChange={(e) => setSurname(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <label
                      className="font-[500] text-[16px] leading-[24px] text-[#464646]"
                      htmlFor="loginemail"
                    >
                      Email
                    </label>
                    <input
                      id="loginemail"
                      value={signupEmail}
                      onChange={(e) => setSignupEmail(e.target.value)}
                      className="h-[70px] bg-white rounded-[10px] pl-[20px] focus:outline-none border-2"
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
                      value={signupPassword}
                      onChange={(e) => setSignupPassword(e.target.value)}
                      className="h-[70px] bg-white rounded-[10px] pl-[20px] focus:outline-none border-2"
                      type="password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                </div>
                <button
                  className="h-[70px] bg-[#176B87] font-[600] text-[24px] leading-[36px] text-white rounded-[10px]"
                  onClick={Signup}
                >
                  Continue
                </button>
              </form>

              <div className="font-[500] text-[16px] leading-[24px] text-[#464646]">
                Already have an account?{" "}
                <span
                  className="text-[#176B87] font-[600] cursor-pointer"
                  onClick={() => setState("login")}
                >
                  Login
                </span>
              </div>
            </div>
    </>
  )
}

export default SignUp
