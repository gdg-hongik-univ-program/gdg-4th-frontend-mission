import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AxiosPage from "./pages/AxiosPage";

function App() {
  return (
    <Router>
      <div className="p-4">
        <nav className="mb-4">
          <Link to="/axios" className="mr-4 text-blue-500">Axios Page</Link>
        </nav>
        <Routes>
          <Route path="/axios" element={<AxiosPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
