import React from "react";

const GroupContents = () => {
  return (
    <div className="flex flex-row basis-1/2 justify-around">
      {/* 이미지 부분 */}
      <div className="">
        <img className=" w-15 h-20" src="/book_example.png" alt="error" />
      </div>
      {/* 텍스트 부분 */}
      <div className="">
        <div className=" text-lg">그룹 이름</div>
        <div className=" text-md">책 이름</div>
        <div className=" text-gray-500 text-sm">모임장명 | 3 / 3명</div>
      </div>
    </div>
  );
};

export default GroupContents;
