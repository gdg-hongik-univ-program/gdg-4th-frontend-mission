import React from 'react';
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AxiosPage from "./pages/AxiosPage";
import UseEffectPage from "./pages/UseEffectPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/axios" element={<AxiosPage />} />
      <Route path="/useeffect" element={<UseEffectPage />} />
    </Routes>
  );
}
export default App
