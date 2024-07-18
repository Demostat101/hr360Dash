import { Context } from "../../../DashBoardContext";
import { Box3Data } from "./CelebrationArray";

const Box3 = () => {
  const { open } = Context();

  return (
    <div
      className={
        open
          ? " w-[100%] bg-white rounded-lg shadow-lg pt-[15px] h-[100%] flex flex-col gap-[15px]"
          : " w-[100%] h-[100%] bg-white shadow-lg rounded-lg  pt-[15px] flex flex-col gap-[20px]"
      }
    >
      {/* top bar */}

      <div
        className={
          open
            ? " w-[100%] h-[31px] p-[15px] flex justify-between place-items-center "
            : " w-[100%] flex justify-between p-[15px] h-[34.13px] place-items-center"
        }
      >
        {/* top bar left */}
        <div
          className={
            open
              ? "w-[95px] h-[24px] font-[500] text-[16px] leading-[24px] "
              : "w-[105px] h-[26px] font-[500] text-[17.63px] leading-[26.43px]"
          }
        >
          Celebration
        </div>

        {/* top right bar */}

        <div
          className={
            open
              ? "w-[128px] h-[31px] flex flex-col justify-center place-items-center rounded-lg border-[#E3EFF3] border-solid border-2"
              : "w-[140.94px] h-[34.13px] flex flex-col justify-center place-items-center rounded-lg border-[#E3EFF3] border-solid border-2"
          }
        >
          <select className=" outline-none bg-white" name="" id="">
            <option value="" className="bg-white">This week</option>
            <option value="" className="bg-white">Last week</option>
          </select>
        </div>
      </div>

      <div
        className={
          open
            ? "w-[100%]  h-[21px] gap-[30px] flex place-items-center justify-center"
            : "w-[100%] pt-[20px]  h-[23px] justify-center flex place-items-center"
        }
      >
        <div className="w-full flex justify-between pl-[50px] relative ">
          <div
            className={
              open
                ? "w-[67px] h-[21px] birth font-[400] text-[14px] leading-[21px]"
                : "w-[74px] birth h-[23px] font-[400] text-[15.41px] leading-[23.12px]"
            }
          >
            Birthday
          </div>

          <div
            className={
              open
                ? "w-[136px] h-[21px] font-[400] text-[14px] leading-[21px]"
                : "w-[149px] h-[23px] font-[400] text-[15.41px] leading-[23.12px]"
            }
          >
            Anniversary
          </div>
        </div>
      </div>
      <hr />

      {/* images and date */}

      <div
        className={
          open
            ? "flex flex-col w-full place-items-center gap-[20px]"
            : "flex flex-col w-full place-items-center gap-[20px]"
        }
      >
        {/* single image card */}
        {Box3Data.map(({ img, department, name, date }, index) => {
          return (
            <div
              key={index}
              className={
                open
                  ? " w-[100%] h-[50.1px] flex justify-between place-items-center pl-[15px] pr-[15px]"
                  : " w-[100%] h-[55.17px] flex justify-between place-items-center pl-[15px] pr-[15px]"
              }
            >
              {/* picture and name div */}

              <div
                className={
                  open
                    ? " w-[175.1px] h-[50.1px] place-items-center flex gap-[15px]"
                    : " w-[192.68px] place-items-center flex h-[55.17px] gap-[16.52px]"
                }
              >
                <img
                  src={img}
                  alt=""
                  className={
                    open
                      ? "w-[50.1px] h-[50.1px] rounded-full object-cover"
                      : "w-[55.17px] h-[55.17px] rounded-full object-cover"
                  }
                />
                {/* name container */}

                <div
                  className={
                    open
                      ? " w-[110px] h-[39px] flex flex-col"
                      : " w-[121px] h-[43px] flex flex-col"
                  }
                >
                  <span
                    className={
                      open
                        ? " font-[500] text-nowrap text-[14px] leading-[21px]"
                        : " font-[500] text-nowrap text-[15.41px] leading-[23.12px]"
                    }
                  >
                    {name}
                  </span>
                  <small
                    className={
                      open
                        ? " font-[400] text-[12px] leading-[18px]"
                        : " font-[400] text-[13.21px] leading-[19.82px]"
                    }
                  >
                    {department}
                  </small>
                </div>
              </div>

              <div
                className={
                  open
                    ? " font-[400] text-[14px] leading-[21px]"
                    : " font-[400] text-[15.41px] leading-[23.12px]"
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
