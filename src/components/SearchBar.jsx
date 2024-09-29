import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchBar = ({ placeholder, onKeywordChange }) => {
  return (
    <div className="w-full flex items-center mb-3 pl-2 pr-2">
      <div className="w-full flex items-center justify-start p-3.5 gap-4 rounded-lg bg-gray-300 border-gray-300 ">
        <IoSearch />
        <input
          className="w-[80%] text-gray-600 bg-gray-300 font-sans text-sm font-normal leading-normal outline-none"
          placeholder={placeholder}
          onChange={(e) => onKeywordChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
