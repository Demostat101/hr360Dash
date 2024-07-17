import { Context } from "../../DashBoardContext";
import Events from "./bottomComponents/Events";
import Announcements from "./bottomComponents/Announcements";
import Celebration from "./bottomComponents/Celebration";

const BottomComponent = () => {
  const { open } = Context();
  return (
    <main
      className={
        open
          ? "w-[100%] h-[311.1px] open-container "
          : "w-[100%] h-[342.55px] close-container "
      }
    >
      <Events />
      <Announcements />
      <Celebration />
    </main>
  );
};

export default BottomComponent;
