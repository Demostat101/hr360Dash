import { createContext, useContext, useState } from "react";
import useLocalStorage from "use-local-storage";
import { apiRequest, useAxiosFetch } from "./useAxiosFetch/UseAxiosFetch";
import axios from "axios";

export const dashBoardContext = createContext();

export const Context = () => {
  return useContext(dashBoardContext);
};

export const ContextProvider = ({ children }) => {
  const API_URL = "http://localhost:4000/data";
  const [error, setError] = useState(null);
  const [searchName, setSearchName] = useState("");
  const [searchEmpID, setSearchEmpID] = useState("");
  const [searchEmpRegion, setSearchEmpRegion] = useState("");
  const [open, setOpen] = useLocalStorage(false);
  const [name, setName] = useState("Esther");
  const [editPersonalDetailsButton, setEditPersonalDetailsButton] =
    useState(false);
  const [editOfficialDetailsButton, setEditOfficialDetailsButton] =
    useState(false);
  const { data, fetchError, isLoading, setData } = useAxiosFetch(
    `http://localhost:4000/data`
  );

  const handleOpenBar = () => {
    const close = !open;
    setOpen(close);
  };

  const handleCheckBox = async (id) => {
    const toggleCheckBox = data.map((item) =>
      item.id.toString() === id.toString()
        ? { ...item, active: !item.active }
        : item
    );

    setData(toggleCheckBox);

    //to update Status

    const myItem = toggleCheckBox.filter(
      (item) => item.id.toString() === id.toString()
    );

    const updateOptions = {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ active: myItem[0].active }),
    };

    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);

    if (result) {
      setError(result);
    }
  };

  // Handle Edit Personal Employee Details

  const [editName, setEditName] = useState("");
  const [editGender, setEditGender] = useState("");
  const [editPhone, setEditPhone] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editDateOfBirth, setEditDateOfBirth] = useState("");
  const [editMaritalStatus, setEditMaritalStatus] = useState("");
  const [editReligion, setEditReligion] = useState("");
  const [editAddress, setEditAddress] = useState("");
  const [editEducation, setEditEducation] = useState("");
  const [editNationality, setEditNationality] = useState("");
  const [editLanguage, setEditLanguage] = useState("");
  const [editEmergencyContact, setEditEmergencyContact] = useState("");

  const handleEditPersonalDetails = async (id) => {
    const edit = {
      id: (data.length + 1).toString(),
      name: editName,
      gender: editGender,
      phone: editPhone,
      email: editEmail,
      dob: editDateOfBirth,
      maritalStatus: editMaritalStatus,
      Religion: editReligion,
      address: editAddress,
      education: editEducation,
      Nationality: editNationality,
      language: editLanguage,
      emergencyContact: editEmergencyContact,
    };

    if (editName === "" || editEmail === "") {
      alert("fields cant be blank");
    } else {
      try {
        const response = await axios.patch(
          `http://localhost:4000/data/${id}`,
          edit
        );

        setEditName("");
        setEditGender("");
        setEditPhone("");
        setEditEmail("");
        setEditDateOfBirth("");
        setEditMaritalStatus("");
        setEditReligion("");
        setEditAddress("");
        setEditEducation("");
        setEditNationality("");
        setEditLanguage("");
        setEditEmergencyContact("");
        setEditPersonalDetailsButton(false);

        setData(
          data.map(
            (employee) => (employee.id === id ? { ...response.data } : employee)
            // employee.id === id ? { ...response.data } : employee.id === id ? employee.skills.map((val)=> val.skill) : employee
          )
        );
      } catch (error) {
        console.log(`Error: ${error.message}`);
      }
    }
  };

  const a = ["coding", "art", { skills: ["man", "woman"] }];

  // Handle Edit Official Details

  const [editEmployeeId, setEditEmployeeId] = useState("");
  const [editEmployementType, setEditEmployementType] = useState("");
  const [editWorkSchedule, setEditWorkSchedule] = useState("");
  const [editJobTitle, setEditJobTitle] = useState("");
  const [editDepartment, setEditDepartment] = useState("");
  const [editReportingOfficer, setEditReportingOfficer] = useState("");
  const [editRegion, setEditRegion] = useState("");
  const [editSkills, setEditSkills] = useState();

  const handleEditOfficialDetails = async (id) => {
    const edit = {
      id: (data.length + 1).toString(),
      empID: editEmployeeId,
      empType: editEmployementType,
      schedule: editWorkSchedule,
      job: editJobTitle,
      department: editDepartment,
      reportingSupervisor: editReportingOfficer,
      region: editRegion,
      skills: editSkills,
    };

    if (editDepartment === "" || editReportingOfficer === "") {
      alert("fields cant be blank");
    } else {
      try {
        const response = await axios.patch(
          `http://localhost:4000/data/${id}`,
          edit
        );

        setEditEmployeeId("");
        setEditEmployementType("");
        setEditWorkSchedule("");
        setEditJobTitle("");
        setEditDepartment("");
        setEditReportingOfficer("");
        setEditRegion("");
        setEditSkills();
        setEditOfficialDetailsButton(false);

        setData(
          data.map((employee) =>
            employee.id === id ? { ...response.data } : employee
          )
        );
      } catch (error) {
        console.log(`Error: ${error.message}`);
      }
    }
  };

  return (
    <dashBoardContext.Provider
      value={{
        handleOpenBar,
        open,
        name,
        data,
        fetchError,
        isLoading,
        searchName,
        setSearchName,
        handleCheckBox,
        searchEmpID,
        setSearchEmpID,
        searchEmpRegion,
        setSearchEmpRegion,
        editPersonalDetailsButton,
        setEditPersonalDetailsButton,
        editName,
        setEditName,
        editGender,
        setEditGender,
        editPhone,
        setEditPhone,
        editEmail,
        setEditEmail,
        editDateOfBirth,
        setEditDateOfBirth,
        editMaritalStatus,
        setEditMaritalStatus,
        editReligion,
        setEditReligion,
        editAddress,
        setEditAddress,
        editEducation,
        setEditEducation,
        editNationality,
        setEditNationality,
        editLanguage,
        setEditLanguage,
        editEmergencyContact,
        setEditEmergencyContact,
        handleEditPersonalDetails,
        editOfficialDetailsButton,
        setEditOfficialDetailsButton,
        handleEditOfficialDetails,
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
      }}
    >
      {children}
    </dashBoardContext.Provider>
  );
};
