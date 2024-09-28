import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/HomePage.jsx'
import GroupCreatePage from './pages/Group/GroupCreatePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import './index.css'
import Topbar from './components/Topbar.jsx'
import BottomNav from './components/BottomNav.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Topbar />
    <Home />
    <BottomNav />
  </StrictMode>
)
