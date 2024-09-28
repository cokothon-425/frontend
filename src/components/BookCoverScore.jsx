import React from "react";

const BookCoverScore = ({ src, title, author, num, className }) => {
  return (
    <div className={`relative rounded-2xl w-40 ${className}`}>
      <img src={src} alt="북커버" className="w-full h-auto rounded-3xl" />
      <div className="absolute bottom-0 left-0 right-0 p-4 rounded-b-2xl text-white bg-black bg-opacity-50 text-left">
        <p className="text-5xl suite-heavy mb-2">{num}</p>
        {/* 제목 부분에 min-height 추가 */}
        <p className="text-sm suite-heavy whitespace-normal break-words min-h-[3rem]">
          {title}
        </p>
        <p className="text-sm mb-3 whitespace-normal break-words">{author}</p>
      </div>
    </div>
  );
};

export default BookCoverScore;