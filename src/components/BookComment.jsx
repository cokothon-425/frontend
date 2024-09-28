function BookComment ({ page_start, page_end, comment, date }) {
  return (
    <div className="flex flex-col justify-center items-start text-base bg-white mb-2 text-black rounded-lg font-SUITE p-2 drop-shadow-lg">
            <div className="text-left w-full font-bold">
                {page_start}p ~ {page_end}p
            </div>
            <div className="text-left w-full font-normal">
                {comment}
            </div>
            <div className="text-right w-full font-normal text-gray-700 text-sm">
                {date}
            </div>
        </div>
  )
}