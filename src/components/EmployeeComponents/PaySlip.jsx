import React from 'react'
import { Context } from '../../DashBoardContext'

const PaySlip = () => {
  const {open} = Context()
  return (
    <>
      <div className={open ? "w-full h-[170px] border-[1.86px] border-[#ECEEF6] bg-white p-[20px] shadow-lg rounded-xl" : "w-full h-[186.53px] border-[1.96px] border-[#ECEEF6] bg-white p-[20px] shadow-lg rounded-xl"}>
      <div className={open ? "w-[727px] h-[122px] justify-between flex" : "w-[797.71px] h-[133.87px] justify-between flex"}>
        {/* box 1 */}
          <div className={open ? "w-[192px] h-[122px] flex flex-col gap-[25px]" : "w-[209.95px] h-[132.86px] flex flex-col gap-[27.43px]"}>
            <div className='w-full flex justify-between'>
              <span className={open ? "font-[400] text-[16px] leading-[24px] text-black opacity-70" :  "font-[400] text-[17.56px] leading-[26.33px] text-black opacity-70"}>Employee ID:</span>
              <span className={open ? "font-[400] text-[16px] leading-[24px] text-black opacity-80" : "font-[400] text-[17.56px] leading-[26.33px] text-black opacity-80"}>009120</span>
            </div>
            <div className='w-full flex justify-between'>
              <span className={open ? "font-[400] text-[16px] leading-[24px] text-black opacity-70" :  "font-[400] text-[17.56px] leading-[26.33px] text-black opacity-70"}>Pay Cycle:</span>
              <span className={open ? "font-[400] text-[16px] leading-[24px] text-black opacity-80" : "font-[400] text-[17.56px] leading-[26.33px] text-black opacity-80"}>Monthly</span>
            </div>
            <div className='w-full flex justify-between'>
              <span className={open ? "font-[400] text-[16px] leading-[24px] text-black opacity-70" :  "font-[400] text-[17.56px] leading-[26.33px] text-black opacity-70"}>Date Issued:</span>
              <span className={open ? "font-[400] text-[16px] leading-[24px] text-black opacity-80" : "font-[400] text-[17.56px] leading-[26.33px] text-black opacity-80"}>May 2019</span>
            </div>
            
          </div>
        {/* box 2 */}
          <div className={open ? "w-[228px] h-[122px] flex flex-col gap-[25px]" : "w-[249.95px] h-[132.86px] flex flex-col gap-[27.43px]"}>
          <div className='w-full flex justify-between'>
              <span className={open ? "font-[400] text-[16px] leading-[24px] text-black opacity-70" :  "font-[400] text-[17.56px] leading-[26.33px] text-black opacity-70"}>Bank Account:</span>
              <span className={open ? "font-[400] text-[16px] leading-[24px] text-black opacity-80" : "font-[400] text-[17.56px] leading-[26.33px] text-black opacity-80"}>0091204647</span>
            </div>
            <div className='w-full flex justify-between'>
              <span className={open ? "font-[400] text-[16px] leading-[24px] text-black opacity-70" :  "font-[400] text-[17.56px] leading-[26.33px] text-black opacity-70"}>Bank Name:</span>
              <span className={open ? "font-[400] text-[16px] leading-[24px] text-black opacity-80" : "font-[400] text-[17.56px] leading-[26.33px] text-black opacity-80"}>Union Bank</span>
            </div>
            <div className='w-full flex justify-between'>
              <span className={open ? "font-[400] text-[16px] leading-[24px] text-black opacity-70" :  "font-[400] text-[17.56px] leading-[26.33px] text-black opacity-70"}>Days Worked:</span>
              <span className={open ? "font-[400] text-[16px] leading-[24px] text-black opacity-80" : "font-[400] text-[17.56px] leading-[26.33px] text-black opacity-80"}>22 Days</span>
            </div>
          </div>
      </div>
      
    </div>

    {/* bigger box */}
    <div className={open ? "w-full h-[480px] flex gap-[31px] mt-[10px] " : "w-full h-[526.68px] flex gap-[34.02px] mt-[10px]"}>

      {/* box 1 */}

      <div className={open ? "w-[550px] h-[480px] border-[1px] border-[#E3EFF3] bg-white shadow-lg rounded-xl" : "w-[603.49px] h-[526.68px] border-[1.1px] border-[#E3EFF3] bg-white shadow-lg rounded-xl"}>
        {/* top */}
        <div className={open ? "w-full p-[20px] font-[600] text-[16px] leading-[24px] text-black opacity-80" : "w-full p-[20px] font-[600] text-[17.56px] leading-[26.33px] text-black opacity-80"}>Earnings</div>
        <hr />

      </div>




    </div>
    </>
  )
}

export default PaySlip
