import { useState } from "react";
import { Context } from "../../DashBoardContext"
import { CiEdit } from "react-icons/ci";
import { LuSave } from "react-icons/lu";




const EmployeePage = () => {
  const [editButton, setEditButton] = useState(false)
  const {open} = Context();
  return (
    <div className={open ? "w-full h-[395.18px] border-[1.75px] border-[#ECEEF6] shadow-md bg-white" : "w-full h-[434.73px] border-[1.92px] border-[#ECEEF6] shadow-md bg-white"}>
      <div className={open ? "w-full h-[64px] border-[1.75px] border-[#ECEEF6] flex justify-between place-items-center" : "w-full h-[70.41px] border-[1.92px] border-[#ECEEF6] flex justify-between place-items-center"}>
        <div className={open ? "font-[500] text-[16px] leading-[24px]" : "font-[500] text-[17.6px] leading-[26.4px]"}>Personal Details</div>

        {!editButton ? <div className={open ? "w-[95px] h-[24px] flex gap-[10px] justify-end place-items-center" : "w-[104.51px] h-[26.4px] flex gap-[11px] justify-end place-items-center"}> <span>Edit</span> <CiEdit size={24}/></div> : <div className={open ? "w-[95px] h-[24px] flex gap-[10px] place-items-center justify-end" : "w-[104.51px] h-[26.4px] flex gap-[11px] place-items-center justify-end"}> <span>Save</span> <LuSave size={24}/></div> }
      </div>
      <hr />
    </div>
  )
}

export default EmployeePage
