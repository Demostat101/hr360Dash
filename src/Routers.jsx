import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Error from "./pages/Error";
import { Suspense } from "react";
import React from "react";
// import DashBoard from "./pages/DashBoard";
// import Employee from "./pages/Employee";
// import AddEmployee from "./pages/AddEmployee";
// import Analytics from "./pages/Analytics";
// import Announcement from "./pages/Announcement";
// import EmployeeDetails from "./components/EmployeeComponents/EmployeeDetails";
// import PaySlip from "./components/EmployeeComponents/PaySlip";
// import EmployeePage from "./components/EmployeeComponents/EmployeePage";
// import LeaveHistory from "./components/EmployeeComponents/LeaveHistory";
// import CreateIntranetAnnouncement from "./components/announcementsComponents/CreateIntranetAnnouncement";
// import CreateEmailAnnouncement from "./components/announcementsComponents/CreateEmailAnnouncement";
// import DisplayAnnouncements from "./components/announcementsComponents/DisplayAnnouncements";
import LoginSignup from "./pages/LoginSignup";
import UnAuth from "./pages/UnAuth";
import ProtectedRoute from "./hooks/ProtectedRoute";


const DashBoard = React.lazy(()=> import("./pages/DashBoard"))
const Employee = React.lazy(()=> import("./pages/Employee"))
const AddEmployee = React.lazy(()=> import("./pages/AddEmployee"))
const Analytics = React.lazy(()=> import("./pages/Analytics"))
const Announcement = React.lazy(()=> import("./pages/Announcement"))
const EmployeeDetails = React.lazy(()=> import("./components/EmployeeComponents/EmployeeDetails"))
const PaySlip = React.lazy(()=> import( "./components/EmployeeComponents/PaySlip"))
const EmployeePage = React.lazy(()=> import("./components/EmployeeComponents/EmployeePage"))
const LeaveHistory = React.lazy(()=> import("./components/EmployeeComponents/LeaveHistory"))
const CreateIntranetAnnouncement = React.lazy(()=> import( "./components/announcementsComponents/CreateIntranetAnnouncement"))
const CreateEmailAnnouncement = React.lazy(()=> import("./components/announcementsComponents/CreateEmailAnnouncement"))
const DisplayAnnouncements = React.lazy(()=> import("./components/announcementsComponents/DisplayAnnouncements"))

const Routers = createBrowserRouter([
  {
    path:"/",
    element:<LoginSignup/>
  },
  {
    path: "layout/",
    element: <ProtectedRoute> <MainLayout /> </ProtectedRoute>,

    children: [
      {
        path:"dashboard",
        element:  <Suspense fallback={<div className="flex justify-center place-items-center h-full bg-[#176b87] "><span className="loader"></span></div> }> <DashBoard /> </Suspense>
      },

      {
        path: "employee",
        
        element:  <Suspense fallback={<div className="loader"></div> }> <Employee /> </Suspense>
      },
      {
        path: "employee/:id",
        
        element:  <Suspense fallback={<div className="loader"></div> }> <EmployeeDetails /> </Suspense>,

        children: [
          {
            index: true,

            element:  <Suspense fallback={<div className="loader"></div> }> <EmployeePage /> </Suspense>
          },
          {
            path: "employee-payslip",
            element:  <Suspense fallback={<div className="loader"></div> }>  <PaySlip /> </Suspense>
          },
          {
            path: "employee-leave-history",
            
            element:  <Suspense fallback={<div className="loader"></div> }> <LeaveHistory /> </Suspense>
          },
        ],
      },

      {
        path: "add-employee",
      
        element:  <Suspense fallback={<div className="loader"></div> }><AddEmployee /></Suspense>
      },
      {
        path: "analytics",
      
        element:  <Suspense fallback={<div className="loader"></div> }><Analytics /></Suspense>
      },
      {
        path: "announcement/",
      
        element:  <Suspense fallback={<div className="loader"></div> }> <Announcement /></Suspense>,
        children: [
          {
            index: true,
          
            element:  <Suspense fallback={<div className="loader"></div> }><DisplayAnnouncements /></Suspense>
            
          },
          {
            path: "intranet-announcement",
          
            element:  <Suspense fallback={<div className="loader"></div> }> <CreateIntranetAnnouncement /></Suspense>
          },
          {
            path: "email-announcement",
         
            element:  <Suspense fallback={<div className="loader"></div> }> <CreateEmailAnnouncement /></Suspense>
          },
        ],
      }
      
    ],
  },
  {
    path: "/*",
    element: <Error />,
  },
  {
    path: "/unauthorize",
    element: <UnAuth />,
  }
]);

export default Routers;
