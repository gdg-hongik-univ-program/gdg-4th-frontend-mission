// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom'
import MainPage from './pages/MainPage'
import AxiosPage from './pages/AxiosPage'
import UseEffectPage from './pages/UseEffectPage'

function App() {
  return (
    <div>
      <nav style={{ display: 'flex', gap: '1rem', margin: '1rem' }}>
        <Link to="/">Main</Link>
        <Link to="/axios">Axios</Link>
        <Link to="/useeffect">UseEffect</Link>
      </nav>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/axios" element={<AxiosPage />} />
        <Route path="/useeffect" element={<UseEffectPage />} />
      </Routes>
    </div>
  )
}

export default App

