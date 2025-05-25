import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import MainPage from './Mainpage';
import AxiosPage from './Axiospage';
import UseEffectPage from './UseEffectPage';
import './App.css';
function App() {
  const navigate = useNavigate(); 
  return (
    <div className="App">
      <header className="app-header">
        <nav>
          <ul>
            <li>
              <Link to="/">메인</Link>
            </li>
            <li>
              <Link to="/axios">Axios 미션</Link>
            </li>
            <li>
              <Link to="/useeffect">UseEffect 미션</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="app-content">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/axios" element={<AxiosPage />} />
          <Route path="/useeffect" element={<UseEffectPage />} />
        </Routes>
      </main>

      <footer className="app-footer">
        <p>© 2023 My React App</p>
      </footer>
    </div>
  );
}
export default App;