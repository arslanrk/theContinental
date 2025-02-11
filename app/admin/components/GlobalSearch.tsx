import React from "react";
import { CiSearch } from "react-icons/ci";

const GlobalSearch = () => {
  return (
    <div className="relative">
      <CiSearch
        color="#fff"
        size={20}
        className="absolute top-[7px] left-[5px]"
      />
      <input
        type="text"
        placeholder="Search..."
        className="outline-none bg-[#2b2b2b] rounded-lg px-8 py-1 text-white"
      />
    </div>
  );
};

export default GlobalSearch;
