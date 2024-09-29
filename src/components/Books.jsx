import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Books = ({ src, title, author, publisher, isbn }) => {
  const navigate = useNavigate();

  useEffect(() => {
  }, [title, author]);

  return (
    <div className="flex flex-row border rounded-2xl shadow-md text-black items-center mb-1 p-2">
      {/* 이미지 및 텍스트 부분 */}
      <div className="flex flex-row basis-3/4 justify-start items-center">
        {/* 이미지 부분 */}
        <div className="mr-4">
          <img className="w-15 h-20 object-cover" src={src} alt="책 이미지" />
        </div>
        {/* 텍스트 부분 */}
        <div>
          <div className="w-[190px] truncate text-lg font-semibold">{title}</div>
          <div className="text-md text-gray-600">{author}</div>
        </div>
      </div>

      {/* 버튼 부분 */}
      <div className="flex justify-center items-center basis-1/4">
        <button
          onClick={() =>
            navigate(`/group-creation?title=${title}&author=${author}&cover=${src}&isbn=${isbn}&publisher=${publisher}`)
          }
          className="p-3 bg-indigo-700 text-center rounded-xl text-white font-bold">
          선택하기
        </button>
      </div>
    </div>
  );
};

export default Books;
