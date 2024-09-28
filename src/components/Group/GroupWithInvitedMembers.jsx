import React from "react";
import GroupContents from "./GroupContents";
import InvitedMembers from "./InvitedMembers";
import InvitationButton from "./InvitationButton";

const GroupWithInvitedMembers = () => {
  return (
    <div className="flex flex-row border-2 justify-between rounded-md shadow-xl text-black items-center">
      <GroupContents />
      <InvitedMembers />
      <InvitationButton />
    </div>
  );
};

export default GroupWithInvitedMembers;
