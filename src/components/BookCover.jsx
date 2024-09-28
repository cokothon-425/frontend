import React from "react";

const BookCover = ({ src, title, author, className }) => {
  return (
    <div className={`relative rounded-2xl ${className}`}> {/* 부모 요소에 relative 추가 */}
      <img src={src} alt="북커버" className="w-full h-auto rounded-3xl" />
      {/* 이미지 좌하단에 글씨 넣기 */}
      <div className="absolute bottom-0 left-0 right-0 p-4 rounded-b-2xl text-white bg-black bg-opacity-50 text-left">
        <p className="text-sm suite-heavy">{title}</p>
        <p className="text-xs mb-10">{author}</p>
      </div>
    </div>
  );
};

export default BookCover;