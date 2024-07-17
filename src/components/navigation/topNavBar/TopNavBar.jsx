import React, { useState } from "react";
import Pic from "/src/assets/woman.jfif";
import { FaBars } from "react-icons/fa";
import SearchInput from "../../dashBoardComponents/SearchInput";
import { Context } from "../../../DashBoardContext";

const TopNavBar = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { open, handleOpenBar } = Context();

  return (
    <>
      <header
        className={
          !open
            ? "w-[100%] border-solid pl-[25px] pr-[35px] bg-[#FFFFFF] border-r h-[86px] flex flex-col justify-center"
            : "w-[100%] border-solid pl-[25px] pr-[35px] bg-[#FFFFFF] h-[78px] flex flex-col justify-center"
        }
      >
        <div
          className={
            open
              ? "w-[100%] bg-[#FFFFFF] h-[58px] flex-1 flex justify-between place-items-center"
              : "w-[100%] bg-[#FFFFFF] h-[63.85px] flex-1 flex justify-between place-items-center"
          }
        >
          <div className="cursor-pointer" onClick={handleOpenBar}>
            {open ? (
              <FaBars size={25} className="text-[#176B87]" />
            ) : (
              <FaBars size={25} className="text-[#176B87]" />
            )}
          </div>
          <div className="flex place-items-center w-[50%] h-[58px] bg-[#FFFFFF]">
            <SearchInput />
            <div className="relative w-[50px] h-[50px] bg-[#FFFFFF]">
              <img
                src={Pic}
                alt="siteImage"
                className="w-[50px] h-[50px] rounded-full ml-4 bg-[#FFFFFF]"
              />
              <span
                className={
                  isLogin
                    ? " absolute w-[8.57px] h-[8.57px] bg-[#16E704] rounded-full top-9 right-[-18px]"
                    : " absolute  w-[8.57px] h-[8.57px] bg-red-600 rounded-full top-9 right-[-18px]"
                }
              ></span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default TopNavBar;
