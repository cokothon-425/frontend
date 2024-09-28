import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 특정 경로에서만 뒤로 가기 버튼을 표시하는 조건 설정
  const showBackButton = location.pathname !== '/'; // '/'는 로그인 페이지로 가정

  return (
    <div className="sticky top-0 backdrop-blur-md m-0 p-3 z-50 bg-white bg-opacity-80 flex items-center">
      {showBackButton && (
        <button
          onClick={() => navigate(-1)} // 뒤로 가기 동작
          className="text-indigo-700 font-bold text-lg"
        >
          ← 
        </button>
      )}
      <h1 className="sulphur-point-bold text-indigo-700 text-3xl">readwith</h1>
    </div>
  );
};

export default Topbar;