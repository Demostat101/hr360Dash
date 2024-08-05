

const Stepper = ({stepper,currentStep,isComplete}) => {

    

  return (
    <div className="w-full px-[125px]">
      <div className="w-full border-solid border-2 border-violet-500 flex justify-between relative ">{/* stepper */}
        {
            stepper.map(({name,Component}, index)=>{
                return <div className={`flex flex-col items-center ${currentStep > index + 1 || isComplete ? " complete" : ""} ${currentStep === index + 1 ? " active" : ""} `} key={index}>{/* step */}
                    <div className={("text-center w-[59.5px] h-[59.5px] rounded-full flex justify-center place-items-center mb-[20px] z-20 bg-white step-number")}>{index+1}</div>{/* step-number */}
                    <div>{name}</div>{/* step-name */}
                
                </div>
            })
        }
        <div className="progress-bar absolute top-[25%] left-0 h-1 bg-[#FFFFFF] w-full">
            <div className="progress h-full bg-[#176b87] transition 0.2s ease"></div>
        </div>
      </div>
      
    </div>
  )
}

export default Stepper
