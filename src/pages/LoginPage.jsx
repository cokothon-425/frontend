import KakaoIcon from '../assets/kakao.svg';
import BottomNav from "../components/BottomNav";

function LoginPage() {
  const handleLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/kakao";
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-28">
      {/* 제목 섹션 */}
      <div className="text-center mb-8">
        <h1 className="text-2xl suite-bold text-blue-600 santokki">책 읽기, 모두 다함께</h1>
        <h2 className="text-5xl suite-bold text-blue-600 sulphur-point-bold">readwith</h2>
      </div>

      {/* 카카오 로그인 버튼 */}
      <button
        className="w-[300px] h-[56px] pl-4 pr-4 flex justify-between items-center bg-[#FFDD00] p-3 rounded-[14px] suite-bold text-black text-lg"
        onClick={handleLogin}
      >
        <img src={KakaoIcon} alt="카카오" width={20} height={20} />
        카카오로 계속하기
        <div className={"w-[20px] h-[20px]"}></div>
      </button>
      <BottomNav />
    </div>
  );
}

export default LoginPage;
