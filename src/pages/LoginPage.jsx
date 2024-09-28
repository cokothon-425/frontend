import React from "react";

function LoginPage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {/* 제목 섹션 */}
      <div className="text-center mb-8">
        <h1 className="text-2xl suite-bold text-blue-600 santokki">책 읽기, 모두 다함께</h1>
        <h2 className="text-5xl suite-bold text-blue-600 sulphur-point-bold">readwith</h2>
      </div>

      {/* 카카오 로그인 버튼 */}
      <button className="flex items-center bg-yellow-400 p-3 rounded-full shadow-md text-black text-lg">
        <img src="/kakao-icon.png" alt="카카오 아이콘" className="w-6 h-6 mr-2" />
        카카오 로그인
      </button>
    </div>
  );
}

export default LoginPage;