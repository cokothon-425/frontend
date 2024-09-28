import React from "react";

const GroupContents = () => {
  return (
    <div className="flex flex-row basis-1/2 justify-around">
      {/* 이미지 부분 */}
      <div className="">
        <img className="max-w-full max-h-full" src="" alt="error" />
      </div>
      {/* 텍스트 부분 */}
      <div className="">
        <div>Group name</div>
        <div>책 이름</div>
        <div>모임 소개</div>
        <div>모임장 이름</div>
      </div>
    </div>
  );
};

export default GroupContents;
