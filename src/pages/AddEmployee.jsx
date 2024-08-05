import React from "react";
import { Outlet } from "react-router-dom";
import Stepper from "../components/addEmployeeComponents/Stepper";
import { useState } from "react"
import PersonalDetails from "../components/addEmployeeComponents/PersonalDetails";
import OfficialDetails from "../components/addEmployeeComponents/OfficialDetails";
import BankDetails from "../components/addEmployeeComponents/BankDetails";


const AddEmployee = () => {


  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false)
    

    const stepper = [
        {
            name:"Personal details",
            Component: ()=> <PersonalDetails/>
        },
        {
            name:"Official details",
            Component: ()=> <OfficialDetails/>
        },
        {
            name:"Bank details",
            Component: ()=> <BankDetails/>
        },
    ]
    const handlePrevButton = ()=>{
      setCurrentStep(prevStep => prevStep - 1)
    }
    const handleNextButton = ()=>{
      setCurrentStep(prevStep => {
        if (prevStep === stepper.length) {
          setIsComplete(true)
          
        } else {
          return prevStep + 1
        }
      })
    }

    const ActiveComponent = stepper[currentStep - 1]?.Component;

  return <main className="w-full p-[20px] border-solid border-2 border-red-500" >
    <div>
      <div className="font-[600] text-[20px] leading-[30px]">Add New Employee</div>
      <div className="font-[500] text-[16px] leading-[24px] text-black opacity-60">Please enter the employee details below</div>
    </div>
    <div className="w-full  px-[85px]">
      <div className=" border-solid border-2 border-yellow-500 flex flex-col place-items-center">
        <Stepper stepper = {stepper} currentStep={currentStep} isComplete={isComplete}/>
      </div>
        <div className="px-[65px]"><ActiveComponent/></div>
        <div className="flex justify-between px-[65px]">
          <button>Cancel</button>
          <div>{currentStep > 1 ? <div className="flex gap-[10px]"> <button onClick={handlePrevButton}>Previous</button> <div> {currentStep === stepper.length ? <button>Submit</button> : <button onClick={handleNextButton}>Next</button> }</div> </div> : <button onClick={handleNextButton}>Next</button> }</div> 
      </div>
    </div>
  </main>;
};

export default AddEmployee;
