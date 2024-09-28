import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchBar = ({ placeholderText }) => {
  return (
    <div className="w-full flex items-center mb-3 pl-2 pr-2">
      <div className="w-full flex items-center justify-start p-3.5 gap-4 rounded-lg bg-gray-300 border-gray-300 ">
        <IoSearch />
        <input
          className="text-gray-600 bg-gray-300 font-sans text-sm font-normal leading-normal"
          placeholder="책 이름으로 모임 검색.."
        />
      </div>
    </div>
  );
};

export default SearchBar;
