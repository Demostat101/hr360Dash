import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Error from "./pages/Error";
import DashBoard from "./pages/DashBoard";
import Employee from "./pages/Employee";
import AddEmployee from "./pages/AddEmployee";
import Analytics from "./pages/Analytics";
import Announcement from "./pages/Announcement";
import EmployeeDetails from "./components/EmployeeComponents/EmployeeDetails";

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
      },

      {
        path: "/add-employee",
        element: <AddEmployee />,
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
