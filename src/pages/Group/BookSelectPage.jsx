//책 검색 페이지

import React, {useEffect, useRef, useState} from "react";
import SearchBar from "../../components/SearchBar";
import Books from "../../components/Books";
import {privateAxios} from "../../apis/axiosInstances.js";

const bookDemo = [
  {
    publisher: "길벗",
    cover: "/book_example.png",
    title: "1퍼센트 부자들의 법칙",
    author: "저자 이름",
    isbn: 123123123123,
  },
  {
    publisher: "길벗",
    cover: "/book_example.png",
    title: "1퍼센트 부자들의 법칙",
    author: "저자 이름",
    isbn: 123123123123,
  },
  {
    publisher: "길벗",
    cover: "/book_example.png",
    title: "1퍼센트 부자들의 법칙",
    author: "저자 이름",
    isbn: 123123123123,
  },
  {
    publisher: "길벗",
    cover: "/book_example.png",
    title: "1퍼센트 부자들의 법칙",
    author: "저자 이름",
    isbn: 123123123123,
  },
];

function BookSelectPage() {
  const [books, setBooks] = useState([]);
  const [keyword, setKeyword] = useState("");

  const handleKeywordChange = async(text) => {
    setKeyword(text);
    await privateAxios.get(`/books/search?keyword=${keyword}`)
      .then((response) => {
        console.log(`books: ${JSON.stringify(response.data)}`);
        setBooks(response.data);
      })
  }

  return (
    <div>
      <h3 className="suite-extrabold mb-2 text-xl ml-2">책 찾기</h3>{" "}
      <SearchBar
        placeholder={'책 이름으로 모임 검색하기'}
        onKeywordChange={(text) => handleKeywordChange(text)}
      />
      {(books.length > 0) ? books.map((book, index) => {
            console.log('length: ' + books.length);
            return <Books key={index} src={book.cover} title={book.title} author={book.author} isbn={book.isbn} publisher={book.publisher} />
        }) : null}
    </div>
  );
}

export default BookSelectPage;
