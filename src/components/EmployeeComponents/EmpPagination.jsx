import { Context } from "../../DashBoardContext";
import Pagination from "@mui/material/Pagination";
import Image from "../../assets/moreImg.jfif"
import { IoMdMore } from "react-icons/io";
import { UsePagination } from "./UsePagination";
import { Link } from "react-router-dom";
import { PaginationItem, Typography } from "@mui/material";
import { useMemo } from "react";
import { useTable } from "react-table";

const EmpPagination = () => {
  const { data, search } = Context();

  const [
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex,
    setStartPageIndex,
  ] = UsePagination(9, data.length);

  const filteredEmployeeList = useMemo(() => data.filter(
    (employee) =>
      employee.name.toLowerCase().includes(search.toLowerCase()) ||
      employee.empID.toString().includes(search.toString())
  ).slice(
      startPageIndex * endPageIndex,
      startPageIndex * endPageIndex + endPageIndex
    )
  , [startPageIndex,search,data]);

    const columns = useMemo (()=>([
      {
        Header: "Emp.ID ⁝",
        accessor:"empID"
      },
      {
        Header: "Name ⁝",
        accessor:"name"
      },
      {
        Header: "Department ⁝",
        accessor:"department"
      },
      {
       Header: "Role ⁝",
        accessor:"role"
      },
      {
        Header: "Email Address ⁝",
        accessor:"email"
      },
      {
        Header: "Emp Type ⁝",
        accessor:"empType"
      },
      {
        Header: "Status ⁝",
        accessor:"active"
      },
      {
        Header: "Details ⁝"
      }
    ]),[]);

    const table = useTable({columns, data:filteredEmployeeList})
    const {getTableProps, headerGroups} = table;

  return (
    <div className="w-full h-screen">

      <table className="min-h-[100vh]" {...getTableProps()}>
{/* header */}
        <thead className=" rounded-tl-lg bg-[#E7F0FD]" >
          {headerGroups.map((headerGroup)=>(
            <tr className={open ? "w-[100%] h-[62.62px]" : "w-[100%] h-[69px]"} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column)=>{
                    return <th {...column.getHeaderProps()}>
                        {column.render("Header")}
                    </th>
                  })}
            </tr>
          ))}
        </thead>
{/* body */}


<tbody className={open ? " w-full h-[62.62px] text-[#8F8F8F] th-bb" : " w-full h-[69px] text-[#8F8F8F] th-bb"}>
          {

           filteredEmployeeList.map((val)=> {
              return <tr key={val.id} className={open ? " w-full h-[62.62px] text-[#8F8F8F] th-bb" : " w-full h-[69px] text-[#8F8F8F] th-bb"}>
              <td >
              <input className="ml-[15px] border-[#8F8F8F]" type="checkbox" name="" id="" />
              <span className="pl-[10px]">{val.empID}</span>
              </td>
              <td>{val.name}</td>
              <td>{val.department}</td>
              <td>{val.role}</td>
              <td>{val.email}</td>
              <td>{val.empType}</td>
              <td>
                {val.active ? (
                  <div className="text-green-400">Active</div>
                ) : (
                  <div className="text-red-500">On leave</div>
                )}
              </td>
              <td><Link className="link text-[#176B87] bg-white">Details</Link></td>
            
            </tr>
            })
          }
        </tbody>

      </table>

      <Pagination
      className="flex flex-col place-items-end pt-[15px] pb-[15px]"
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



