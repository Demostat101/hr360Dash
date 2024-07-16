import { Context } from "../../../DashBoardContext";
import { Box2Data } from "./Box2Array";

const Box2 = () => {
  const { open } = Context();
  return (
    <div
      className={
        open
          ? "2xl:w-[349.55px] pb-[15px] flex flex-col justify-between 2xl:h-[311.1px] bg-[#FFFFFF] rounded-lg shadow-lg md:w-[300px] md:h-[300px]"
          : "2xl:w-[384.88px] flex flex-col justify-between rounded-lg shadow-lg 2xl:h-[342.55px] bg-[#FFFFFF] pb-[15px] md:w-[310px] md:h-[300px]"
      }
    >
      {/* top container */}
      <div
        className={
          open
            ? "2xl:w-[349px] border-[1.17px]  border-[#ECEEF6] 2xl:h-[55px] flex place-items-center justify-between 2xl:gap-[10px] pl-[20px] pr-[20px] md:w-[100%] md:h-[35px] md:gap-[7px]"
            : "2xl:w-[384.53px] 2xl:h-[60.44px] flex place-items-center justify-between 2xl:gap-[11.01px] pr-[20px] pl-[20px] md:w-[100%] border-[1.18px] border-[#ECEEF6] md:h-[38px] md:gap-[8px] "
        }
      >
        <h2
          className={
            open
              ? " 2xl:w-[136px]  2xl:h-[24px] font-[500] 2xl:text-[16px] 2xl:leading-[24px] md:w-[130px] md:h-[20px] md:text-[10px] md:leading-[18px] "
              : " 2xl:w-[150px] 2xl:h-[26px] font-[500] 2xl:text-[17.62px] 2xl:leading-[26.43px] md:w-[120px] md:h-[22px] md:text-[12px] md:leading-[20px] "
          }
        >
          Announcement
        </h2>
        <button
          className={
            open
              ? "2xl:w-[110px] 2xl:h-[31px] rounded-lg border-[#E3EFF3] border-solid border-2  md:w-[90px] md:h-[26] "
              : "2xl:w-[121.12px] 2xl:h-[34.01px] rounded-lg md:w-[100px] border-solid border-[#E3EFF3] border-[2px] md:h-[28] "
          }
        >
          Create
        </button>
      </div>
      {/* Container holding all boxes */}
      <div
        className={
          open
            ? "flex flex-col 2xl:place-items-center md:gap-[20px] 2xl:w-full 2xl:gap-4 2xl:pl-[15px] md:pl-[10px]"
            : "flex flex-col 2xl:place-items-left 2xl:w-full md:gap-[20px] 2xl:gap-4 2xl:pl-[20px] md:pl-[10px]"
        }
      >
        {/* Each box */}

        {Box2Data.map(({ employee, dateTime, icon }, index) => {
          return (
            <div
              key={index}
              className={
                open
                  ? " 2xl:w-[317.92px] 2xl:h-[44.83px] flex place-items-center 2xl:gap-[94.96px] md:w-[300px] md:h-[40px] md:gap-[50px] "
                  : " 2xl:w-[350.05] place-items-center 2xl:h-[49.41px] flex 2xl:gap-[104.56px] md:w-[310px] md:h-[45px] md:gap-[55px] "
              }
            >
              {/* inner box */}

              <div
                className={
                  open
                    ? "2xl:w-[199.65px] 2xl:h-[44.83px] 2xl:gap-[5.83px] md:w-[190px] md:h-[40px] md:gap-[3px] "
                    : "2xl:w-[219.83px] 2xl:h-[49.41px] 2xl:gap-[6.41px] md:w-[200px] md:h-[43px] md:gap-[4px] "
                }
              >
                <h3
                  className={
                    open
                      ? "2xl:w-[144px] 2xl:h-[21px] font-[500] 2xl:text-[14px] 2xl:leading-[21px] md:w-[120px] md:h-[18px] md:text-[10px] md:leading-[15px] "
                      : "2xl:w-[158px] 2xl:h-[23px] font-[500] 2xl:text-[15.41px] 2xl:leading-[23.12px] md:w-[130px] md:h-[20px] md:text-[12px] md:leading-[17px] "
                  }
                >
                  {employee}
                </h3>
                <small
                  className={
                    open
                      ? "2xl:w-[199.65px] 2xl:h-[18px] font-[400] 2xl:text-[12px] 2xl:leading-[18px] md:w-[180px] md:h-[15px] md:text-[8px] md:leading-[12px] "
                      : "2xl:w-[219.83px] 2xl:h-[20px] font-[400] 2xl:text-[13.21px] 2xl:leading-[19.82px] md:w-[210px] text-nowrap md:h-[18px] md:text-[10px] md:leading-[15px] "
                  }
                >
                  {dateTime}
                </small>
              </div>

              <div>{icon}</div>
            </div>
          );
        })}
      </div>

      <div className="w-full flex text-center justify-center">
        <a className=" underline text-blue-500" href="#">
          View All Announcements
        </a>
      </div>
    </div>
  );
};

export default Box2;
