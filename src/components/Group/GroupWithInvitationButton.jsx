import React from "react";
import GroupContents from "./GroupContents";
import InvitationButton from "./InvitationButton";

const GroupWithInvitationButton = () => {
  return (
    <div className="flex flex-row border-2 justify-between rounded-md shadow-xl text-black  items-center">
      <GroupContents />
      <InvitationButton />
    </div>
  );
};

export default GroupWithInvitationButton;
