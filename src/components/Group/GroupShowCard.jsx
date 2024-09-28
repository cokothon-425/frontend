import React from "react";
import { FaUserGroup } from "react-icons/fa6";

const GroupShowCard = ({ src, group_name, title, author, user_current, user_limit, onClick }) => {
  return (
    <div
      className="flex items-center bg-white shadow-md rounded-2xl p-2 w-full mx-auto cursor-pointer hover:bg-gray-100 transition"
      onClick={onClick} // 카드 클릭 시 실행할 함수
    >
      {/* 책 이미지와 텍스트 정보 */}
      <div className="flex items-center">
        {/* 책 이미지 */}
        <div className="w-14">
          <img src={src} alt="이미지" className="w-full rounded-md" />
        </div>

        {/* 텍스트 정보 */}
        <div className="flex flex-col ml-4">
          <h2 className="text-md font-bold text-gray-800">{group_name}</h2>
          <p className="text-sm text-gray-700">{title}</p>
          <p className="text-sm text-gray-500">
            {author}, {user_current}/{user_limit}명
          </p>
        </div>
      </div>
    </div>
  );
};

export default GroupShowCard;