import React from 'react';
import './App.css';
import Home from './pages/MainPage.jsx';
import Mission2 from './pages/AxiosPage.jsx';
import Mission3 from './pages/UseEffectPage.jsx';
import { Routes, Route, useNavigate } from 'react-router-dom';

function NavigatingButton() {
const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => { navigate('/'); }}>
       메인 페이지로 이동하기
      </button>
      <button onClick={() => { navigate('/axios'); }}>
       미션2 페이지로 이동하기
      </button>
      <button onClick={() => { navigate('/useeffect'); }}>
       미션3 페이지로 이동하기
      </button>
      <button onClick={() => { navigate(-1); }}>
       이전 페이지로 이동하기
      </button>
    </div>
  );
}

function App() {
  return (
    <div>
      <NavigatingButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/axios" element={<Mission2 />} />
          <Route path="/useeffect" element={<Mission3 />} />
        </Routes>
    </div>
  )
}
export default App;
