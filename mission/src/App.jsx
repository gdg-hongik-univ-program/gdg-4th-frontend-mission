import React from 'react';
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AxiosPage from "./pages/AxiosPage";
import UseEffectPage from "./pages/UseEffectPage";
import { useAtom } from 'jotai';
import { httpCountAtom } from './httpCount';
import axiosInstance from './httpCount';


function App() {
  const [httpCount] = useAtom(httpCountAtom);

  return (
    <div>
      <h2>현재까지 HTTP 호출 횟수: {httpCount}</h2>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/axios" element={<AxiosPage />} />
        <Route path="/useeffect" element={<UseEffectPage />} />
      </Routes>
    </div>
  );
}

export default App;
