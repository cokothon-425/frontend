import React from "react";
import GroupContents from "./GroupContents";
import InvitationButton from "./InvitationButton";

const GroupWithInvitedMembers = () => {
  return (
    <div className="flex flex-row border-2 justify-between rounded-2xl shadow-md text-black items-center mb-4 mr-2 ml-2">
      <GroupContents />
      <InvitationButton />
    </div>
  );
};

export default GroupWithInvitedMembers;
