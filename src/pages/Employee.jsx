import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import { Context } from "../DashBoardContext";
import { useEffect, useState } from "react";


const Employee = () => {
  const {data} = Context()
  const [page, setPage] = useState(0);
  const [rowPerPage, setRowPerPage] = useState(5);



  const columns = [
    {
      id:"id",
      headerName:"ID",
    },
    {
      id:"starting_at",
      headerName:"Date-Time",
      
    },
    {
      id:"result_info",
      headerName:"Match-Result",
    },
    {
      id:"name",
      headerName:"NAME",
    }
  ]

  const handlePageChange = (event, newpage) => {
    setPage(newpage)
  }
  const handlePerPageChange = (event) => {
    setRowPerPage(+event.target.value)
    setPage(0)
  }

  
  return <div className="text-red-800 w-full border-solid border-2 border-green-500 h-[100dvh]">
    <div className="text-center font-[700] w-full border-solid border-2 border-yellow-500">EMPLOYEE</div>

    <Paper className="w-full h-[100%]">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column,index)=>{
                return <TableCell key={index}>
                  {column.headerName}
                </TableCell>
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {data && data.slice(page*rowPerPage, page*rowPerPage+rowPerPage).map((values,index)=>{
              return <TableRow key={index}>
                  {
                    columns && columns.map((column,index)=>{
                      let value = values[column.id];
                      
                      return <TableCell key={index}>
                        {value}
                        
                      </TableCell>
                    })
                  }
              </TableRow>
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination rowsPerPageOptions={[5,10,15]} page={page} count={data.length} rowsPerPage={rowPerPage} component="div" onPageChange={handlePageChange} onRowsPerPageChange={handlePerPageChange}>
            
      </TablePagination>

    </Paper>

      
    </div>;
};

export default Employee;
