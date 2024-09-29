import React, { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar";
import BottomNav from "../../components/BottomNav";
import GroupJoinCard from "../../components/Group/GroupJoinCard";
import { privateAxios } from "../../apis/axiosInstances";

function GroupPage() {
  const [groups, setGroups] = useState([]); // 그룹 데이터 상태 변수

  // API 호출 및 상태 업데이트
  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await privateAxios.get(`/groups`);
        console.log(response.data); // 응답 데이터 확인
        setGroups(response.data);   // 받아온 데이터를 상태로 저장
      } catch (error) {
        console.error("Error fetching groups:", error);
      }
    };

    fetchGroups(); // 데이터 호출
  }, []);

  return (
    <div className="mb-20 p-2">
      <h1 className="suite-bold text-2xl mb-4">모임 찾기</h1>
      <SearchBar />

      {/* 그룹 카드들에 간격 추가 */}
      <div className="flex flex-col gap-4">
        {groups.length > 0 ? (
          groups.map((group, index) => (
            <GroupJoinCard
              key={index}
              src={group.book.cover} // 책 커버 이미지
              group_name={group.name} // 그룹 이름
              title={group.book.title} // 책 제목
              author={group.book.author} // 책 저자
              leader={group.leaderName} // 모임장 이름
              user_current={group.currentCount} // 현재 참여자 수
              user_limit={group.maxCount} // 최대 참여자 수
              description={group.description} // 모임 설명
            />
          ))
        ) : (
          <p>모임을 찾을 수 없습니다.</p>
        )}
      </div>
      
      {/* BottomNav도 모든 페이지에 고정 */}
      <BottomNav />
    </div>
  );
}

export default GroupPage;