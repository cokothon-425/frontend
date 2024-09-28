import BookCoverScore from "../components/BookCoverScore";
import GroupShowCard from "../components/Group/GroupShowCard";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";

function Home() {
  const navigate = useNavigate();
  const books = [
    { src: "/book_example.png", title: "1퍼센트 부자들의 법칙", author: "가나다", num: "1" },
    { src: "/book_example.png", title: "난장이가 쏘아 올린 작은 공", author: "작가", num: "2" },
    { src: "/book_example.png", title: "책 제목", author: "작가", num: "3" },
    { src: "/book_example.png", title: "책 제목", author: "작가", num: "4" },
    { src: "/book_example.png", title: "책 제목", author: "작가", num: "5" },
  ];

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

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="mb-20 p-2">
      <h3 className="suite-extrabold mb-2 text-xl pl-4 pt-4">모임 인기 책</h3>
      <div className="overflow-x-auto whitespace-nowrap">
        <div className="inline-flex gap-4">
          {books.map((book, index) => (
            <BookCoverScore
              key={index}
              src={book.src}
              title={book.title}
              author={book.author}
              num={book.num}
            />
          ))}
        </div>
      </div>
      <div className="mr-2 ml-2">
        <h3 className="suite-extrabold mb-2 text-xl mt-4">참여 중인 모임</h3>
        {/* 그룹 카드 간격 추가 */}
        <div className="flex flex-col gap-4">
          {groups.map((group, index) => (
            <GroupShowCard
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
      </div>
      {/* BottomNav도 모든 페이지에 고정 */}
      <BottomNav />
    </div>
  );
}

export default Home;