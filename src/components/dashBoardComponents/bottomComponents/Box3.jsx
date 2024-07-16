import { Context } from "../../../DashBoardContext";
import { Box3Data } from "./Box3Array";

const Box3 = () => {
  const { open } = Context();

  return (
    <div
      className={
        open
          ? " 2xl:w-[386.26px] bg-white rounded-lg shadow-lg 2xl:h-[100%] flex flex-col gap-[15px] md:w-[350px] md:h-[300px] "
          : " 2xl:w-[425.3px] 2xl:h-[100%] bg-white md:w-[370px] shadow-lg rounded-lg flex flex-col gap-[20px] md:h-[300px]  "
      }
    >
      {/* top bar */}

      <div
        className={
          open
            ? " 2xl:w-[357px] 2xl:h-[31px] p-[15px] md:w-[300px]  md:h-[25px] flex justify-between place-items-center "
            : " 2xl:w-[393.48px] flex justify-between p-[15px] 2xl:h-[34.13px] md:w-[350px]  md:h-[30px] "
        }
      >
        {/* top bar left */}
        <div
          className={
            open
              ? "2xl:w-[95px] 2xl:h-[24px] 2xl:font-[500] 2xl:text-[16px] 2xl:leading-[24px] md:w-[85px] md:h-[20px] md:font-[500] md:text-[12px] md:leading-[18px] "
              : "2xl:[105px] 2xl:h-[26px] 2xl:font-[500] 2xl:text-[17.63px] 2xl:leading-[26.43px] md:w-[95px] md:h-[23px] md:font-[500] md:text-[14px] md:leading-[23px] "
          }
        >
          Celebration
        </div>

        {/* top right bar */}

        <div
          className={
            open
              ? "2xl:w-[128px] 2xl:h-[31px] md:w-[120px] md:h-[25px] "
              : "2xl:w-[140.94px] 2xl:h-[34.13px] md:w-[125px] md:h-[30px] "
          }
        >
          <select className=" outline-none" name="" id="">
            <option value="">This week</option>
            <option value="">Last week</option>
          </select>
        </div>
      </div>

      <div
        className={
          open
            ? "2xl:w-[100%]  2xl:h-[21px] gap-[30px] flex place-items-center justify-center  md:w-[100%] md:h-[18px]  "
            : "2xl:w-[100%] pt-[20px]  2xl:h-[23px] justify-center flex place-items-center  md:w-[100%] md:h-[20px] "
        }
      >
        <div className="w-full flex justify-between pl-[50px] relative ">
          <div 
            className={
              open
                ? "2xl:w-[67px] 2xl:h-[21px] birth 2xl:font-[400] 2xl:text-[14px] 2xl:leading-[21px] md:w-[60px] md:h-[18px] md:font-[400] md:text-[10px] md:leading-[18px] "
                : "2xl:w-[74px] birth 2xl:h-[23px] 2xl:font-[400] 2xl:text-[15.41px] 2xl:leading-[23.12px] md:w-[70px] md:h-[20px] md:font-[400] md:text-[12px] md:leading-[20px] "
            }
          >
            Birthday
          </div>

          <div
            className={
              open
                ? "2xl:w-[136px] 2xl:h-[21px] 2xl:font-[400] 2xl:text-[14px] 2xl:leading-[21px] md:w-[130px] md:h-[18px] md:font-[400] md:text-[10px] md:leading-[18px] "
                : "2xl:w-[149px] 2xl:h-[23px] 2xl:font-[400] 2xl:text-[15.41px] 2xl:leading-[23.12px] md:w-[140px] md:h-[20px] md:font-[400] md:text-[12px] md:leading-[20px] "
            }
          >
            Anniversary
          </div>
        </div>
      </div>

      {/* images and date */}

      <div className="flex flex-col w-full place-items-center gap-[20px] md:pl-[15px] md:pr-[15px]">
        {/* single image card */}
        {Box3Data.map(({ img, department, name, date }, index) => {
          return (
            <div
              key={index}
              className={
                open
                  ? " 2xl:w-[357.1px] 2xl:h-[50.1px] flex justify-between place-items-center md:w-[320px] md:h-[45px] "
                  : " 2xl:w-[392.63px] 2xl:h-[55.17px] md:w-[350px] flex justify-between place-items-center md:h-[50px] "
              }
            >
              {/* picture and name div */}

              <div
                className={
                  open
                    ? " 2xl:w-[175.1px] 2xl:h-[50.1px] place-items-center flex 2xl:gap-[15px] md:w-[170px] md:h-[45px] md:gap-[10px] "
                    : " 2xl:w-[192.68px] place-items-center flex 2xl:h-[55.17px] 2xl:gap-[16.52px] md:w-[185px] md:h-[50px] md:gap-[11px] "
                }
              >
                <img
                  src={img}
                  alt=""
                  className={
                    open
                      ? "2xl:w-[50.1px] 2xl:h-[50.1px] 2xl:rounded-full md:w-[45.1px] md:h-[45.1px] md:rounded-full "
                      : "2xl:w-[55.17px] 2xl:h-[55.17px] 2xl:rounded-full md:w-[50.17px] md:h-[50.17px] md:rounded-full "
                  }
                />
                {/* name container */}

                <div
                  className={
                    open
                      ? " 2xl:w-[110px] 2xl:h-[39px] flex flex-col md:w-[100px] md:h-[35px] "
                      : " 2xl:w-[121px] 2xl:h-[43px] md:w-[111px] flex flex-col md:h-[39px] "
                  }
                >
                  <span
                    className={
                      open
                        ? " 2xl:font-[500] text-nowrap 2xl:text-[14px] 2xl:leading-[21px] md:font-[500] md:text-[12px] md:leading-[18px] "
                        : " 2xl:font-[500] text-nowrap 2xl:text-[15.41px] 2xl:leading-[23.12px] md:font-[500] md:text-[13px] md:leading-[20px] "
                    }
                  >
                    {name}
                  </span>
                  <small
                    className={
                      open
                        ? " 2xl:font-[400] 2xl:text-[12px] 2xl:leading-[18px] md:font-[400] md:text-[10px] md:leading-[15px] "
                        : " 2xl:font-[400] 2xl:text-[13.21px] 2xl:leading-[19.82px] md:font-[400] md:text-[11px] md:leading-[18px] "
                    }
                  >
                    {department}
                  </small>
                </div>
              </div>

              <div
                className={
                  open
                    ? " 2xl:font-[400] 2xl:text-[14px] 2xl:leading-[21px] md:font-[400] md:text-[12px] md:leading-[18px] "
                    : " 2xl:font-[400] 2xl:text-[15.41px] 2xl:leading-[23.12px] md:font-[400] md:text-[13px] md:leading-[20px] "
                }
              >
                {date}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Box3;
