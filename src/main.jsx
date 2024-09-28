import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // App이 Router 전체를 감싸는 역할을 할 수 있음
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/HomePage.jsx';
import GroupCreatePage from './pages/Group/GroupCreatePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Topbar from './components/Topbar.jsx';
import BottomNav from './components/BottomNav.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <div className="relative min-h-screen">
        {/* Topbar를 모든 페이지에 렌더링 */}
        <Topbar />
        
        {/* Routes 설정 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/group-creation" element={<GroupCreatePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>

        {/* BottomNav도 모든 페이지에 고정 */}
        <BottomNav />
      </div>
    </Router>
  </StrictMode>
);