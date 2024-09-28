import BookCoverScore from "../components/BookCoverScore";
import Group from "../components/Group/Group";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
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

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate("/login");
    }
  }, []);

  const groups = Array(5).fill(null); // 그룹은 단순히 5개로 반복

  return (
    <div className="mb-20">
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
        <div className=" mr-2 ml-2">
            <h3 className="suite-extrabold mb-2 text-xl mt-4">참여 중인 모임</h3>
            {groups.map((_, index) => (
                <Group key={index} />
            ))}
        </div>
        {/* BottomNav도 모든 페이지에 고정 */}
        <BottomNav />
    </div>
  );
}

export default Home;
