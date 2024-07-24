import EmpPagination from "../components/EmployeeComponents/EmpPagination";
import { Context } from "../DashBoardContext";
import { FaPlus } from "react-icons/fa";

const Employee = () => {
  const { isLoading, fetchError, data, open } = Context();

  return (
    <div className="w-full min-h-full p-[25px]">
      <div className="w-full h-full border-solid border-2 border-green-500">
        {/* Top Bar */}
        <div className={open ? "w-full h-[129px] mb-[25px]" : "w-full h-[127.67px] mb-[25px]"}>
          {/* employ over view and add employ */}
          <header className={open ? "w-full h-[54px] flex justify-between place-items-center " : "w-full h-[59.7px] flex justify-between place-items-center"}>
            <span className={open ? " h-[54px] font-[600] text-[26px] leading-[39px] " : " font-[600] text-[26px] leading-[39px]"}>Employee Overview</span>
            <button className={open ? " w-[194px] h-[54px] flex gap-[10px] rounded-lg justify-center place-items-center bg-[#176B87] text-white font-[500] text-[14px] leading-[21px]" : "w-[194px] h-[59.7px] flex gap-[11.05px] rounded-lg justify-center place-items-center bg-[#176B87] text-white font-[500] text-[15.48px] leading-[23.22px]"}><FaPlus size={20}/> Add Employee</button>
          </header>

          {/* Searched By page */}
          <div className={open ? " w-[444px] h-[71px] text-[#969696] grid gap-[5px]" : "w-[429.48px] h-[68.25px] text-[#969696] grid gap-[4.48px]"}>
            <span className={open ? " font-[400] text-[14px] leading-[21px]" : "font-[400] text-[13.54px] leading-[20.31px]"}>Search by:</span>
            <div className={open ? " w-[100%] h-[45px] flex gap-[16px]" : "w-[100%] h-[43.41px] flex gap-[15.48px]"}>
              <div className={open ? " w-[126px] h-[45px] grid justify-center place-items-center bg-white rounded-lg font-[400] text-[18px]" : "w-[121.88px] h-[43.41px] grid justify-center place-items-center bg-white rounded-lg font-[400] text-[17.41px]"}>Name</div>
              <div className={open ? "w-[144px] h-[45px] grid justify-center place-items-center bg-white rounded-lg font-[400] text-[18px]" : "w-[139.29px] h-[43.41px] grid justify-center place-items-center bg-white rounded-lg font-[400] text-[17.41px] "}>Emp.ID</div>
              <div className={open ? "w-[142px] h-[45px] bg-white pl-[20px] pr-[20px] rounded-lg grid place-items-center font-[400] text-[18px]" : "w-[137.36px] h-[43.41px] bg-white pl-[20px] pr-[20px] rounded-lg grid place-items-center font-[400] text-[17.41px]"}>
              <select name="" id="" className=" outline-none bg-white">
                <option value="Region" className="bg-white">Region</option>
                <option value="Costain" className="bg-white">Costain</option>
              </select>
              </div>
            </div>
          </div>


        </div>

        {/* Table Bar */}
        <div className={open ? "w-full h-[635.29px] border-solid border-2 border-yellow-500" : "w-full h-[700px] border-solid border-2 border-black"}>
          {isLoading && (
            <div className="w-full h-96 flex flex-col justify-center place-items-center">
              <div className="loader"></div>
            </div>
          )}

          {!isLoading && fetchError && (
            <div className="w-full h-32 flex flex-col justify-center place-items-center text-center">
              <div className="text-red-600">{fetchError}</div>
            </div>
          )}

          {!isLoading && !fetchError && data.length ? <EmpPagination /> : ""}
        </div>
      </div>
    </div>
  );
};

export default Employee;

// import { useState, useMemo } from 'react';
// import Pagination from '../components/EmployeeComponents/Pagination';
// import { Context } from '../DashBoardContext';

// let PageSize = 5;

// const Employee = () => {
//   const {data} = Context()
//   const [currentPage, setCurrentPage] = useState(1);
//   console.log(data);

//   const currentTableData = useMemo(() => {
//     const firstPageIndex = (currentPage - 1) * PageSize;
//     const lastPageIndex = firstPageIndex + PageSize;
//     return data.slice(firstPageIndex, lastPageIndex);
//   }, [currentPage]);

//   return (
//     <div className='w-[100%]'>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>TITLE</th>
//             <th>BODY NAME</th>

//           </tr>
//         </thead>
//         <tbody>
//           {currentTableData.map(item => {
//             return (
//               <tr key={item.id}>
//                 <td>{item.id}</td>
//                 <td>{item.title}</td>
//                 <td>{item.body.slice(100)}</td>

//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       <Pagination
//         className="border-solid border-2 border-green-500"
//         currentPage={currentPage}
//         totalCount={data.length}
//         pageSize={PageSize}
//         onPageChange={page => setCurrentPage(page)}
//       />
//     </div>
//   );
// }

// export default Employee

// // import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow,PaginationItem,Typography } from "@mui/material";
// // import { Context } from "../DashBoardContext";
// // import { useEffect, useState } from "react";
// // import Pagination from "@mui/material/Pagination";

// // const Employee = () => {
// //   const {data} = Context()
// //   const [page, setPage] = useState(0);
// //   const [rowPerPage, setRowPerPage] = useState(5);

// //   const columns = [
// //     {
// //       id:"id",
// //       headerName:"ID",
// //     },
// //     {
// //       id:"title",
// //       headerName:"Title",

// //     },
// //     {
// //       id:"body",
// //       headerName:"TEXT",
// //     }
// //   ]

//   // const handlePageChange = (event, newpage) => {
//   //   setPage(newpage)
//   // }
//   // const handlePerPageChange = (event) => {
//   //   setRowPerPage(+event.target.value)
//   //   setPage(0)
//   // }

//   return <div className="text-red-800 w-full border-solid border-2 border-green-500 h-[100dvh]">
//     <div className="text-center font-[700] w-full border-solid border-2 border-yellow-500">EMPLOYEE</div>

//     {/* <div>Page:{page}</div>

//     <Paper className="w-full h-[100%]">
//       <TableContainer>
//         <Table>
//           <TableHead>
//             <TableRow>
//               {columns.map((column,index)=>{
//                 return <TableCell key={index}>
//                   {column.headerName}
//                 </TableCell>
//               })}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data && data.slice((page*rowPerPage), (page*rowPerPage+rowPerPage)).map((values,index)=>{
//               return <TableRow key={index}>
//                   {
//                     columns && columns.map((column,index)=>{
//                       let value = values[column.id];

//                       return <TableCell key={index}>
//                         {value}

//                       </TableCell>
//                     })
//                   }
//               </TableRow>
//             })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <Pagination className="flex flex-col place-items-end" defaultPage={4} siblingCount={0} boundaryCount={1} page={page} count={Math.floor((data.length/rowPerPage))} color="primary" onChange={handlePageChange}
//       renderItem={
//         (item)=>(
//           <PaginationItem slots={
//             {
//               previous: () => (
//                 <Typography variant="label">Prev</Typography>
//               ),
//               next: () => (
//                 <Typography variant="label">
//                   Next
//                 </Typography>
//               ),
//             }
//           }
//           {...item}/>
//         )
//       }

//        >

//       </Pagination>

//     </Paper> */}

//     </div>;
// };

// export default Employee;
