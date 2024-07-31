
import { Context } from "../../DashBoardContext"
import { CiEdit } from "react-icons/ci";
import { LuSave } from "react-icons/lu";
import PersonalDetailsEdit from "./PersonalDetailsEdit";
import { useParams } from "react-router-dom";
import { useEffect } from "react";




const EmployeePage = () => {
  const {id} = useParams()
  const {
    open, 
    data, 
    editPersonalDetailsButton, 
    setEditPersonalDetailsButton,
    setEditName,
    setEditGender,
    setEditPhone,
    setEditEmail,
    setEditDateOfBirth,
    setEditMaritalStatus,
    setEditReligion,
    setEditAddress,
    setEditEducation,
    setEditNationality,
    setEditLanguage,
    setEditEmergencyContact,
    handleEdit
  } = Context();
  const employeeFilter = data.filter((employee) => employee.id.toString() === id);

   const handleEditButton = ()=>{
    setEditPersonalDetailsButton(true)
   }

   const post = data.find((post) => post.id.toString() === id);

   useEffect(() => {
     if (post) {
      setEditName(post.name)
      setEditGender(post.gender)
      setEditPhone(post.phone)
      setEditEmail(post.email)
      setEditDateOfBirth(post.dob)
      setEditMaritalStatus(post.maritalStatus)
      setEditReligion(post.Religion)
      setEditAddress(post.address)
      setEditEducation(post.education)
      setEditNationality(post.Nationality)
      setEditLanguage(post.language)
      setEditEmergencyContact(post.emergencyContact)
      
     }
   }, [post, setEditName, setEditGender, setEditPhone,setEditEmail,setEditDateOfBirth,setEditMaritalStatus,setEditReligion,setEditAddress,setEditEducation,setEditNationality,setEditLanguage,setEditEmergencyContact ]);


  return (
    <div className={open ? "w-full h-[395.18px] border-[1.75px] border-[#ECEEF6] shadow-md bg-white" : "w-full h-[434.73px] border-[1.92px] border-[#ECEEF6] shadow-md bg-white"}>
      <div className={open ? "w-full h-[64px] border-[1.75px] border-[#ECEEF6] flex justify-between place-items-center p-[20px]" : "w-full h-[70.41px] border-[1.92px] border-[#ECEEF6] flex justify-between place-items-center p-[20px]"}>
        <div className={open ? "font-[500] text-[16px] leading-[24px]" : "font-[500] text-[17.6px] leading-[26.4px]"}>Personal Details</div>

        {!editPersonalDetailsButton ? <div onClick={ handleEditButton} className={open ? "w-[95px] h-[24px] flex gap-[10px] justify-end place-items-center cursor-pointer" : "w-[104.51px] h-[26.4px] flex gap-[11px] justify-end place-items-center cursor-pointer"}> <span  className={open ? "text-[16px] leading-[24px] font-[400]" : "text-[17.6px] leading-[24px] font-[400]"}>Edit info</span> <CiEdit size={22}/></div> : <div onClick={() => handleEdit(post.id)} className={open ? "w-[95px] h-[24px] flex gap-[10px] place-items-center justify-end cursor-pointer" : "w-[104.51px] h-[26.4px] flex gap-[11px] place-items-center justify-end cursor-pointer"}> <span>Save</span> <LuSave size={22}/></div> }
      </div>
      <hr />

      <div className="w-full p-[20px]">

        {
          !editPersonalDetailsButton 

          ? (
            <div>
              {
                employeeFilter.map((employee)=>{
                  return <div key={employee.id} className={open ? "w-full h-[296.68px] flex justify-between gap-[30px]" :"w-full h-[326.37px] flex justify-between gap-[30px]"}>

                  <div className={open ? "w-[211.69px] h-[269.52px] flex flex-col  gap-[18.07px] border-solid border-2 border-red-500" : "w-[232.88px] h-[293.28px] flex flex-col  gap-[19.88px] border-solid border-2 border-red-500"}>
        
                    <div className="w-full ">
                        <span className={open ? "font-[400] text-[16px] leading-[24px] text-black opacity-60" : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"}>Full Name</span>
                        <div className={open ? "font-[500] text-[16px] leading-[24px]" : "font-[500] text-[17.6px] leading-[26.4px]"}>{employee.name}</div>
                    </div>
        
                    <div className="w-full">
                        <span className={open ? "font-[400] text-[16px] leading-[24px] text-black opacity-60" : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"}>Gender</span>
                        <div className={open ? "font-[500] text-[16px] leading-[24px]" : "font-[500] text-[17.6px] leading-[26.4px]"}>{employee.gender}</div>
                    </div>
        
                    <div className="w-full">
                        <span className={open ? "font-[400] text-[16px] leading-[24px] text-black opacity-60" : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"}>Phone No</span>
                        <div className={open ? "font-[500] text-[16px] leading-[24px]" : "font-[500] text-[17.6px] leading-[26.4px]"}>{employee.phone}</div>
                    </div>
        
                    <div className="w-full">
                        <span className={open ? "font-[400] text-[16px] leading-[24px] text-black opacity-60" : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"}>Email</span>
                        <div className={open ? "font-[500] text-[16px] leading-[24px]" : "font-[500] text-[17.6px] leading-[26.4px]"}>{employee.email}</div>
                    </div>
        
                  </div>
        
                  <div className={open ? "w-[224.18px] h-[292.35px] flex flex-col  gap-[18.07px] border-solid border-2 border-red-500" : "w-[246.61px] h-[318px] flex flex-col  gap-[19.88px] border-solid border-2 border-red-500"}>
        
                    <div className="w-full ">
                        <span className={open ? "font-[400] text-[16px] leading-[24px] text-black opacity-60" : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"}>Date of Birth</span>
                        <div className={open ? "font-[500] text-[16px] leading-[24px]" : "font-[500] text-[17.6px] leading-[26.4px]"}>{employee.dob}</div>
                    </div>
        
                    <div className="w-full">
                        <span className={open ? "font-[400] text-[16px] leading-[24px] text-black opacity-60" : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"}>Marital Status</span>
                        <div className={open ? "font-[500] text-[16px] leading-[24px]" : "font-[500] text-[17.6px] leading-[26.4px]"}>{employee.maritalStatus}</div>
                    </div>
        
                    <div className="w-full">
                        <span className={open ? "font-[400] text-[16px] leading-[24px] text-black opacity-60" : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"}>Religion</span>
                        <div className={open ? "font-[500] text-[16px] leading-[24px]" : "font-[500] text-[17.6px] leading-[26.4px]"}>{employee.Religion}</div>
                    </div>
        
                    <div className="w-full">
                        <span className={open ? "font-[400] text-[16px] leading-[24px] text-black opacity-60" : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"}>Address</span>
                        <address className={open ? "font-[500] text-[16px] leading-[24px]" : "font-[500] text-[17.6px] leading-[26.4px]"}>{employee.address}</address>
                    </div>
        
                  </div>
        
                  <div className={open ? "w-[267.26px] h-[269.52px] flex flex-col  gap-[18.07px] border-solid border-2 border-red-500" : "w-[294.01px] h-[293.28px] flex flex-col  gap-[19.88px] border-solid border-2 border-red-500"}>
        
                    <div className="w-full ">
                        <span className={open ? "font-[400] text-[16px] leading-[24px] text-black opacity-60" : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"}>Education</span>
                        <div className={open ? "font-[500] text-[16px] leading-[24px]" : "font-[500] text-[17.6px] leading-[26.4px]"}>{employee.education}</div>
                    </div>
        
                    <div className="w-full">
                        <span className={open ? "font-[400] text-[16px] leading-[24px] text-black opacity-60" : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"}>Nationality</span>
                        <div className={open ? "font-[500] text-[16px] leading-[24px]" : "font-[500] text-[17.6px] leading-[26.4px]"}>{employee.Nationality}</div>
                    </div>
        
                    <div className="w-full">
                        <span className={open ? "font-[400] text-[16px] leading-[24px] text-black opacity-60" : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"}>Language Spoken</span>
                        <div className={open ? "font-[500] text-[16px] leading-[24px]" : "font-[500] text-[17.6px] leading-[26.4px]"}>{employee.language}</div>
                    </div>
        
                    <div className="w-full">
                        <span className={open ? "font-[400] text-[16px] leading-[24px] text-black opacity-60" : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"}>Emergency Contact</span>
                        <div className={open ? "font-[500] text-[16px] leading-[24px]" : "font-[500] text-[17.6px] leading-[26.4px]"}>{employee.emergencyContact}</div>
                    </div>
        
                  </div>
        
                </div>
                })
              }
            </div>
          ) 

          : (
            <PersonalDetailsEdit/>
          )

        }


      </div>
        


    </div>
  )
}

export default EmployeePage
