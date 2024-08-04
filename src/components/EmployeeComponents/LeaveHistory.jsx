
import { Context } from "../../DashBoardContext";


const LeaveHistory = () => {

  const {open} = Context()


  return (
    <>
      <table className="w-full payslip-table bg-white shadow-lg">
        <thead className="h-[50px] payslip-head">
          <tr className="text-left header-tr">
            <th>Date of Application</th>
            <th>Leave Type</th>
            <th>Leave Date</th>
            <th>No. of Days</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monday 29th jan,2022</td>
            <td>Maternity Leave</td>
            <td>3rd Feb - 3rd Mar,2022</td>
            <td>30 Days</td>
            <td>Pending</td>
          </tr>
          <tr>
            <td>Monday 29th jan,2022</td>
            <td>Maternity Leave</td>
            <td>3rd Feb - 3rd Mar,2022</td>
            <td>30 Days</td>
            <td>Pending</td>
          </tr>
          <tr>
            <td>Monday 29th jan,2022</td>
            <td>Maternity Leave</td>
            <td>3rd Feb - 3rd Mar,2022</td>
            <td>30 Days</td>
            <td>Pending</td>
          </tr>
          <tr>
            <td>Monday 29th jan,2022</td>
            <td>Maternity Leave</td>
            <td>3rd Feb - 3rd Mar,2022</td>
            <td>30 Days</td>
            <td>Pending</td>
          </tr>
          <tr>
            <td>Monday 29th jan,2022</td>
            <td>Maternity Leave</td>
            <td>3rd Feb - 3rd Mar,2022</td>
            <td>30 Days</td>
            <td>Pending</td>
          </tr>
        </tbody>
      </table>
      
    </>
  )
}

export default LeaveHistory
