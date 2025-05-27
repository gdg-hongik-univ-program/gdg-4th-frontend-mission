import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AxiosPage from "./pages/AxiosPage";
import UseEffectPage from "./pages/UseEffectPage";

function App() {
  return (
    <Router>
      <div className="p-4">
        <nav className="mb-4">
          <Link to="/axios" className="mr-4 text-blue-500">Axios Page</Link>
          <Link to="/useeffect" className="mr-4 text-blue-500">UseEffect Page</Link>
        </nav>
        <Routes>
          <Route path="/axios" element={<AxiosPage />} />
          <Route path="/useeffect" element={<UseEffectPage />} /> {/* ✅ 이 줄 추가 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
