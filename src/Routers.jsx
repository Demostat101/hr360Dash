import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Error from "./pages/Error";
import DashBoard from "./pages/DashBoard";
import Employee from "./pages/Employee";
import AddEmployee from "./pages/AddEmployee";
import Analytics from "./pages/Analytics";
import Announcement from "./pages/Announcement";
import EmployeeDetails from "./components/EmployeeComponents/EmployeeDetails";
import PaySlip from "./components/EmployeeComponents/PaySlip";
import EmployeePage from "./components/EmployeeComponents/EmployeePage";
import LeaveHistory from "./components/EmployeeComponents/LeaveHistory";
import AnnouncementPlatform from "./components/announcementsComponents/AnnouncementPlatform";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        index: true,
        element: <DashBoard />,
      },

      {
        path: "/employee",
        element: <Employee />,
      },
      {
        path: "/employee/:id",
        element: <EmployeeDetails />,

        children: [
          {
            index: true,

            element: <EmployeePage />,
          },
          {
            path: "employee-payslip",
            element: <PaySlip />,
          },
          {
            path: "employee-leave-history",
            element: <LeaveHistory />,
          },
        ]
      },

      {
        path: "/add-employee",
        element: <AddEmployee />/* ,
        children: [
          {
            index: true,

            element: <PersonalDetails />,
          },
          {
            path: "official-details",
            element: <OfficialDetails />,
          },
          {
            path: "bank-details",
            element: <BankDetails />,
          },
        ] */
      },
      {
        path: "/analytics",
        element: <Analytics />,
      },
      {
        path: "/announcement",
        element: <Announcement />,
      },

      {
        path: "/*",
        element: <Error />,
      },
    ],
  },
]);

export default Routers;
