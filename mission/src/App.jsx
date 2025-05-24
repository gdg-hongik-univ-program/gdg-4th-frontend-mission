import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AxiosPage from "./pages/AxiosPage";
import UseEffectPage from "./pages/UseEffectPage";

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/axios" element={<AxiosPage />} />
        <Route path="/useeffect" element={<UseEffectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
