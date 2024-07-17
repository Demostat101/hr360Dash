import { Context } from "../DashBoardContext";
import BottomComponent from "../components/dashBoardComponents/BottomComponent";
import MiddleComponent from "../components/dashBoardComponents/MiddleComponent";
import TopComponent from "../components/dashBoardComponents/TopComponent";

const DashBoard = () => {
  const { open, name } = Context();
  return (
    <main className="w-full flex flex-col min-h-screen p-[25px] border-solid border-2 border-red-500">
      <div
        className={
          open
            ? "w-[100%] border-solid border-2 border-yellow-500 h-[978.82px] "
            : "w-[100%]  h-[1077.8px] border-solid border-2 border-green-500 "
        }
      >
        <h1
          className={
            !open
              ? "font-[600] text-[28.63px] leading-[42.94px]"
              : "font-[600] text-[26px] leading-[39px]"
          }
        >
          Good Morning, {name}{" "}
        </h1>
        {/* container holding all contents */}
        <div
          className={
            open
              ? "w-[100%] 2xl:h-[914.82px] mt-[23px] flex flex-col gap-[25px]"
              : "w-[100%] 2xl:h-[1007.28px]  mt-[50px] flex flex-col gap-[27.53px]"
          }
        >
          <TopComponent />
          <MiddleComponent />
          <BottomComponent />
        </div>
      </div>
    </main>
  );
};

export default DashBoard;
