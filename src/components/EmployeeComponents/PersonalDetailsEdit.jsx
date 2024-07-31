
import { Context } from '../../DashBoardContext'

const PersonalDetailsEdit = () => {
    const {
        editName, setEditName,
        editGender, setEditGender,
        editPhone, setEditPhone,
        editEmail, setEditEmail,
        editDateOfBirth, setEditDateOfBirth,
        editMaritalStatus, setEditMaritalStatus,
        editReligion, setEditReligion,
        editAddress, setEditAddress,
        editEducation, setEditEducation,
        editNationality, setEditNationality,
        editLanguage, setEditLanguage,
        editEmergencyContact, setEditEmergencyContact
    } = Context()
    

  return (
    <form onSubmit={(e)=> e.preventDefault()} className={open ? "w-full h-[296.68px] flex justify-between gap-[30px]" :"w-full h-[326.37px] flex justify-between gap-[30px]"}>

          <div className={open ? "w-[211.69px] h-[269.52px] flex flex-col  gap-[18.07px] border-solid border-2 border-red-500" : "w-[232.88px] h-[293.28px] flex flex-col  gap-[19.88px] border-solid border-2 border-red-500"}>

            <div className="w-full ">
                <label className={open ? "font-[400] text-[16px] leading-[24px] text-black opacity-60" : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"}>Full Name</label>
                <input className=' focus:outline-none' type="text"  placeholder='Full Name' value={editName} onChange={(e)=> setEditName(e.target.value)} />
            </div>

            <div className="w-full">
                <label className={open ? "font-[400] text-[16px] leading-[24px] text-black opacity-60" : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"}>Gender</label>
                <input className=' focus:outline-none' type="text" placeholder='Gender' value={editGender} onChange={(e)=> setEditGender(e.target.value)}/>
            </div>

            <div className="w-full">
                <label className={open ? "font-[400] text-[16px] leading-[24px] text-black opacity-60" : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"}>Phone No</label>
                <input className=' focus:outline-none' type="text" placeholder='Phone Number' value={editPhone} onChange={(e)=> setEditPhone(e.target.value)}/>
            </div>

            <div className="w-full">
                <label className={open ? "font-[400] text-[16px] leading-[24px] text-black opacity-60" : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"}>Email</label>
                <input className=' focus:outline-none' type="email" placeholder='Omikay@gmail.com' value={editEmail} onChange={(e)=> setEditEmail(e.target.value)}/>
            </div>

          </div>

          <div className={open ? "w-[224.18px] h-[292.35px] flex flex-col  gap-[18.07px] border-solid border-2 border-red-500" : "w-[246.61px] h-[318px] flex flex-col  gap-[19.88px] border-solid border-2 border-red-500"}>

            <div className="w-full ">
                <label className={open ? "font-[400] text-[16px] leading-[24px] text-black opacity-60" : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"}>Date of Birth</label>
                <input className=' focus:outline-none' type="text" placeholder='14th february, 2005' value={editDateOfBirth} onChange={(e)=> setEditDateOfBirth(e.target.value)}/>
            </div>

            <div className="w-full">
                <label className={open ? "font-[400] text-[16px] leading-[24px] text-black opacity-60" : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"}>Marital Status</label>
                <input className=' focus:outline-none' type="text" placeholder='marital status' value={editMaritalStatus} onChange={(e)=> setEditMaritalStatus(e.target.value)}/>
            </div>

            <div className="w-full">
                <label className={open ? "font-[400] text-[16px] leading-[24px] text-black opacity-60" : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"}>Religion</label>
                <input className=' focus:outline-none' type="text" placeholder='Religion' value={editReligion} onChange={(e)=> setEditReligion(e.target.value)}/>
            </div>

            <div className="w-full">
                <label className={open ? "font-[400] text-[16px] leading-[24px] text-black opacity-60" : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"}>Address</label>
                <input className=' focus:outline-none' type="text" placeholder='Address' value={editAddress} onChange={(e)=> setEditAddress(e.target.value)}/>
            </div>

          </div>

          <div className={open ? "w-[267.26px] h-[269.52px] flex flex-col  gap-[18.07px] border-solid border-2 border-red-500" : "w-[294.01px] h-[293.28px] flex flex-col  gap-[19.88px] border-solid border-2 border-red-500"}>

            <div className="w-full ">
                <label className={open ? "font-[400] text-[16px] leading-[24px] text-black opacity-60" : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"}>Education</label> <br />
                <input className=' focus:outline-none' type="text" placeholder='Education' value={editEducation} onChange={(e)=> setEditEducation(e.target.value)}/>
            </div>

            <div className="w-full">
                <label className={open ? "font-[400] text-[16px] leading-[24px] text-black opacity-60" : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"}>Nationality</label>
                <input className=' focus:outline-none' type="text" placeholder='Nationality' value={editNationality} onChange={(e)=> setEditNationality(e.target.value)}/>
            </div>

            <div className="w-full">
                <label className={open ? "font-[400] text-[16px] leading-[24px] text-black opacity-60" : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"}>Language Spoken</label>
                <input className=' focus:outline-none' type="text" placeholder='Language Spoken' value={editLanguage} onChange={(e)=> setEditLanguage(e.target.value)}/>
            </div>

            <div className="w-full">
                <label className={open ? "font-[400] text-[16px] leading-[24px] text-black opacity-60" : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"}>Emergency Contact</label>
                <input className=' focus:outline-none' type="text" placeholder='Emergency Contact' value={editEmergencyContact} onChange={(e)=> setEditEmergencyContact(e.target.value)}/>
            </div>

          </div>

          

        </form>

  )
}

export default PersonalDetailsEdit
