import React from "react";
import GroupContents from "./GroupContents";

const Group = () => {
  return (
    <div className="flex flex-row border rounded-2xl shadow-md text-black items-center mb-2">
      <GroupContents />
    </div>
  );
};

export default Group;
