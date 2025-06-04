import { Routes, Route, Link } from 'react-router-dom'
import MainPage from './pages/MainPage'
import AxiosPage from './pages/AxiosPage'
import UseEffectPage from './pages/UseEffectPage'
import './App.css' // CSS 연결

function App() {
  return (
    <div className="container">
      {/* 공통 네비게이션 */}
      <nav className="nav">
        <Link to="/">Main</Link>
        <Link to="/axios">Axios</Link>
        <Link to="/useeffect">UseEffect</Link>
      </nav>

      {/* 라우팅 영역 */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/axios" element={<AxiosPage />} />
        <Route path="/useeffect" element={<UseEffectPage />} />
      </Routes>
    </div>
  )
}

export default App
