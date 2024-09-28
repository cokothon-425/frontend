function BookComment_end ({ comment, date }) {
  return (
    <div className="flex flex-col justify-center items-start text-base bg-white mb-2 text-black rounded-lg font-SUITE p-2 drop-shadow-md">
            <div className="text-left w-full font-bold">
                나의 독후감은?
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

export default BookComment_end;