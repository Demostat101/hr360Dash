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
          ? "w-[100%] h-[311.1px] flex gap-[21px]"
          : "w-[100%] h-[342.55px] flex gap-[23.12px]"
      }
    >
      <Box1 />
      <Box2 />
      <Box3 />
    </main>
  );
};

export default BottomComponent;
