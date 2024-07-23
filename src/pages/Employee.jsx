
import EmpPagination from "../components/EmployeeComponents/EmpPagination"
import { Context } from "../DashBoardContext"



const Employee = () => {
  const {isLoading,fetchError, data} = Context()
  
  return (
    <>
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

      
      {
        !isLoading && !fetchError && data.length ? <EmpPagination/> : <div>Nothing to display</div>
      }


      
    </>
  )
}

export default Employee






















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
