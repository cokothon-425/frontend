import React from "react";
import { FaUserGroup } from "react-icons/fa6";

const InvitationButton = () => {
  return (
    <div className="flex">
      <div className="flex flex-row justify-center items-center rounded-md text-black basis-1/4 mr-2">
      <FaUserGroup /> <div>0</div> <div>/</div> <div>0</div>
      </div>
      <div className="flex justify-center items-center basis-1/4 mr-4">
        <a href="/group/0" className=" w-14 p-1 items-center bg-indigo-700 text-center rounded-xl">
          <p className="text-white suite-bold">참가</p>
        </a>
      </div>
    </div>

  );
};

export default InvitationButton;
