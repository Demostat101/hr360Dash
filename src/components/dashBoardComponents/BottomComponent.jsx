import { Context } from "../../DashBoardContext";
import Box1 from "./bottomComponents/Box1";
import Box2 from "./bottomComponents/Box2";
import Box3 from "./bottomComponents/Box3";

const BottomComponent = () => {
  const { open } = Context();
  return (
    <main
      className={
        open
          ? "2xl:w-[1127.37px] 2xl:h-[311.1px] flex md:justify-center md:gap-[30px] 2xl:gap-[21px] md:w-[100%] md:h-[100%]"
          : "2xl:w-[1241.3px] md:justify-center md:gap-[30px] 2xl:h-[342.55px] flex 2xl:gap-[23.12px] md:w-[100%] md:h-[100%]"
      }
    >
      <Box1 />
      <Box2 />
      <Box3 />
    </main>
  );
};

export default BottomComponent;
