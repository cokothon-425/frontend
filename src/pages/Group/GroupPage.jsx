import React from "react";
import SearchBar from "../../components/SearchBar";
import BottomNav from "../../components/BottomNav";
import GroupJoinCard from "../../components/Group/GroupJoinCard";

function GroupPage() {
  const groups = [
    {
      src: "/book_example.png",
      group_name: "그룹 이름",
      title: "책 이름",
      author: "모임장 이름",
      user_current: 3,
      user_limit: 5,
    },
    {
      src: "/book_example.png",
      group_name: "그룹 이름",
      title: "책 이름",
      author: "모임장 이름",
      user_current: 3,
      user_limit: 5,
    },
    {
      src: "/book_example.png",
      group_name: "그룹 이름",
      title: "책 이름",
      author: "모임장 이름",
      user_current: 3,
      user_limit: 5,
    },
    {
      src: "/book_example.png",
      group_name: "그룹 이름",
      title: "책 이름",
      author: "모임장 이름",
      user_current: 3,
      user_limit: 5,
    },
    {
      src: "/book_example.png",
      group_name: "그룹 이름",
      title: "책 이름",
      author: "모임장 이름",
      user_current: 3,
      user_limit: 5,
    },
    {
      src: "/book_example.png",
      group_name: "그룹 이름",
      title: "책 이름",
      author: "모임장 이름",
      user_current: 3,
      user_limit: 5,
    },
    {
      src: "/book_example.png",
      group_name: "그룹 이름",
      title: "책 이름",
      author: "모임장 이름",
      user_current: 3,
      user_limit: 5,
    },
  ];

  return (
    <div className="mb-20 p-2">
      <h1 className="suite-bold text-2xl mb-4">모임 찾기</h1>
      <SearchBar />

      {/* 그룹 카드들에 간격 추가 */}
      <div className="flex flex-col gap-4">
        {groups.map((group, index) => (
          <GroupJoinCard
            key={index}
            src={group.src}
            group_name={group.group_name}
            title={group.title}
            author={group.author}
            user_current={group.user_current}
            user_limit={group.user_limit}
          />
        ))}
      </div>
      
      {/* BottomNav도 모든 페이지에 고정 */}
      <BottomNav />
    </div>
  );
}

export default GroupPage;