import React from "react";
import SearchBar from "../../components/SearchBar";
import GroupWithInvitedMembers from "../../components/Group/GroupWithInvitedMembers";

function GroupPage() {
  const groups = [
    {
      src: "/book_example.png",
      title: "1퍼센트 부자들의 법칙",
      introduction: "모임 소개",
      groupname: "모임장 이름",
    },
    {
      src: "/book_example.png",
      title: "난장이가 쏘아 올린 작은 공",
      introduction: "모임 소개",
      groupname: "모임장 이름",
    },
    {
      src: "/book_example.png",
      title: "책 제목",
      introduction: "모임 소개",
      groupname: "모임장 이름",
    },
    {
      src: "/book_example.png",
      title: "책 제목",
      introduction: "모임 소개",
      groupname: "모임장 이름",
    },
    {
      src: "/book_example.png",
      title: "책 제목",
      introduction: "모임 소개",
      groupname: "모임장 이름",
    },
  ];

  return (
    <div>
      <h3 className="font-extrabold mb-2 text-xl ml-2">모임 찾기</h3>{" "}
      <SearchBar />
      {groups.map((group, index) => (
        <GroupWithInvitedMembers key={index} group={group} />
      ))}
    </div>
  );
}

export default GroupPage;
