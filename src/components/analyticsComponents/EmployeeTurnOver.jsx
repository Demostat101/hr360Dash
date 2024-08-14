
import EmployeeTurnOverGraph from './EmployeeTurnOverGraph';



const EmployeeTurnOver= () => {
  return (
    <div className='w-[686.85px] h-[277.7px] shadow-md rounded-lg p-[15px] bg-white flex flex-col justify-between'>
      <div className='w-full h-[43.15px] flex justify-between place-items-center'>
        <span className='font-[600] text-[16.27px] leading-[24.41px] text-black opacity-80'>Employee Turn Over Rate</span>
        <div className='bg-white h-full border-[1.16px] border-[#ECEEF6] px-[13.86px] py-[6.35px] rounded-lg cursor-pointer'>
            <select className='bg-white focus:outline-none cursor-pointer' name="" id="">
                <option value="">ALL</option>
                <option value="">Finance</option>
                <option value="">HR</option>
                <option value="">IT</option>
            </select>
        </div>
      </div>
        {/* Graph */}
        <div className='w-full px-[20px]'>
            <div className='w-full h-[100px] '>
                <EmployeeTurnOverGraph/>
            </div>
        </div>
    </div>
  )
}

export default EmployeeTurnOver;
