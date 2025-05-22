import { Routes, Route, Link } from 'react-router-dom'
import MainPage from './pages/MainPage'
import AxiosPage from './pages/AxiosPage'
import UseEffectPage from './pages/UseEffectPage'

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      {/* 공통 네비게이션 */}
      <nav style={{ marginBottom: '1rem' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Main</Link>
        <Link to="/axios" style={{ marginRight: '1rem' }}>Axios</Link>
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
