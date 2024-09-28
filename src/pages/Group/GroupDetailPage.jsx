import React, { useEffect, useState } from 'react';
import BookCover from "../../components/BookCover";
import BookComment from "../../components/BookComment";
import BookComment_start from "../../components/BookComment_start";
import BookComment_end from "../../components/BookComment_end";
import BottomNav from "../../components/BottomNav";
import { useParams } from 'react-router-dom';
import { privateAxios } from '../../apis/axiosInstances';

const GroupDetailPage = () => {
    const { groupId } = useParams();
    const [isWriting, setIsWriting] = useState(false); // 글쓰기 상태 관리
    const [currentText, setCurrentText] = useState(''); // 글자 수 상태 관리
    const [readingStatus, setReadingStatus] = useState('before'); // 독서 상태 관리
    const [pagesRead, setPagesRead] = useState({ start: '', end: '' }); // 읽은 페이지 범위 관리
    const [selectedUser, setSelectedUser] = useState(0); // 선택된 사용자 인덱스 관리

    // 사용자 배열 (예시 데이터)
    const users = [
        { name: "홍길동", comment: "댓글", page_start: "001", page_end: "100", date: "2024. 09. 29" },
        { name: "이순신", comment: "댓글", page_start: "101", page_end: "200", date: "2024. 09. 29" },
        { name: "강감찬", comment: "댓글", page_start: "201", page_end: "300", date: "2024. 09. 29" },
        { name: "유관순", comment: "댓글", page_start: "301", page_end: "400", date: "2024. 09. 29" },
        { name: "김길동", comment: "댓글", page_start: "301", page_end: "400", date: "2024. 09. 29" },
        { name: "이길동", comment: "댓글", page_start: "301", page_end: "400", date: "2024. 09. 29" },
        { name: "박길동", comment: "댓글", page_start: "301", page_end: "400", date: "2024. 09. 29" },
        { name: "최길동", comment: "댓글", page_start: "301", page_end: "400", date: "2024. 09. 29" },
        { name: "정길동", comment: "댓글", page_start: "301", page_end: "400", date: "2024. 09. 29" },

        { name: "세종대왕", comment: "세종대왕의 첫 번째 댓글", page_start: "401", page_end: "500", date: "2024. 09. 29" }
    ];

    useEffect(async () => {
        await privateAxios.get(`/groups/${groupId}`)
        .then((response) => {
            console.log(response.data);    
        }).catch((error) => {
            console.error(error);
        });
    }, []);

    // 글자 수 계산
    const handleTextChange = (e) => {
        setCurrentText(e.target.value);
    };

    return (
        <div className="flex flex-col items-start justify-start min-h-screen bg-white p-4 mb-20">
            <h1 className="text-2xl font-bold text-gray-800 mb-1">
                1퍼센트 부자가 되어보자 모임
            </h1>
            <p className="text-base text-gray-600 mb-4">
                6 / 7명 참여 중
            </p>
            <div className="w-full bg-gray-200 p-4 rounded-lg flex">
                <div className="w-1/2"> 
                    <BookCover 
                        src="/book_example.png" 
                        title="1퍼센트 부자들의 법칙"              
                        author="가나다"          
                        num={7}                       
                        className="text-lg"   
                    />
                </div>
                <div className="w-1/2 flex items-start ml-4">
                    <p className="text-base font-bold text-gray-800">
                        1퍼센트 부자들의 법칙
                    </p>
                </div>
            </div>

            {/* 사용자 선택 원 */}
            <div className="w-full mt-6 overflow-x-scroll flex space-x-4 p-4">
                {users.map((user, index) => (
                    <div 
                        key={index}
                        onClick={() => setSelectedUser(index)} // 사용자를 선택
                        className={`w-12 h-12 ${selectedUser === index ? 'bg-blue-300' : 'bg-gray-300'} rounded-full flex-shrink-0 flex items-center justify-center cursor-pointer`}
                    >
                        <span className="text-sm text-white">{user.name[0]}</span> {/* 사용자의 이름 첫 글자 */}
                    </div>
                ))}
            </div>

            <div className="mt-4">
                <p className="text-2xl font-bold text-gray-800">{users[selectedUser].name}</p> {/* 선택된 사용자 이름 */}
            </div>

            <div className="mt-4 w-full">
                {/* + 새 글 쓰기 버튼 또는 작성 폼 */}
                {!isWriting ? (
                    <div 
                        onClick={() => setIsWriting(true)} // 버튼 클릭 시 작성 폼으로 변경
                        className="cursor-pointer flex justify-center items-center p-4 mb-2 rounded-lg border border-gray-200 shadow-md"
                    >
                        <p className="text-gray-500 text-center suite-bold">+<br />새 글 쓰기</p>
                    </div>
                ) : (
                    <div className="w-full bg-white p-4 rounded-lg border border-gray-300">
                        {/* 글 작성 폼 내부에 독서 상태와 페이지 입력 추가 */}
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-bold text-gray-700">독서 상태:</label>
                            <select
                                className="border border-gray-300 p-2 rounded-lg w-full"
                                value={readingStatus}
                                onChange={(e) => setReadingStatus(e.target.value)}
                            >
                                <option value="before">아직 읽기 전이에요</option>
                                <option value="reading">책 읽는 중이에요</option>
                                <option value="after">다 읽었어요</option>
                            </select>

                            {readingStatus === 'reading' && (
                                <div className="flex mt-2">
                                    <input
                                        type="number"
                                        placeholder="페이지 시작"
                                        className="border border-gray-300 p-2 mr-2 rounded-lg w-1/2"
                                        value={pagesRead.start}
                                        onChange={(e) => setPagesRead({ ...pagesRead, start: e.target.value })}
                                    />
                                    <input
                                        type="number"
                                        placeholder="페이지 끝"
                                        className="border border-gray-300 p-2 rounded-lg w-1/2"
                                        value={pagesRead.end}
                                        onChange={(e) => setPagesRead({ ...pagesRead, end: e.target.value })}
                                    />
                                </div>
                            )}
                        </div>

                        <textarea 
                            className="w-full h-24 p-2 border border-gray-300 rounded-lg resize-none"
                            placeholder="글 작성"
                            maxLength="100"
                            value={currentText}
                            onChange={handleTextChange}
                        ></textarea>
                        <div className="flex justify-between mt-2">
                            <p className="text-sm text-gray-400">{currentText.length} / 100</p>
                            <button 
                                className="bg-indigo-500 text-white p-2 pr-6 pl-6 rounded-lg"
                                onClick={() => setIsWriting(false)} // 게시 버튼 클릭 시 상태 초기화
                            >
                                게시
                            </button>
                        </div>
                    </div>
                )}

                {/* 선택된 사용자의 댓글 보여주기 */}
                <BookComment_start
                    comment={users[selectedUser].comment}
                    date={users[selectedUser].date}
                />
                <BookComment 
                    page_start={users[selectedUser].page_start}
                    page_end={users[selectedUser].page_end}
                    comment={users[selectedUser].comment}
                    date={users[selectedUser].date}
                />
                <BookComment_end
                    comment={users[selectedUser].comment}
                    date={users[selectedUser].date}
                />
            </div>

            {/* BottomNav 고정 */}
            <BottomNav />
        </div>
    );
};

export default GroupDetailPage;