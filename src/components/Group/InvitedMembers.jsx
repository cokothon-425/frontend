import React from "react";
import { FaUserGroup } from "react-icons/fa6";

const InvitedMembers = () => {
  return (
    <div className="flex flex-row justify-center items-center rounded-md text-black basis-1/4">
      <FaUserGroup /> <div>현재 인원</div> <div>/</div> <div>전체 인원</div>
    </div>
  );
};

export default InvitedMembers;
