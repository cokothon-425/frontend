import './App.css';
import RectangleWithText from './components/bookcontent'; 
function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-emerald-600">readwith</h1>
      <RectangleWithText /> {/* RectangleWithText 컴포넌트 사용 */}
    </div>
  );
}

export default App;
