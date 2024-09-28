//책 검색 페이지

import React, { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar";
import Books from "../../components/Books";

const groups = [
    {
      src: "/book_example.png",
      title: "1퍼센트 부자들의 법칙",
      author: "저자 이름",
    },
    {
      src: "/book_example.png",
      title: "난장이가 쏘아 올린 작은 공",
      author: "저자 이름",
    },
    {
      src: "/book_example.png",
      title: "책 제목",
      author: "저자 이름",
    },
    {
      src: "/book_example.png",
      title: "책 제목",
      author: "저자 이름",
    },
    {
      src: "/book_example.png",
      title: "책 제목",
      author: "저자 이름",
    },
  ];

function BookSelectPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(groups);
    console.log(books.length);
  }, []);

  return (
    <div>
      <h3 className="suite-extrabold mb-2 text-xl ml-2">책 찾기</h3>{" "}
      <SearchBar />
      {(books.length > 0) ? books.map((book, index) => {
            console.log('length: ' + books.length);
            return <Books key={index} src={book.src} title={book.title} author={book.author} />
        }) : null}
    </div>
  );
}

export default BookSelectPage;
