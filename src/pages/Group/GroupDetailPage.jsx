import React, { useEffect, useState } from 'react';
import BookCover from "../../components/BookCover";
import BottomNav from "../../components/BottomNav";
import { useParams } from 'react-router-dom';
import { privateAxios } from '../../apis/axiosInstances';
import BookComment from '../../components/BookComment';
import BookComment_start from '../../components/BookComment_start';
import BookComment_end from '../../components/BookComment_end';
 
const GroupDetailPage = () => {
    const { groupId } = useParams();
    
    const [groupData, setGroupData] = useState(null); // 그룹 데이터를 저장할 상태
    const [isWriting, setIsWriting] = useState(false); // 글쓰기 상태 관리
    const [currentText, setCurrentText] = useState(''); // 글자 수 상태 관리
    const [readingStatus, setReadingStatus] = useState('BEFORE'); // 독서 상태 관리
    const [pagesRead, setPagesRead] = useState({ start: 0, end: 0 }); // 읽은 페이지 범위 관리
    const [selectedUser, setSelectedUser] = useState(0); // 선택된 사용자 인덱스 관리

    const fetchGroup = async () => {
        try {
            const response = await privateAxios.get(`/groups/${groupId}`);
            console.log(response.data);  // API로부터 받아온 데이터 출력
            setGroupData(response.data); // 받아온 데이터를 상태로 저장
        } catch (error) {
            console.error("Error fetching group:", error);
        }
    };

    useEffect(() => {
        fetchGroup();
    }, [groupId]);

    // 글자 수 계산
    const handleTextChange = (e) => {
        setCurrentText(e.target.value);
    };

    const handleRecordPost = async() => {
        console.log("게시 누름");
        setIsWriting(false); // 글쓰기 상태 초기화
        await privateAxios.post(`/records`, {
            content: currentText,
            startPage: pagesRead.start,
            endPage: pagesRead.end,
            status: readingStatus,
            groupId: groupId,
        }).then((response) => {
            if (response.status === 200) {
                console.log("요청 성공");
                fetchGroup();
            }
        }).catch((error) => {
            console.log(error);
        });
    };

    if (!groupData) {
        return <div>로딩 중...</div>; // 데이터가 로딩 중일 때 표시
    }

    const recordByStatus = (status, record, index) => {
        if (status === 'BEFORE') {
            return <BookComment_start key={index} commment={record.content} date={record.createdAt} />;
        } else if (status === 'READING') {
            return <BookComment key={index} commment={record.content} date={record.createdAt} page_start={record.startPage} page_end={record.page_end} />;
        } else {
            return <BookComment_end key={index} commment={record.content} date={record.createdAt} />;
        }
    }

    return (
        <div className="flex flex-col items-start justify-start min-h-screen bg-white p-4 mb-20">
            {/* 그룹명 렌더링 */}
            <h1 className="text-2xl font-bold text-gray-800 mb-1">
                {groupData.name} {/* 받아온 그룹의 이름 */}
            </h1>
            <p className="text-base text-gray-600 mb-4">
                {groupData.currentCount} / {groupData.maxCount}명 참여 중 {/* 참여자 수 */}
            </p>
            <div className="w-full bg-gray-200 p-4 rounded-lg flex">
                <div className="w-1/2"> 
                    <BookCover 
                        src={groupData.book.cover}  // 받아온 책 커버 이미지
                        title={groupData.book.title} // 책 제목
                        author={groupData.book.author} // 저자 이름
                        num={groupData.maxCount}     // 참여 가능한 인원
                        className="text-lg"   
                    />
                </div>
                <div className="w-1/2 flex items-start ml-4">
                    <p className="text-base font-bold text-gray-800">
                        {groupData.book.title} {/* 책 제목 */}
                    </p>
                </div>
            </div>

            {/* 사용자 선택 원 */}
            <div className="w-full mt-6 overflow-x-scroll flex space-x-4 p-4">
                {groupData.members && groupData.members.length > 0 ? (
                    groupData.members.map((member, index) => (
                        <div 
                            key={index}
                            onClick={() => setSelectedUser(index)} // 사용자를 선택
                            className={`w-12 h-12 ${selectedUser === index ? 'bg-blue-300' : 'bg-gray-300'} rounded-full flex-shrink-0 flex items-center justify-center cursor-pointer`}
                        >
                            <span className="text-sm text-white">{member.name[0]}</span> {/* 사용자의 이름 첫 글자 */}
                        </div>
                    ))
                ) : (
                    <p>사용자 정보가 없습니다.</p>
                )}
            </div>

            <div className="mt-4">
                {groupData.members && groupData.members.length > 0 && (
                    <p className="text-2xl font-bold text-gray-800">{groupData.members[selectedUser].name}</p> 
                )}
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
                                <option value="BEFORE">아직 읽기 전이에요</option>
                                <option value="READING">책 읽는 중이에요</option>
                                <option value="AFTER">다 읽었어요</option>
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
                                onClick={handleRecordPost} // 게시 버튼 클릭 시 상태 초기화
                            >
                                게시
                            </button>
                        </div>
                    </div>
                )}

                {
                    groupData.records.filter((record) => record.memberId === groupData.members[selectedUser].id)
                        .map((record, index) => (recordByStatus(record.status, record, index)))
                }
            </div>
            {/* BottomNav 고정 */}
            <BottomNav />
        </div>
    );  
};

export default GroupDetailPage;