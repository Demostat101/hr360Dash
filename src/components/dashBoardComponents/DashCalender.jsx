import dayjs from "dayjs";
import { generateDate } from "./DashCalenderFunctions";
import { useState } from "react";
import { Context } from "../../DashBoardContext";

function cn(...classes) {
  return classes.filter(Boolean).join();
}

const DashCalender = () => {
  const { open } = Context;
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentDay = dayjs();
  const [today, setToday] = useState(currentDay);

  return (
    <div className="w-full h-80%">
    
      <h1
        className={
          open
            ? "h-[40px] grid justify-center place-items-center text-[16px] text-black font-[600]"
            : "h-[43.62px] text-black font-[600] text-[17.62px] grid justify-center place-items-center"
        }
      >
        {months[today.month()]} {[today.year()]}
      </h1>
      <hr />
      <div className="grid grid-cols-7 w-[100%] place-items-center justify-center text-[15px]">
        {days.map((day, index) => {
          return (
            <h1 key={index} className=" font-[700]">
              {day}
            </h1>
          );
        })}
      </div>
      <div
        className={
          open
            ? "w-[100%] h-[166.82px] grid grid-cols-7 place-items-center justify-center"
            : "w-[100%] place-items-center justify-center h-[183.68px] grid grid-cols-7"
        }
      >
        {generateDate().map(({ date, currentMonth, today }, index) => {
          return (
            <div key={index} className=" grid place-items-center">
              <h3
                className={cn(
                  currentMonth
                    ? ""
                    : " text-gray-300 h-[30px] text-[13.21px] w-[30px] grid place-items-center justify-center rounded-full",
                  today
                    ? "bg-[#176B87] text-[13.21px] h-[30px] w-[30px] grid place-items-center justify-center rounded-full text-white"
                    : "h-[30px] w-[30px] transition-all text-[13.21px] justify-center cursor-pointer grid place-items-center rounded-full hover:text-white hover:bg-black "
                )}
              >
                {date.date()}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DashCalender;
