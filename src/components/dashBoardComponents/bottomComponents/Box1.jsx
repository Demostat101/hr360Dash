import { Context } from "../../../DashBoardContext";
import { Box1Data } from "./Box1Array";

const Box1 = () => {
  const { open } = Context();

  return (
    <div
      className={
        open
          ? "2xl:w-[349.55px] bg-[#FFFFFF] flex flex-col gap-[30px] rounded-lg 2xl:h-[311.1px] md:w-[320px] md:h-[300px] shadow-lg "
          : "2xl:w-[384.88px] bg-[#FFFFFF] 2xl:h-[342.55px] flex flex-col gap-[30px] rounded-lg md:w-[340px] md:h-[300px] shadow-lg"
      }
    >
      {/* top box */}
      <div
        className={
          open
            ? "2xl:w-[349.55px] 2xl:h-[57.68px] 2xl:leading-[24px] 2xl:font-[500] 2xl:text-[16] md:text-[12px] md:leading-4 md:font-[500] border-[1.17px] border-[#ECEEF6] md:w-[100%] md:h-[35px] flex flex-col justify-center pl-[15px] "
            : "2xl:w-[384.88px] 2xl:h-[63.51px] border-[1.28px] border-[#ECEEF6] md:w-[100%] md:h-[40px] flex flex-col justify-center 2xl:leading-[26.43px] 2xl:font-[500] 2xl:text-[17.62] md:text-[15px] md:leading-5 md:font-[500] pl-[15px]"
        }
      >
        Upcoming Events
      </div>

      {/* Boxes */}
      <div
        className={
          open
            ? "flex flex-col gap-[20px] place-items-center "
            : "flex flex-col gap-[20px] place-items-center"
        }
      >
        {/* 1st box */}
        {Box1Data.map(({ date, time, title, month }, index) => {
          return (
            <div
              key={index}
              className={
                open
                  ? " 2xl:w-[309.36px] 2xl:h-[56.51px] border-l-[5px] border-l-[#176B87] place-items-center rounded-md flex gap-[40px] md:w-[80%] md:h-[50px] border-[1.17px] border-[#ECEEF6]"
                  : " 2xl:w-[340.62px] 2xl:h-[62.22px] flex md:w-[80%] border-l-[5px] place-items-center border-l-[#176B87] rounded gap-[40px] md:h-[55px] border-[1.17px] border-[#ECEEF6]"
              }
            >
              {/* small box */}
              <div
                className={
                  open
                    ? " 2xl:w-[28px] 2xl:h-[42px] md:w-[20px] pl-[30px] flex flex-col justify-center text-center place-items-center md:h-[100%] "
                    : " 2xl:w-[31px] 2xl:h-[46px] md:w-[23px] pl-[30px] flex flex-col justify-center text-center md:h-[100%] place-items-center"
                }
              >
                <span>{date}</span> <span>{month}</span>{" "}
              </div>

              {/* 2nd Box */}
              <div
                className={
                  open
                    ? " 2xl:w-[113px] 2xl:h-[39px] md:w-[100px] flex flex-col justify-evenly md:h-[100%]"
                    : " 2xl:w-[124px] 2xl:h-[43px] md:w-[110px] flex flex-col justify-evenly md:h-[100%]"
                }
              >
                <span
                  className={
                    open
                      ? " 2xl:text-[14px] 2xl:leading-[21px] text-nowrap 2xl:font-[500] md:text-[10px] md:leading-[15px] md:font-[500] "
                      : " 2xl:text-[15.4px] 2xl:leading-[23.12px] text-nowrap 2xl:font-[500] md:text-[13px] md:leading-[17px] md:font-[500] "
                  }
                >
                  {title}
                </span>{" "}
                <span
                  className={
                    open
                      ? " 2xl:text-[12px] 2xl:leading-[18px] 2xl:font-[400] md:text-[8px] md:leading-[12px] md:font-[400] "
                      : " 2xl:text-[13.21px] 2xl:leading-[19.82px] 2xl:font-[400] md:text-[10px] md:leading-[15px] md:font-[400] "
                  }
                >
                  {time}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Box1;
