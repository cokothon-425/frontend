import { useState } from "react";
import "./App.css";
import Group from "./components/Group/Group";
import GroupWithInvitationButton from "./components/Group/GroupWithInvitationButton";
import GroupWithInvitedMembers from "./components/Group/GroupWithInvitedMembers";

function App() {
  return (
    <div className="bg-white font-black text-white p-4">
      <h1 className="text-3xl font-bold">TailwindCSS가 작동합니다!</h1>
      <Group />
      <GroupWithInvitationButton />
      <GroupWithInvitedMembers />
    </div>
  );
}

export default App;
