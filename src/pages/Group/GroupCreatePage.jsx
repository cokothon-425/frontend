import React from "react";
import BottomNav from "../../components/BottomNav";

function GroupCreatePage() {
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="suite-bold text-2xl mb-4">모임 생성</h1>
      
      <div className="grid grid-cols-2 gap-4">
        {/* 왼쪽: 책 커버 */}
        <div>
        <div className="relative">
          <img
            src="/book_example.png"
            alt="북 커버"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 rounded-b-lg">
            <p className="text-white suite-heavy text-sm">1퍼센트 부자들의 법칙</p>
            <p className="text-gray-300 text-xs">가나다</p>
          </div>
        </div>
        <div className="my-4 text-center">
            <button className="text-sm bg-gray-100 p-2 rounded-lg border">책 선택하기</button>
        </div>
        </div>

        {/* 오른쪽: 모임 소개 및 참여 인원 */}
        <div>
          <div className="mb-4">
            <label className="suite-bold block mb-2">모임 소개</label>
            <textarea
              className="w-full h-24 p-2 border rounded-lg"
              placeholder="모임을 소개해주세요"
            />
          </div>
          
          <div>
            <label className="suite-bold block mb-2">참여 인원</label>
            <input
              type="number"
              className="w-full p-2 border rounded-lg"
              placeholder="참여 인원을 입력해주세요"
            />
          </div>
        </div>
      </div>

      {/* 모임 생성 및 다음에 하기 버튼 */}
      <div className="mt-8">
        <button className="w-full bg-blue-600 text-white p-3 rounded-lg mb-2">모임 생성하기</button>
        <button className="w-full bg-gray-100 text-black p-3 rounded-lg border">다음에 하기</button>
      </div>
      {/* BottomNav도 모든 페이지에 고정 */}
      <BottomNav />
    </div>
  );
}

export default GroupCreatePage;