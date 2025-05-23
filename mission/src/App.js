import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import MainPage from './Mainpage';
import AxiosPage from './Axiospage';
import UseEffectPage from './UseEffectPage';
import './App.css'; // App 컴포넌트용 CSS (선택 사항)

function App() {
  const navigate = useNavigate(); // App 컴포넌트 자체에서도 navigate 사용 가능

  return (
    <div className="App">
      {/* 모든 페이지에 공통으로 표시될 네비게이션 (선택 사항) */}
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
          {/* useNavigate를 사용한 버튼 예시 (헤더에 둘 수도 있음) */}
          {/* <button onClick={() => navigate('/')}>홈으로 (헤더)</button> */}
        </nav>
      </header>

      <main className="app-content">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/axios" element={<AxiosPage />} />
          <Route path="/useeffect" element={<UseEffectPage />} />
          {/* 일치하는 라우트가 없을 때 보여줄 페이지 (선택 사항) */}
          {/* <Route path="*" element={<div>페이지를 찾을 수 없습니다.</div>} /> */}
        </Routes>
      </main>

      <footer className="app-footer">
        <p>© 2023 My React App</p>
      </footer>
    </div>
  );
}
export default App;