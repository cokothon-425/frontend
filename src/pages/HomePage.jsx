import BookCoverScore from "../components/BookCoverScore";
import GroupShowCard from "../components/Group/GroupShowCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import { privateAxios } from "../apis/axiosInstances";

function Home() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);

  const [groups, setGroups] = useState([]); // 그룹 데이터 상태 변수

  // API 호출 및 상태 업데이트
  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await privateAxios.get(`/home`);
        console.log(response.data);
        setBooks(response.data.hotBooks);// 응답 데이터 확인
        setGroups(response.data.groups);
        if (response.data.userName) {
            localStorage.setItem("userName", response.data.userName);
        }
      } catch (error) {
        console.error("Error fetching groups:", error);
      }
    };

    fetchGroups(); // 데이터 호출
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  // 그룹 상세 페이지로 이동하는 함수
  const handleGroupClick = (groupId) => {
    console.log(`Clicked group ID: ${groupId}`);
    navigate(`/group/${groupId}`); // groupId를 기반으로 그룹 상세 페이지로 이동
  };

  return (
    <div className="mb-20 p-2">
      <h3 className="suite-extrabold mb-2 text-xl pl-4 pt-4">모임 인기 책</h3>
      <div className="overflow-x-auto whitespace-nowrap">
        <div className="inline-flex gap-4">
          {books.map((book, index) => (
            <BookCoverScore
              key={index}
              src={book.cover}
              title={book.title}
              author={book.author}
              num={book.num}
            />
          ))}
        </div>
      </div>
      <div className="mr-2 ml-2">
        <h3 className="suite-extrabold mb-2 text-xl mt-4">참여 중인 모임</h3>
        {/* 그룹 카드들에 간격 추가 */}
        <div className="flex flex-col gap-4">
          {groups.length > 0 ? (
            groups.map((group, index) => (
              <GroupShowCard
                key={index}
                src={group.book.cover} // 책 커버 이미지
                group_name={group.name} // 그룹 이름
                title={group.book.title} // 책 제목
                author={group.book.author} // 책 저자
                leader={group.leaderName} // 모임장 이름
                user_current={group.currentCount} // 현재 참여자 수
                user_limit={group.maxCount} // 최대 참여자 수
                description={group.description} // 모임 설명
                onClick={() => handleGroupClick(group.id)} // 그룹 ID로 이동
              />
            ))
          ) : (
            <p>모임을 찾을 수 없습니다.</p>
          )}
        </div>
      </div>
      {/* BottomNav도 모든 페이지에 고정 */}
      <BottomNav />
    </div>
  );
}

export default Home;
