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
    <div className="mb-20">
      <h1 className="suite-bold text-2xl mb-4 pl-4 pt-4">모임 찾기</h1>
      <SearchBar />
      {groups.map((group, index) => (
        <GroupWithInvitedMembers key={index} group={group} />
      ))}
    </div>
  );
}

export default GroupPage;
