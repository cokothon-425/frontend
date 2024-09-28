function RectangleWithText() {
    // const rectangleStyle = {
    //   width: '1000px',
    //   height: '150px',
    //   border: '2px solid black',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: '16px',
    //   backgroundColor: '#f0f0f0',
    //   marginBottom: '10px',
    //   color: '#000000', 
    // };
  
    return (
      <div>
        
        <div className="flex flex-col justify-center items-start text-base bg-white mb-2 text-black rounded-lg font-SUITE p-2 drop-shadow-lg">
        <div className="text-left w-full font-bold">
            읽기 전 나의 생각은?
        </div>
        <div className="text-left w-full font-normal">
            저는 경제적 자유를 위해 노력하는 방법을 찾을 수 있다고 생각합니다. 이 책에서 제시하는 전략이 나의 관심 목표에 도움이 될 것으로 기대됩니다. 또한, 부에 대한 나의 인식과 자세가 어떻게 변할 것으로 예상되는지가 있습니다.
        </div>
        <div className="text-right w-full font-normal text-gray-700 text-sm">
            2024.09.25
        </div>
        </div>

        <div className="flex flex-col justify-center items-start text-base bg-white mb-2 text-black rounded-lg font-SUITE p-2 drop-shadow-lg">
        <div className="text-left w-full font-bold">
            000p ~ 000p
        </div>
        <div className="text-left w-full font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        </div>
        <div className="text-right w-full font-normal text-gray-700 text-sm">
            2024.09.25
        </div>
        </div>

        <div className="flex flex-col justify-center items-start text-base bg-white mb-2 text-black rounded-lg font-SUITE p-2 drop-shadow-lg">
        <div className="text-left w-full font-bold">
            나의 독후감은?
        </div>
        <div className="text-left w-full font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        </div>
        <div className="text-right w-full font-normal text-gray-700 text-sm">
            2024.09.25
        </div>
        </div>

      </div>
    );
  }
  
  export default RectangleWithText;
  