function BookComment ({ page_start, page_end, content2, date }) {
    const formatDate = (dateTimeString) => {
        const date = new Date(dateTimeString) //문자열을 Date 객체로 변환
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 월은 0부터 시작하므로 +1
        const day = date.getDate().toString().padStart(2, '0');

        return `${year}-${month}-${day}`;  // yyyy-mm-dd 형식으로 반환
    };

  return (
    <div className="flex flex-col justify-center items-start text-base bg-white mb-2 text-black rounded-lg font-SUITE p-2 drop-shadow-md">
            <div className="text-left w-full suite-bold">
                {page_start}p ~ {page_end}p
            </div>
            <div className="text-left w-full suite-normal">
                {content2}
            </div>
            <div className="text-right w-full suite-normal text-gray-500 text-xs">
                {formatDate(date)}
            </div>
        </div>
  )
}

export default BookComment;