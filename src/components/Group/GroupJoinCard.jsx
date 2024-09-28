import React from "react";
import { FaUserGroup } from "react-icons/fa6";

const GroupJoinCard = ({src, group_name, title, author, user_current, user_limit}) => {
  return (
    <div className="flex items-center bg-white shadow-md rounded-2xl p-4 w-full mx-auto justify-between">
        {/* 책 이미지와 텍스트 정보 */}
        <div className="flex items-center">
            {/* 책 이미지 */}
            <div className="w-14">
                <img 
                    src={src}
                    alt="이미지"
                    className="w-full rounded-md"
                />
            </div>

            {/* 텍스트 정보 */}
            <div className="flex flex-col ml-4">
                <h2 className="text-md font-bold text-gray-800">{group_name}</h2>
                <p className="text-sm text-gray-600">{title}</p>
                <p className="text-sm text-gray-500">{author}</p>
            </div>
        </div>

        {/* 참가 정보 */}
        <div className="flex items-center">
            {/* 참가 인원 */}
            <div className="flex items-center mr-2">
                <FaUserGroup />
                <span className="text-gray-800 ml-1">{user_current}/{user_limit}</span>
            </div>
            {/* 참가 버튼 */}
            <button className="bg-indigo-600 text-white text-sm suite-bold rounded-xl px-4 py-2">
                참가
            </button>
        </div>
    </div>
    );
};

export default GroupJoinCard;