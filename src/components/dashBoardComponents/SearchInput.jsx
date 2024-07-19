import React from "react";
import { CiSearch } from "react-icons/ci";
import { LiaSlidersHSolid } from "react-icons/lia";

const SearchInput = () => {
  return (
    <form
      className="w-[100%] h-[58px] bg-[
#ECEEF6] flex flex-col place-items-center border-solid border-2 shadow-sm rounded-md p-[15px]"
onSubmit={e=> e.preventDefault()}
    >
      <div className=" w-[100%] h-[100%]  flex justify-between place-items-center pr-[25px]">
        <div className="flex h-full place-items-center w-full gap-6 pl-[25px]">
          <CiSearch
            size={24}
            className="text-[
#C6C6C6]"
          />
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-full outline-none"
          />
        </div>
        <LiaSlidersHSolid size={24} className="text-[#969696]" />
      </div>
    </form>
  );
};

export default SearchInput;
