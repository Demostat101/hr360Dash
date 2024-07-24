import { Context } from "../../DashBoardContext";
import Pagination from "@mui/material/Pagination";
import { IoMdMore } from "react-icons/io";
import { UsePagination } from "./UsePagination";
import { NavLink } from "react-router-dom";
import { PaginationItem, Typography } from "@mui/material";
import { useMemo } from "react";

const EmpPagination = () => {
  const { data, search } = Context();

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




  return (
    <div className="w-full">
      <table className="w-full">
        <thead className="w-full">
          <tr className="w-full border-solid border-2 border-green-500 table-head ">
            <th>Emp.ID </th><IoMdMore/>
            <th>NAME <IoMdMore/></th>
            <th>Department <IoMdMore/></th>
            <th>Email Address <IoMdMore/></th>
            <th>Emp Type <IoMdMore/></th>
            <th>Status <IoMdMore/></th>
            
          </tr>
        </thead>
        <tbody>
          {

           filteredEmployeeList.map((val)=> {
              return <tr key={val.id}>
              <div className="flex gap-[15px]">
              <input type="checkbox" name="" id="" />
              <td>{val.empID}</td>
              </div>
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
      className="flex flex-col place-items-end"
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

