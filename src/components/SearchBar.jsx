import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchBar = ({ placeholderText }) => {
  return (
    <div className="w-full flex items-center mb-3">
      <div className="w-full flex items-center justify-start p-3.5 gap-4 rounded-lg border border-gray-300 bg-white shadow-[0px_2px_8px_rgba(228,231,236,0.7)] focus-within:border-blue-500 focus-within:shadow-[0px_0px_8px_rgba(21,112,239,0.3)]">
        <IoSearch />
        <input
          className="w-full outline-none border-none text-[17px] font-medium text-gray-500 focus:text-gray-800"
          placeholder="책 이름으로 모임 검색.."
        />
      </div>
    </div>
  );
};

export default SearchBar;
