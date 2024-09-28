import BookCoverScore from "./components/BookCoverScore"; 
import RectangleWithText from "./components/bookcontent"; 

const GroupDetailPage = () => {
    return (
        <div className="flex flex-col items-start justify-start min-h-screen bg-white p-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-1">
                1퍼센트 부자가 되어보자 모임
            </h1>
            <p className="text-base text-gray-600 mb-4">
                6/7
            </p>
            <div className="w-full bg-gray-200 p-4 rounded-lg flex"> {/* p-5에서 p-4로 변경 */}
                <div className="w-1/2"> 
                    <BookCoverScore 
                        src="/book_example.png" 
                        title="1퍼센트 부자들의 모임"              
                        author="가나다"          
                        num={7}                       
                        className="text-lg"   
                    />
                </div>
                <div className="w-1/2 flex items-start ml-4"> {/* 위로 정렬 및 오른쪽 이동 */}
                    <p className="text-base font-bold text-gray-800">
                        1퍼센트 부자들의 법칙
                    </p>
                </div>
            </div>

            <div className="w-full mt-6 overflow-x-scroll flex space-x-4 p-4"> 
                {Array.from({ length: 6 }).map((_, index) => (
                    <div 
                        key={index}
                        className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"
                    />
                ))}
            </div>

            <div className="mt-4">
                <p className="text-2xl font-bold text-gray-800">홍길동</p> 
            </div>

            <div className="mt-4 w-full">
                {Array.from({ length: 1 }).map((_, index) => (
                    <RectangleWithText key={index} />
                ))}
            </div>
        </div>
    );
};

export default GroupDetailPage;
