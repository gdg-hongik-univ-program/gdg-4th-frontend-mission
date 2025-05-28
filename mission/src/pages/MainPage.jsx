import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-3xl font-bold">Main Page</h1>

      <Link to="/axios" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Go to Axios Page
      </Link>

      <Link to="/useeffect" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Go to UseEffect Page
      </Link>
    </div>
  );
}

export default MainPage;