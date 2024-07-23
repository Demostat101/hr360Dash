import { Context } from "../../DashBoardContext";
import Pagination from "@mui/material/Pagination";
import { UsePagination } from "./UsePagination";
import { NavLink } from "react-router-dom";
import { PaginationItem, Typography } from "@mui/material";
import { useMemo } from "react";

const EmpPagination = () => {
  const { data, search } = Context();

  // const employeeDB = data.filter(
  //   (employee) =>
  //     employee.name.toLowerCase().includes(search.toLowerCase()) ||
  //     employee.empID.toString().includes(search.toString())
  // );
  const [
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex,
    setStartPageIndex,
  ] = UsePagination(6, data.length);

  const filteredEmployeeList = useMemo(() => data.filter(
    (employee) =>
      employee.name.toLowerCase().includes(search.toLowerCase()) ||
      employee.empID.toString().includes(search.toString())
  ).slice(
      startPageIndex * endPageIndex,
      startPageIndex * endPageIndex + endPageIndex
    )
  , [startPageIndex,search,data]);



  console.log(filteredEmployeeList);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Emp.ID</th>
            <th>NAME</th>
            <th>Department</th>
            <th>Email Address</th>
            <th>Emp Type</th>
            <th>Status</th>
            
          </tr>
        </thead>
        <tbody>
          {

           filteredEmployeeList.map((val)=> {
              return <tr key={val.id}>
              <td>{val.empID}</td>
              <td>{val.name}</td>
              <td>{val.department}</td>
              <td>{val.email}</td>
              <td>{val.empType}</td>
              <td>
                {val.active ? (
                  <div className="text-green-400">Active</div>
                ) : (
                  <div className="text-red-500">On leave</div>
                )}
              </td>
              <td><NavLink className="link">Details</NavLink></td>
            </tr>
            })
          }
        </tbody>
      </table>

      <Pagination
        color="primary"
        count={totalPages}
        onChange={(event, value) => setStartPageIndex(value - 1)}
        renderItem={(item) => (
          <PaginationItem
            slots={{
              previous: () => <Typography variant="label">Prev</Typography>,
              next: () => (
                <Typography variant="label" sx={{ padding: "0 12px" }}>
                  Next
                </Typography>
              ),
            }}
            {...item}
          />
        )}
        defaultPage={1}
        siblingCount={0}
        boundaryCount={1}
      />
    </div>
  );
};

export default EmpPagination;

