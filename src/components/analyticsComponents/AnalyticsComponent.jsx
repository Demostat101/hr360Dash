import EmployeeTurnOver from "./EmployeeTurnOver"
import HiredVsLeft from "./HiredVsLeft"
import TeamPerformanceRating from "./TeamPerformanceRating"


const AnalyticsComponent = () => {
  return (
    <div className="w-full border-2 border-red-500 mt-[25px] flex gap-[10px]">
      <div className="flex flex-col justify-between">
        <EmployeeTurnOver/>
        <HiredVsLeft/>
      </div>
      <TeamPerformanceRating/>
    </div>
  )
}

export default AnalyticsComponent
