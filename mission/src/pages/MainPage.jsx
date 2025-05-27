import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Main Page</h1>
      <div className="space-x-4">
        <button className="px-4 py-2 bg-gray-200 rounded" onClick={() => navigate("/axios")}>
          Axios Page
        </button>
        <button className="px-4 py-2 bg-gray-200 rounded" onClick={() => navigate("/useeffect")}>
          UseEffect Page
        </button>
      </div>
    </div>
  );
}

export default MainPage;
