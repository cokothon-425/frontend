import React, { useState } from "react";
import BottomNav from "../../components/BottomNav";
import { useNavigate } from "react-router-dom";
import { privateAxios } from "../../apis/axiosInstances";

function GroupCreatePage() {
  const navigate = useNavigate();

  // 상태 값 관리
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [maxCount, setMaxCount] = useState(0);
  const [book, setBook] = useState({
    title: "1퍼센트 부자들의 법칙",
    author: "가나다",
    cover: "/book_example.png",
    publisher: "출판사 이름",
    isbn: 1234567890123,
  });

  const handleSubmit = async () => {
    try {
      const requestData = {
        name,
        description,
        maxCount,
        book,
      };

      console.log(requestData);

      const response = await privateAxios.post("/groups", requestData);
      console.log("Group created successfully:", response.data);
      navigate("/group"); // 그룹 생성 후 이동할 페이지 설정
    } catch (error) {
      console.error("Error creating group:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="suite-bold text-2xl mb-4">모임 생성</h1>
      
      <div className="grid grid-cols-2 gap-4">
        {/* 왼쪽: 책 커버 */}
        <div>
        <div className="relative">
          <img
            src={book.cover}
            alt="북 커버"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 rounded-b-lg">
            <p className="text-white suite-heavy text-sm">{book.title}</p>
            <p className="text-gray-300 text-xs">{book.author}</p>
          </div>
        </div>
        <div className="my-4 text-center">
            <a href="/book-select" className="text-sm bg-gray-100 p-2 rounded-lg border">책 선택하기</a>
        </div>
        </div>

        {/* 오른쪽: 모임 소개 및 참여 인원 */}
        <div>
          <div className="mb-4">
            <label className="suite-bold block mb-2">모임 이름</label>
            <input
              className="w-full p-2 border rounded-lg"
              placeholder="모임 이름을 입력해주세요"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="suite-bold block mb-2">모임 소개</label>
            <textarea
              className="w-full h-48 p-2 border rounded-lg resize-none"
              placeholder="모임을 소개해주세요"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          
          <div>
            <label className="suite-bold block mb-2">참여 인원</label>
            <input
              type="number"
              className="w-full p-2 border rounded-lg"
              placeholder="참여 인원을 입력해주세요"
              value={maxCount}
              onChange={(e) => setMaxCount(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* 모임 생성 및 다음에 하기 버튼 */}
      <div className="relative bottom-0 left-0 w-full p-4">
        <button 
          onClick={handleSubmit} 
          className="w-full bg-blue-600 text-white p-3 rounded-lg mb-2"
        >
          모임 생성하기
        </button>
        <button onClick={() => navigate(-1)} className="w-full bg-gray-100 text-black p-3 rounded-lg border">다음에 하기</button>
      </div>
      {/* BottomNav도 모든 페이지에 고정 */}
      <BottomNav />
    </div>
  );
}

export default GroupCreatePage;