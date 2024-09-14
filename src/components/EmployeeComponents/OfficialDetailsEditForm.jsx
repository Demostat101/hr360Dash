import { useState } from "react";
import { editEmployeeContext } from "../../contexts/EditDetailsContext";

const OfficialDetailsEditForm = () => {
  const {
    open,
    editEmployeeId,
    setEditEmployeeId,
    editEmployementType,
    setEditEmployementType,
    editWorkSchedule,
    setEditWorkSchedule,
    editJobTitle,
    setEditJobTitle,
    editDepartment,
    setEditDepartment,
    editReportingOfficer,
    setEditReportingOfficer,
    editRegion,
    setEditRegion,
    editSkills,
    setEditSkills,
  } = editEmployeeContext();

  const [skills, setSkills] = useState("")
  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className={
          open
            ? "w-full h-fit flex justify-between gap-[30px]"
            : "w-full h-fit flex justify-between gap-[30px]"
        }
      >
        <div
          className={
            open
              ? " w-[161.42px] h-[200.46px] flex flex-col  gap-[18.07px]"
              : "w-[177.47px] h-[220.39px] flex flex-col  gap-[19.86px]"
          }
        >
          <div className="w-full flex flex-col gap-[5px]">
            <label
              className={
                open
                  ? "font-[400] text-[16px] leading-[24px] text-black opacity-60"
                  : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"
              }
            >
              Employee ID
            </label>
            <input
              className={
                open
                  ? "font-[500] text-[16px] leading-[24px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
                  : "font-[500] text-[17.6px] leading-[26.4px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
              }
              value={editEmployeeId}
              onChange={(e) => setEditEmployeeId(e.target.value)}
              type="text"
              placeholder="Employee Id"
            />
          </div>

          <div className="w-full flex flex-col gap-[5px]">
            <label
              className={
                open
                  ? "font-[400] text-[16px] leading-[24px] text-black opacity-60"
                  : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"
              }
            >
              Employment Type
            </label>
            <input
              className={
                open
                  ? "font-[500] text-[16px] leading-[24px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
                  : "font-[500] text-[17.6px] leading-[26.4px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
              }
              value={editEmployementType}
              onChange={(e) => setEditEmployementType(e.target.value)}
              type="text"
              placeholder="Employment Type"
            />
          </div>

          <div className="w-full flex flex-col gap-[5px]">
            <label
              className={
                open
                  ? "font-[400] text-[16px] leading-[24px] text-black opacity-60"
                  : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"
              }
            >
              Work Shedule
            </label>
            <input
              className={
                open
                  ? "font-[500] text-[16px] leading-[24px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
                  : "font-[500] text-[17.6px] leading-[26.4px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
              }
              value={editWorkSchedule}
              onChange={(e) => setEditWorkSchedule(e.target.value)}
              type="text"
              placeholder="Work Shedule"
            />
          </div>
        </div>

        <div
          className={
            open
              ? " w-[187.06px] h-[200.46px] flex flex-col  gap-[18.07px]"
              : "w-[205.66px] h-[220.39px] flex flex-col  gap-[19.86px]"
          }
        >
          <div className="w-full flex flex-col gap-[5px]">
            <label
              className={
                open
                  ? "font-[400] text-[16px] leading-[24px] text-black opacity-60"
                  : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"
              }
            >
              Job Title
            </label>
            <input
              className={
                open
                  ? "font-[500] text-[16px] leading-[24px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
                  : "font-[500] text-[17.6px] leading-[26.4px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
              }
              value={editJobTitle}
              onChange={(e) => setEditJobTitle(e.target.value)}
              type="text"
              placeholder="job title"
            />
          </div>

          <div className="w-full flex flex-col gap-[5px]">
            <label
              className={
                open
                  ? "font-[400] text-[16px] leading-[24px] text-black opacity-60"
                  : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"
              }
            >
              Department
            </label>
            <input
              className={
                open
                  ? "font-[500] text-[16px] leading-[24px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
                  : "font-[500] text-[17.6px] leading-[26.4px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
              }
              value={editDepartment}
              onChange={(e) => setEditDepartment(e.target.value)}
              type="text"
              placeholder="department"
            />
          </div>

          <div className="w-full flex flex-col gap-[5px]">
            <label
              className={
                open
                  ? "font-[400] text-[16px] leading-[24px] text-black opacity-60"
                  : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"
              }
            >
              Reporting Supervisor
            </label>
            <input
              className={
                open
                  ? "font-[500] text-[16px] leading-[24px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
                  : "font-[500] text-[17.6px] leading-[26.4px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
              }
              value={editReportingOfficer}
              onChange={(e) => setEditReportingOfficer(e.target.value)}
              type="text"
              placeholder="Reporting supervisor"
            />
          </div>
        </div>

        <div
          className={
            open
              ? " w-[267.26px] h-fit flex flex-col  gap-[18.07px]"
              : "w-[294.01px] h-fit flex flex-col  gap-[19.86px]"
          }
        >
          <div className="w-full flex flex-col gap-[5px]">
            <label
              className={
                open
                  ? "font-[400] text-[16px] leading-[24px] text-black opacity-60"
                  : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"
              }
            >
              Region
            </label>
            <input
              className={
                open
                  ? "font-[500] text-[16px] leading-[24px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
                  : "font-[500] text-[17.6px] leading-[26.4px] focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
              }
              value={editRegion}
              onChange={(e) => setEditRegion(e.target.value)}
              type="text"
              placeholder="Region"
            />
          </div>

          <div className="w-full h-full flex flex-col gap-[5px]">
            <label
              className={
                open
                  ? "font-[400] text-[16px] leading-[24px] text-black opacity-60"
                  : "font-[400] text-[17.6px] leading-[26.4px] text-black opacity-60"
              }
            >
              Skills
            </label>

              <div>
            <div className="flex gap-4 items-center">
              <input
                // readOnly
                className="focus:outline-none border-[1px] border-[#a5b5bb] rounded-md"
                value={skills}
                onChange={e => setSkills(e.target.value)}
                // value={editSkills}
                // onChange={(e) => setEditSkills(e.target.value)}
                
                type="text"
                placeholder="skills"
              />
              <button 
                onClick={()=> { 
                  if(!skills){
                    console.log("no skills")
                    return;
                  }

                   setEditSkills(prev => {
                    const skillExists = prev.find(skill => skill === skills.trim())
                    if(!!skillExists){
                      console.log("skills already exist", skillExists)
                      return prev;
                    }
  
                    return [...prev, skills]
                    
                  });

                  setSkills("")
                }
                }
                >+
              </button>
              </div>
                <div>
                  
                </div>
              </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default OfficialDetailsEditForm;
