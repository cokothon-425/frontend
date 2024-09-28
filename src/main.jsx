import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/HomePage.jsx';
import GroupCreatePage from './pages/Group/GroupCreatePage.jsx';
import GroupDetailPage from './pages/Group/GroupDetailPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Topbar from './components/Topbar.jsx';
import GroupPage from './pages/Group/GroupPage.jsx';
import KakaoCallbackPage from "./pages/KakaoCallbackPage.jsx";
import BookSelectPage from './pages/Group/BookSelectPage.jsx';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <div className="relative min-h-screen">
        {/* Topbar를 모든 페이지에 렌더링 */}
        <Topbar />

        {/* Routes 설정 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/callback" element={<KakaoCallbackPage />} />
          <Route path="/group" element={<GroupPage />} />
          <Route path="/group/:groupId" element={<GroupDetailPage />} />
          <Route path="/group-creation" element={<GroupCreatePage />} />
          <Route path="/book-select" element={<BookSelectPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  </StrictMode>
);
