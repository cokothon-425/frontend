import React from "react";
import GroupContents from "./GroupContents";

const Group = () => {
  return (
    <div className="flex flex-row border-2 rounded-md shadow-xl text-black items-center">
      <GroupContents />
    </div>
  );
};

export default Group;
