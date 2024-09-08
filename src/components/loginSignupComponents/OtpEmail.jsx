

import React, { useEffect, useRef, useState } from 'react'
import { Context } from '../../contexts/DashBoardContext'

const OtpEmail = () => {
    const otpLenght = 4;
    const {loginEmail,handleOtpSubmit} = Context()
    const [otp, setOtp] = useState(new Array(otpLenght).fill(""))
    const inputRefs = useRef([])

    useEffect(()=>{
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus()
        }
    },[])

    const handleChange = (index,e)=>{
        const value = e.target.value;
        if (isNaN(value)) {
            return;
        }

        const newOtp = [...otp];
        newOtp[index] = value.subString(value.length - 1);
        setOtp(newOtp)
    }

    
    const handleClick = ()=>{

    }
    const handleKeyDown = ()=>{

    }

    console.log(otp);
    


  return (
    <>
      <div className="w-[60%] h-[400px] flex flex-col justify-evenly bg-white">
              <div className="flex flex-col gap-[10px] text-center">
                <span className="font-[600] text-[30px] leading-[30px] text-[#464646]">
                  Email Verification
                </span>
                <span className="font-[400] text-[20px] leading-[30px] text-[#464646]">
                  We have sent a code to your email <span className='text-[#176B87] text-[18px] font-[500]'>{loginEmail}</span>
                </span>
                <span className="font-[600] text-[20px] leading-[30px] text-red-500">
                  {""}
                </span>
              </div>

              <form
                className="flex flex-col h-[200px] justify-between place-items-center"
                action=""
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex gap-[20px]">
                 {
                    otp.map((val,index)=>{
                        return  <div key={index}>
                    
                        <input
                          
                          className="h-[60px] w-[60px] text-center text-[18px] border-2 focus:border-[#176B87] opacity-60  bg-white rounded-[10px] focus:opacity-50"
                          type="text"
                          ref={(input)=> inputRefs.current[index]=input}
                          value={val}
                          onChange={()=>{handleChange(index,e)}}
                          onClick={()=>handleClick(index)}
                          onKeyDown={()=> handleKeyDown(index,e)}
                          required
                        />
                      </div>
                    })
                 }
                  
                 
                  

                  
                  
                </div>

                <button className='w-[80%] h-[60px] bg-[#176B87] text-white font-[600] text-[16px] rounded-[10px]' onClick={handleOtpSubmit}>Verify Account</button>

                <div className=" font-[500] text-[16px] leading-[24px] text-[#464646]">
                  <span>
                  Didn't receive code?{" "}
                    <span
                      className="text-[#176B87] font-[600] cursor-pointer border-b-2 border-[#176B87]"
                    
                    >
                      Resend OTP
                    </span>
                  </span>
            
                  </div>
               
              </form>
            </div>
    </>
  )
}

export default OtpEmail
