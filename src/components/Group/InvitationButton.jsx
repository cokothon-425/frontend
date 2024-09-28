import React from "react";
import { FaUserGroup } from "react-icons/fa6";

const InvitationButton = () => {
  return (
    <div className="flex">
      <div className="flex flex-row justify-center items-center rounded-md text-black basis-1/4 mr-2">
      <FaUserGroup /> <div>0</div> <div>/</div> <div>0</div>
      </div>
      <div className="flex justify-center items-center basis-1/4 mr-4">
        <button className="w-[60px] h-[30px] items-center bg-indigo-700  rounded-xl">
          <p className="text-white suite-bold">참가</p>
        </button>
      </div>
    </div>

  );
};

export default InvitationButton;
